import React from 'react';
import styles from './styles.module.scss';

export default ({ score = 0 }) => {
  return (
    <div className={`${styles.progressCircle} ${styles[`progress${score / 5 * 100}`]}`}>
      <div className={styles.progressNumber}>
        <span className={styles.score}>{score}</span>
        <span className={styles.maxScore}>/5</span>
      </div>
    </div>
  )
}