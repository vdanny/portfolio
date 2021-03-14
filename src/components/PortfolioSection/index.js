import React from 'react';
import { frontWrapper, portfolioWrapper, portfolioItem, withImg, flipVertical, front, back, centerVert } from './styles.module.scss';

export default ({ data }) => {

  return (
    <div className={portfolioWrapper}>
      {data && data.map((d, index) => (
        <div className={`${portfolioItem} ${index % 2 === 0 ? flipVertical : ''}`} key={index}>
          <div className={`${front} ${d.image ? withImg : ''}`} style={d.color ? { backgroundColor: d.color } : null}>
            {d.image ?
              <div className={frontWrapper}>
                <div className={centerVert}>
                  <img src={d.image} {...(d.width ? { width: d.width } : { height: 200 })} />
                </div>
              </div>
              :
              <div className={frontWrapper} style={d.color ? { color: d.color } : null}>
                <div className={centerVert}>
                  <h3 dangerouslySetInnerHTML={{ __html: d.name }} />
                </div>
              </div>
            }
          </div>
          <div className={back}>
            <div className={centerVert}>
              <p>{d.description}</p>
              {d.url && <a href={d.url}>See Project</a>}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}