import React, { useEffect, useState } from 'react';
import Icon from '../core/Icon';
import Text from '../core/Text';
import { Link, useLocation } from 'react-router-dom';

function MenuItem({ isHovered, label, id, icon, path }) {
  const location = useLocation();
  const isActive = location.pathname === path;
  const [isHoveredId, setIsHoveredId] = useState(null);

  return (
    <Link
      className="link-style-remove"
      to={path}
      onMouseOver={() => setIsHoveredId(id)}
      onMouseLeave={() => setIsHoveredId(null)}
    >
      <div
        className={` flex ac gap-30 p-10 ${isActive ? 'bg-yellow' : ''} ${
          isHovered ? 'pl-10' : ''
        } 
      ${
        isHoveredId === id && !isActive
          ? 'radius-hover-menu-item pl-10 bg-grey'
          : ''
      } ${isHovered ? 'radius-hover-menu-item' : 'radius-nohover-menu-item'}`}
      >
        <Icon name={icon} size="large" color="grey-drk" />
        {isHovered && <Text label={label} classes={' text-lg grey-drk'} />}
      </div>
    </Link>
  );
}

export default MenuItem;
