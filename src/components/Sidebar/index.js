import React, { useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import { ROUTES } from '../../routes/routes';

const MENU_LIST = [
  {
    label: 'Note',
    icon: 'Bulb',
    id: '1',
    path: ROUTES.notes.pathname,
  },
  {
    label: 'Archive',
    icon: 'Archive',
    id: '2',
    path: ROUTES.archive.pathname,
  },
  {
    label: 'Trash',
    icon: 'Trash',
    id: '3',
    path: ROUTES.trash.pathname,
  },
];
function Sidebar({ isMenuClicked }) {
  const [isHover, toggleIsHover] = useState(false);

  useEffect(() => {
    toggleIsHover(isMenuClicked);
  }, [isMenuClicked]);
  return (
    <div
      className={`pt-10 bg-white  ${
        isHover ? 'w-40' : 'w-5 pi-10 '
      } sidebar-box-shadow h-screen-full z-99 fixed `}
      onMouseEnter={() => toggleIsHover(true)}
      onMouseLeave={() => toggleIsHover(false)}
    >
      {MENU_LIST.map((menu) => (
        <MenuItem
          key={menu.id}
          label={menu.label}
          path={menu.path}
          icon={menu.icon}
          isHovered={isHover}
        />
      ))}
    </div>
  );
}
export default Sidebar;
