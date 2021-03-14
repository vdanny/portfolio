import React from 'react';

import Rating from '../Rating';
import { skill, textWrapper, titleWrapper, childrenWrapper } from './styles.module.scss';

export default ({ title = '', score = 5, children }) => (
  <div className={skill}>
    <Rating score={score}/>
    <div className={textWrapper}>
      <h4 className={titleWrapper}>
        {title}
      </h4>
      <p className={childrenWrapper}>
        {children}
      </p>
    </div>
  </div>
)