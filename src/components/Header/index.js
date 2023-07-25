import React from 'react';
import Icon from '../core/Icon';
import Text from '../core/Text';
import Button from '../core/Button';
import GlobalModal from '../core/GlobalModal';

function Header({ onHeaderMenuClick }) {
  return (
    <div className="flex fixed top-0 ac p-10 gap-10 border-bottom  z-999 w-full jfs">
      <Button
        icon="Menu"
        size="large"
        classes="mr-30 ml-10"
        onClick={onHeaderMenuClick}
      />
      <Icon name="Logo" size={'large'} classes={'flex ac jc logo-yellow'} />
      <div className="flex gap-4 ac">
        <Text label="NotePro" classes="text-lg font-medium grey-md" />
        <Text label="v2" classes="text-xs font-normal grey-smd" />
      </div>
      <GlobalModal />
    </div>
  );
}

export default Header;
