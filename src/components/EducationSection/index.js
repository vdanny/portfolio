import React from 'react';
import Collapse from '../Collapse';
import { header, headerText, yearText, descText } from './styles.module.scss';

export default ({ title, schoolName, year, children, defaultOpen = false }) => (
  <Collapse title={title} defaultOpen={defaultOpen}>
    <div className={header}>
      <div className={headerText}>{schoolName}</div>
      <div className={yearText}>{year}</div>
    </div>
    <div className={descText}>{children}</div>
  </Collapse>
)