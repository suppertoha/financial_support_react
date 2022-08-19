import React from 'react'
import '../Main.scss'

export default function CartDeposit(props) {
  return (
    <div className="cart">
      <div className="cart__header">
        <div className="cart__title">
          {props.cart_mini.title}
          <br />
          {props.cart_mini.title1}
        </div>
        <div className="cart__images">
          {props.cart_mini.image}
        </div>
      </div>
      <div className="cart__content">
        <div className="cart__data">
          <span>
            {props.cart_mini.span1}
          </span>
          {props.cart_mini.data1}
        </div>
        <div className="cart__rate">
          <span>
            {props.cart_mini.span2}
          </span>
          {props.cart_mini.data2}
        </div>
      </div>
    </div>
  )
}
