import React from 'react';
import './DepositCart_.scss'

const DepositCart_ = ({ title, span1, data1, span2, data2, span3, data3, span4, data4, children }) => {
  return (
    <div className="cart-deposit">
      <div className="cart-deposit__header">
        <div className="cart-deposit__title">{title}</div>
      </div>
      <div className="cart-deposit__content">
        <div className="cart-deposit__data">
          <span>{span1}</span>
          {data1}
        </div>
        <div className="cart-deposit__rate">
          <span>{span2}</span>
          {data2}
        </div>
        <div className="cart-deposit__data1">
          <span>{span3}</span>
          {data3}
        </div>

        <div className="cart-deposit__rate">
          <span>{span4 ? span4 : null}</span>
          {data4 ? data4 : null}
        </div>
      
      </div>

      <div>{children}</div>
    </div>
  );
};

export default DepositCart_;
