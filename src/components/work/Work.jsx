import React from 'react';
import './Work.scss'

export default function Work({title,title1, text, image, children}) {
  return (
    <div className="work__block">
      <div className="work__content">
        <h2 className="work__title">
          {title} <span></span>
          {title1}
        
        </h2>
        <div className="work__text">
          {text}
        </div>
        <div className="button">{children ? children: null}</div>
      </div>
      <div className="work__images">
        {image ? <div> <img src={image} /> </div>: null}
      </div>
    </div>
  );
}
