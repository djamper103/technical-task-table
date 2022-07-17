// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FC, useEffect, useState } from 'react';
import ReactDom from 'react-dom';

interface PortalContainerState {
  children?: any;
  el?: string;
  className?: string;
}

export const PortalContainer: FC<PortalContainerState> = ({
  children,
  el = 'div',
  className = 'portal'
}) => {
  const [container] = useState(document.createElement(el));

  useEffect(() => {
    container.classList.add(className);
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDom.createPortal(children, container);
};
