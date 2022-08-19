import React from 'react';
import './Banner_.scss';

export default function Banner_({ title, subtitle, className, children }) {
  return (
    <div className="banner">
      <div className="container">
        <div className={` ${className ? className : ''}`}>
          <h2 className="banner__title">{title}</h2>
          <div className="banner__subtitle">{subtitle}</div>
          <div className='button'>{children}</div>
        </div>
      </div>
    </div>
  );
}
