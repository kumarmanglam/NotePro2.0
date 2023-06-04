import React from 'react';
import Button from '../core/Button';
import NpToolTip from '../core/Tooltip';
import Text from '../core/Text';

function BackgroundColorChildren({ colorArray, onclick,selectedColor }) {
  console.log('hello ', colorArray);
  return (
    <div
      className="border-testing"
      style={{
        width: 180,
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: 'white',
      }}
    >
      {colorArray?.map((colorObject) => (
        <>
          <div
            id={colorObject?.submitKey}
            style={{
              backgroundColor: colorObject?.color,
              border:selectedColor===colorObject?.color?"1px solid black":"",
              width: 20,
              height: 20,
              borderRadius: '100%',
              margin: 10,
            }}
            onClick={() => onclick(colorObject?.submitKey)}
          />
          <NpToolTip place="right" id={colorObject?.submitKey}>
            <Text label={colorObject.label} />
          </NpToolTip>
        </>
      ))}
    </div>
  );
}

export default BackgroundColorChildren;
