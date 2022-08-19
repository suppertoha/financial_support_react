import React from 'react';
import './MainCart_.scss';

export default function MainCart_({
  title,
  title1,
  description,
  description1,
  children,
  className,
}) {
  return (
    <div className={`main ${className ? className : ''}`}>
      <div className="main__inner">
        <h2 className="main__title">
          {title}
          <br />
          {title1}
        </h2>

        <div className="main__data">{description}</div>
        <div className="main__sum">{description1}</div>
        <div className="button">{children}</div>
      </div>
    </div>
  );
}
