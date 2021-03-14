import React, { useState } from 'react';

import { collapse, title, active, text, btnClose } from './styles.module.scss';

export default ({ title : titleText, children, defaultOpen }) => {
  const [ open, setOpen ] = useState(defaultOpen);

  return (
    <div className={`${collapse} ${open ? active : null }`}>
      <div 
        className={title}
        onClick={() => setOpen(!open)}
      >
        {titleText}
        <span className={btnClose}>+</span>
      </div>
      <div className={text}>{children}</div>
    </div>
  )
}