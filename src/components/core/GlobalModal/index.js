import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MODAL_SEARCH_PARAMS } from './searchParams';
import Modal from '../Modal';
import { MODAL_COMPONENTS } from './modalComponents';
function GlobalModal() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [currentKeyState, setCurrentKey] = useState(null);
  useEffect(() => {
    const allModalKeys = Object.keys(MODAL_COMPONENTS);
    const curentKey = [...searchParams.keys()]
      .filter((item) => allModalKeys.includes(item))
      .pop();

    if (curentKey) {
      setCurrentKey(curentKey);
      setIsOpen(!!curentKey);
      // const currentValue=searchParams.getAll(curentKey).pop();
    } else {
      setCurrentKey(null);
      setIsOpen(false);
    }
    // console.log({allModalKeys,curentKey,searchParamArray:[...searchParams],currentValue})
  });
  const component = MODAL_COMPONENTS[currentKeyState];
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      {component}
    </Modal>
  );
}

export default GlobalModal;
