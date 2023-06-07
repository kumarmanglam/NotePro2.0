import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  archiveNotesSelector,
  otherNotesSelector,
  trashNotesSelector,
} from '../../../store/appselector';
import {
  addOtherNotes,
  updateArchivedNotes,
  updateOtherNotes,
  updateTrashedNotes,
} from '../../../store/app';
import { PAGE_TYPE } from '../../../common/common';
import Input from '../Input';
import Button from '../Button';
import { useOnClickOutside } from '../../../hooks/useOutsideClick';

function EditCard({ mode, istoggleable = false }) {
  const wrapperRef = useRef();
  const dispatch = useDispatch();
  const [isDescActive, setIsDescActive] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const otherNotes = useSelector(otherNotesSelector);
  const archiveNotes = useSelector(archiveNotesSelector);
  const trashNotes = useSelector(trashNotesSelector);
  const [cardId, setCardId] = useState(null);
  const onSubmit = () => {
    // update redux in this
    setIsDescActive(false);
    if (title.length || description.length) {
      console.log('hi', title, description);
      switch (mode) {
        case PAGE_TYPE.NOTES:
          dispatch(
            updateOtherNotes({ id: cardId, key: 'title', value: title })
          );
          dispatch(
            updateOtherNotes({
              id: cardId,
              key: 'description',
              value: description,
            })
          );
          break;
        case PAGE_TYPE.ARCHIVE:
          dispatch(
            updateArchivedNotes({ id: cardId, key: 'title', value: title })
          );
          dispatch(
            updateArchivedNotes({
              id: cardId,
              key: 'description',
              value: description,
            })
          );
          break;
        case PAGE_TYPE.TRASH:
          dispatch(
            updateTrashedNotes({ id: cardId, key: 'title', value: title })
          );
          dispatch(
            updateTrashedNotes({
              id: cardId,
              key: 'description',
              value: description,
            })
          );
          break;
        default:
          break;
      }

      // dispatch(updateOtherNotes(id, title, description))
    }
    // setDescription('');
    // setTitle('');
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete(mode);
    setSearchParams(searchParams);
  };
  const [searchParams, setSearchParams] = useSearchParams();
  useOnClickOutside(wrapperRef, onSubmit);
  useEffect(() => {
    let notes = null;
    switch (mode) {
      case PAGE_TYPE.NOTES:
        notes = otherNotes;
        break;
      case PAGE_TYPE.ARCHIVE:
        notes = archiveNotes;
        break;
      case PAGE_TYPE.TRASH:
        notes = trashNotes;
        break;
      default:
        break;
    }

    const _cardId = searchParams.get(mode);
    setCardId(_cardId);
    const selectedNotesValue = notes?.find((item) => item.id === _cardId);
    setTitle(selectedNotesValue?.title);
    setDescription(selectedNotesValue?.description);
  }, [JSON.stringify(searchParams)]);

  return (
    <div ref={wrapperRef} className=" w-full mi-a mt-10 h-100 flex flex-col ">
      <Input
        value={title}
        onChange={(e) => setTitle(e?.target?.value)}
        variant="text"
        placeholder="Title"
      />
      <Input
        value={description}
        onChange={(e) => setDescription(e?.target?.value)}
        wrapperClasses="flex-grow mt-10 mb-10 mh-100"
        variant="textArea"
        placeholder="Take a note..."
      />
      <div className="flex flex-end gap-20">
        <Button label={'close'} onClick={onSubmit} />
      </div>
    </div>
  );
}

export default EditCard;
