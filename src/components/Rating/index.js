import React from 'react';
import './styles.scss';

export default ({ score = 0 }) => {
  return (
    <div className={`${'progress-circle'} ${`progress${score / 5 * 100}`}`}>
      <div className={'progress-number'}>
        <span className={'score'}>{score}</span>
        <span className={'max-score'}>/5</span>
      </div>
    </div>
  )
}