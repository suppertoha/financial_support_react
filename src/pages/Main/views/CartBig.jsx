import React from 'react'
import '../Main.scss'

export default function CartBig(props) {
  return (
    <div className="cart">
    <div className="cart__header">
      <div className="cart__title">
          {props.cart_big.title}
          <br />
          {props.cart_big.title1}
      </div>
      <div className="cart__images">
        {props.cart_big.image}
      </div>
      </div>
      <div class="cart__text">
        {props.cart_big.text}
          <br />
        {props.cart_big.text1}
      </div>
    <div className="cart__content">
      <div className="cart__data">
        <span>
          {props.cart_big.span1}
        </span>
        {props.cart_big.data1}
      </div>
      <div className="cart__rate">
        <span>
          {props.cart_big.span2}
        </span>
        {props.cart_big.data2}
      </div>
    </div>
    <a href="#" className="btn cart__button">Смотреть условия</a>
  </div>
  )
}
