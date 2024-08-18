import React from "react";
import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

function PopupForm({ FormComponent, containerStyle }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  function handleClose() {}

  return createPortal(
    <dialog
      ref={dialog}
      className={`relative size-full flex justify-center bg-transparent ${containerStyle}`}
      onClose={handleClose}
    >
      {<FormComponent />}
    </dialog>,
    document.getElementById("popup-models")
  );
}

export default React.forwardRef(PopupForm);
