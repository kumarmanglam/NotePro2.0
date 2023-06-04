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
import Icon from '../Icon';
import BackgroundColorChildren from '../../common/BackgroundColorChildren';

function Card({ height,title,description,backgroundColor }) {
  const handleSubmit = (submitKey) => {
    console.log(submitKey);
  };

  const getChildrenComponent = (object, onClick,backgroundColor) => {
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
    console.log(component);
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
        {ACTION_BUTTON[PAGE_TYPE.NOTES].map((actionBtn) =>
          getActionButton(actionBtn, handleSubmit,backgroundColor)
        )}
      </div>
    </div>
  );
}

export default Card;
