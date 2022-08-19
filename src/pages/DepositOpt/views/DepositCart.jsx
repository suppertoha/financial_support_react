import React from 'react'
import '../DepositSpeed.scss'

const DepositCart = (props) => {
  return (
    <div className="cart">
      <div className="cart__header">
        <div className="cart__title">
        {props.deposit_speed.title}
        </div>
      </div>
      <div className="cart__content">
        <div className="cart__data">
          <span>
            {props.deposit_speed.span1}
          </span>
          {props.deposit_speed.data1}
        </div>
        <div className="cart__rate">
          <span>
            {props.deposit_speed.span2}
          </span>
          {props.deposit_speed.data2}
        </div>
        <div className="cart__data">
          <span>
            {props.deposit_speed.span3}
          </span>
          {props.deposit_speed.data3}
        </div>
        <div className="cart__rate">
          <span>
            {props.deposit_speed.span4}
          </span>
          {props.deposit_speed.data4}
        </div>
      </div>
      
    </div>
  )
}

export default DepositCart;
