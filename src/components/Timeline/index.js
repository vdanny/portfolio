import React from 'react';
import { FaLink } from 'react-icons/fa'

import { 
  timeline,
  timelineItem,
  timelineIcon,
  timelineLabel,
  header,
  titleWrapper,
  description
} from './styles.module.scss';

const Timeline = ({ data }) => {

  return (
    <div className={timeline}>
      {data && data.map((d, idx) => (
        <div key={idx} className={timelineItem}>
          <div className={timelineIcon} />
          <div className={timelineLabel}>
            <div className={header}>
              <div className={titleWrapper}>
                <h4>{d.title}</h4>
                <div>{d.name} | {d.time}</div>
              </div>
              {d.url && <a href={d.url}><FaLink /></a>}
            </div>
            <p className={description} dangerouslySetInnerHTML={{ __html: d.desc }} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline