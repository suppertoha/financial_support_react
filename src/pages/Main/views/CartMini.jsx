import React from 'react'
import '../Main.scss'

const CartMini = (props) => {
  return (
    <div className="cart">
      <div className="cart__header">
        <div className="cart__title">
        {props.cart.title}
        </div>
        <div className="cart__images">
          {props.cart.image}
        </div>
      </div>
      <div className="cart__content">
        <div className="cart__data">
          <span>
            {props.cart.span1}
          </span>
          {props.cart.data1}
        </div>
        <div className="cart__rate">
          <span>
            {props.cart.span2}
          </span>
          {props.cart.data2}
        </div>
      </div>
      <a href="#" className="btn cart__button">Смотреть условия</a>
    </div>
  )
}

export default CartMini;
