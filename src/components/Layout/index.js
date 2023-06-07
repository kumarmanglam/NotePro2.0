import React from 'react';
import { useState } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';

function Layout() {
  const [Value, setValue] = useState(false);

  return (
    <div>
      <Header onHeaderMenuClick={() => setValue((prev) => !prev)} />
      <div className="flex w-full mt-54">
        <Sidebar isMenuClicked={Value} />
        <div className="w-full ml-50 z-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
