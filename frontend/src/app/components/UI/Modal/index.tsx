import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  // setIsOpen: any
  isOpen: boolean;
};

function Modal(props: Props) {
  if (!props.isOpen) return;
  return (
    <div className="absolute top-0 left-0 bg-[#1a1a1a44] flex justify-center items-center w-full h-full">
      {props.children}
    </div>
  );
}

export default Modal;
