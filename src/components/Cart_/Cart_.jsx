import React, { Children } from 'react';
import './Cart_.scss';

export default function Cart_({
  title,
  image,
  subtitle,
  subtitle1,
  info,
  description,
  info1,
  description1,
  title1,
  children,
  className
}) {
  return (
    <div className={`cart ${className ? className : ''}`}>
      <div className="cart__header">
        <div className="cart__title">
          {title} 
          <span></span>
          {title1}
        </div>
        <div className="cart__images">{image ? <div> <img src={image} /> </div>: null}</div>
      </div>

      <div className="cart__subtitle">
        {subtitle ? subtitle: null}
        <span></span>
        {subtitle1 ? subtitle1: null} 
      </div>
      <div className="cart__content">
        <div className="cart__items">
          <div className="cart__info">{info}</div>
          <div className="cart__description">{description}</div>
        </div>
        <div className="cart__items">
          <div className="cart__info">{info1}</div>
          <div className="cart__description">{description1}</div>
        </div>
      </div>
      {children}
    </div>
  );
}
