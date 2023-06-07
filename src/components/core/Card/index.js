import React, { useRef } from 'react';
import Text from '../Text';
import {
  ACTION_BUTTON,
  COMPONENT_TYPE,
  PAGE_TYPE,
  PAGE_VS_SEARCH_PARAMS,
} from '../../../common/common';
import Button from '../Button';
import { Tooltip } from 'react-tooltip';
import NpToolTip from '../Tooltip';
import NpPopup from '../NpPopup';

import { useDispatch, useSelector } from 'react-redux';
import Icon from '../Icon';
import BackgroundColorChildren from '../../common/BackgroundColorChildren';
import {
  addArchivedNotes,
  addOtherNotes,
  addTrashedNotes,
  removeOtherNotes,
  removeTrashedNotes,
  restoreTrashedNotes,
  unarchiveNotes,
  updateOtherNotes,
  removeArchiveNote,
} from '../../../store/app';
import { archiveNotesSelector } from '../../../store/appselector';
import { useSearchParams } from 'react-router-dom';

function Card({ id, height, title, description, backgroundColor, pageType }) {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const ArchivedNotes = useSelector(archiveNotesSelector);
  const handleSubmit = (submitKey) => {
    console.log(submitKey, submitKey?.includes('BgColor'));
    if (submitKey.includes('BgColor')) {
      const [key, color] = submitKey.split('--');
      dispatch(
        updateOtherNotes({ id: id, key: 'submitKey', value: submitKey })
      );
      dispatch(
        updateOtherNotes({ id: id, key: 'backgroundColor', value: `#${color}` })
      );
    }
    if (submitKey === 'trash') {
      console.log(submitKey);
      dispatch(
        addTrashedNotes({
          id: id,
          title: title,
          description: description,
          backgroundColor,
        })
      );
      if (ArchivedNotes.filter((item) => item.id === id).length) {
        dispatch(removeArchiveNote(id));
      } else {
        dispatch(removeOtherNotes(id));
      }
    }
    if (submitKey === 'archive') {
      console.log(submitKey);
      dispatch(
        addArchivedNotes({
          id: id,
          title: title,
          description: description,
          backgroundColor,
        })
      );

      dispatch(removeOtherNotes(id));
    }
    if (submitKey === 'deleteForever') {
      dispatch(removeTrashedNotes(id));
    }
    if (submitKey === 'restore') {
      dispatch(
        addOtherNotes({
          id: id,
          title: title,
          description: description,
          backgroundColor,
        })
      );
      dispatch(restoreTrashedNotes(id));
    }
    if (submitKey === 'unarchive') {
      dispatch(unarchiveNotes(id));
      dispatch(
        addOtherNotes({
          id: id,
          title: title,
          description: description,
          backgroundColor,
        })
      );
    }
  };

  const getChildrenComponent = (object, onClick, backgroundColor) => {
    let component;
    switch (object?.popupChildType) {
      case 'backgroundColor':
        component = (
          <BackgroundColorChildren
            selectedColor={backgroundColor}
            colorArray={object?.children}
            onclick={onClick}
          />
        );
        break;
      default:
        break;
    }
    // console.log(component);
    return component;
  };
  function getActionButton(object, onClick, backgroundColor) {
    let component;
    switch (object.type) {
      case COMPONENT_TYPE.POPUP:
        component = (
          <>
            <NpPopup
              ComponentTrigger={<Icon size="medium" name={object?.icon} />}
            >
              {getChildrenComponent(object, onClick, backgroundColor)}
            </NpPopup>
          </>
        );
        break;

      case COMPONENT_TYPE.BUTTON:
        component = (
          <>
            <Button
              icon={object?.icon}
              onClick={(e) => {
                onClick(object?.submitKey);
                e?.stopPropagation();
              }}
            />
            <NpToolTip>
              <Text label={object?.label} />
            </NpToolTip>
          </>
        );

        break;
      default:
        break;
    }
    return component;
  }
  const ref = useRef();
  return (
    <div
      ref={ref}
      className="note z-9991 "
      style={{
        wordWrap: 'wrap',
        height: 'max-content',
        backgroundColor: backgroundColor,
      }}
      onClick={(e) => {
        e.stopPropagation();
        setSearchParams({ [PAGE_VS_SEARCH_PARAMS[pageType]]: id });
      }}
    >
      {title ? (
        <Text classes={'word-wrap w-full text-lg'} label={title} />
      ) : null}
      {description ? (
        <Text classes={'word-wrap w-full grey-drk mt-10'} label={description} />
      ) : null}
      <div className="flex gap-10 mt-30 flex-end">
        {ACTION_BUTTON[pageType].map((actionBtn) =>
          getActionButton(actionBtn, handleSubmit, backgroundColor)
        )}
      </div>
    </div>
  );
}

export default Card;
