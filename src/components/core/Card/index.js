import React from 'react';
import Text from '../Text';
import {
  ACTION_BUTTON,
  COMPONENT_TYPE,
  PAGE_TYPE,
} from '../../../common/common';
import Button from '../Button';
import { Tooltip } from 'react-tooltip';
import NpToolTip from '../Tooltip';
import NpPopup from '../NpPopup';
import {useDispatch} from "react-redux"
import Icon from '../Icon';
import BackgroundColorChildren from '../../common/BackgroundColorChildren';
import { addArchivedNotes, addTrashedNotes, removeOtherNotes, removeTrashedNotes, updateOtherNotes } from '../../../store/app';

function Card({id, height,title,description,backgroundColor,pageType }) {
  const dispatch = useDispatch()
  const handleSubmit = (submitKey) => {
    console.log(submitKey,submitKey?.includes("BgColor"));
    if(submitKey.includes("BgColor")){
        const [key,color]=submitKey.split("--")
        dispatch(updateOtherNotes({id:id,key:"submitKey",value:submitKey}));
        dispatch(updateOtherNotes({id:id,key:"backgroundColor",value:`#${color}`}));
    }
    if(submitKey==='trash'){
      console.log(submitKey);
      dispatch(addTrashedNotes({id: id, title: title, description: description}));
      dispatch(removeOtherNotes(id));
    }    
    if(submitKey==='archive'){
      console.log(submitKey);
      dispatch(addTrashedNotes({id: id, title: title, description: description}));
      dispatch(removeOtherNotes(id));
    }
    if(submitKey==="deleteForever"){
      dispatch(removeTrashedNotes(id))
    }
  };

  const getChildrenComponent = (object, onClick ,backgroundColor) => {
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
  function getActionButton(object, onClick,backgroundColor) {
    let component;
    switch (object.type) {
      case COMPONENT_TYPE.POPUP:
        component = (
          <>
            <NpPopup
              ComponentTrigger={<Icon size="medium" name={object?.icon} />}
            >
              {getChildrenComponent(object, onClick,backgroundColor)}
            </NpPopup>
          </>
        );
        break;

      case COMPONENT_TYPE.BUTTON:
        component = (
          <>
            <Button
              icon={object?.icon}
              onClick={() => onClick(object?.submitKey)}
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
  return (
    <div className="note" style={{wordWrap:"wrap", height: 'max-content',backgroundColor:backgroundColor }}>
      <Text classes={"word-wrap w-full  "} label={title} />
      <Text classes={"word-wrap w-full  "} label={description}/>
      <div className="flex gap-10 mt-30 flex-end">
        {ACTION_BUTTON[pageType].map((actionBtn) =>
          getActionButton(actionBtn, handleSubmit,backgroundColor)
        )}
      </div>
    </div>
  );
}

export default Card;
