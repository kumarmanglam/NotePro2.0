import React from 'react';
import { applyMapper } from './helper';
import './icon-style.css';
import { ICON_SIZE } from '../../../common/button';

function Icon({ name, classes, size, color }) {
  const Component = applyMapper(name);
  return Component ? (
    <Component className={`${ICON_SIZE[size]} ${classes} ${color}`} />
  ) : null;
}

export default Icon;
