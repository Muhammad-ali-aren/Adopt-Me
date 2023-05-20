import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
const Portal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }
  useEffect(() => {
    const portalDiv = document.getElementById('modal');
    portalDiv.appendChild(elRef.current);
    return () => {
      portalDiv.removeChild(elRef.current);
    };
  }, []);
  return createPortal(<div>{children}</div>, elRef.current);
};
export default Portal;
