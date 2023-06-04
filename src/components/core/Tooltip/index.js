import 'react-tooltip/dist/react-tooltip.css';

import { Tooltip } from 'react-tooltip';

import React from 'react';
// place value can be top right bottom left
function NpToolTip({ id, place = 'top', children }) {
  return (
    <Tooltip anchorSelect={`#${id}`} noArrow data-tooltip-place={place}>
      {children}
    </Tooltip>
  );
}

export default NpToolTip;
