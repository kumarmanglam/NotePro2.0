import React from 'react';
import Popup from 'reactjs-popup';

function NpPopup({
  ComponentTrigger,
  wrapperClass,
  triggerWrapperClass,
  position = 'bottom',
  children,
}) {
  return (
    <Popup
      trigger={(open) => (
        <button className={`npbtn ${triggerWrapperClass}`}>
          {ComponentTrigger}
        </button>
      )}
      position={position}
      closeOnDocumentClick
    >
      <div className={`np-popup-child ${wrapperClass}`}>{children}</div>
    </Popup>
  );
}

export default NpPopup;
