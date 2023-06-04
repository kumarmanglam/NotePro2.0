import React, { useRef, useState } from 'react';
import Input from '../../core/Input';
import Button from '../../core/Button';
import { useOnClickOutside } from '../../../hooks/useOutsideClick';

function Form({istoggleable=false}) {
  const wrapperRef=useRef();
  const [isDescActive, setIsDescActive] = useState(false);
  
  const onSubmit=()=>{
    // update redux in this
    setIsDescActive(false)
  }
useOnClickOutside(wrapperRef,istoggleable?()=>onSubmit:()=>{})

  return (

    <div ref={wrapperRef} className=" w-400 mi-a mt-30 p-10 br-10 pi-20 form-box-shadow">
      {(isDescActive&&istoggleable)?<Input variant="text" placeholder="Title" />:null}
      <Input
        wrapperClasses="mt-10"
        variant="textArea"
        placeholder="Take a note..."
        onClick={istoggleable?()=>setIsDescActive(true):()=>{}}
      />
      {(isDescActive&&istoggleable)?<div className="flex mt-10 gap-20">
        <Button icon="Archive" />
        <Button icon="Trash" />
        <Button label={"close"} onClick={onSubmit}/>
      </div>:null}
    </div>
  );
}

export default Form;
