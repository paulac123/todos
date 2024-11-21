import { createPortal } from "react-dom";
import React from "react";


function Modal({children}) {
return createPortal(
    <div className="Modal">
        {children}
    </div>,
    document.getElementById('modal')
);
}

export {Modal};