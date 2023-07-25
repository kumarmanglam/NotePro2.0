import React, { useRef, useState } from 'react';
import Input from '../../core/Input';
import Button from '../../core/Button';
import { useOnClickOutside } from '../../../hooks/useOutsideClick';
import { useDispatch } from 'react-redux';
import { addOtherNotes } from '../../../store/app';
import { getUniqueId } from '../../../common/functions';
function Form({ istoggleable = false }) {
  const wrapperRef = useRef();
  const dispatch = useDispatch();
  const [isDescActive, setIsDescActive] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const onSubmit = () => {
    // update redux in this
    setIsDescActive(false);
    if (title.length || description.length) {
      console.log('hi', title, description);
      dispatch(
        addOtherNotes({
          id: getUniqueId(),
          title,
          description,
          backgrounColor: null,
        })
      );
    }
    setDescription('');
    setTitle('');
  };
  useOnClickOutside(wrapperRef, istoggleable ? () => onSubmit() : () => {});

  return (
    <div ref={wrapperRef} className=" w-400 mi-a mt-30  br-10  form-box-shadow">
      {isDescActive && istoggleable ? (
        <Input
          value={title}
          onChange={(e) => setTitle(e?.target?.value)}
          variant="text"
          placeholder="Title"
          wrapperClasses="form-input"
        />
      ) : null}
      <Input
        value={description}
        onChange={(e) => setDescription(e?.target?.value)}
        wrapperClasses="mt-10 mb-10 form-input"
        variant="textArea"
        placeholder="Take a note..."
        onClick={istoggleable ? () => setIsDescActive(true) : () => {}}
      />
      {isDescActive && istoggleable ? (
        <div className="flex mt-10 gap-20">
          <Button icon="Archive" />
          <Button icon="Trash" />
          <Button label={'close'} onClick={onSubmit} />
        </div>
      ) : null}
    </div>
  );
}

export default Form;
