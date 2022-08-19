import React from 'react'
import '../Loans.scss'

const LoansCart = (props) => {
  return (
    <div className="cart">
      <div className="cart__header">
        <div className="cart__title">
        {props.loansCart.title}
        </div>
        <div className="cart__images">
          {props.loansCart.image}
        </div>
      </div>
      <div className="cart__text">
      {props.loansCart.text}
      </div>
      <div className="cart__content">
        <div className="cart__data">
          <span>
            {props.loansCart.span1}
          </span>
          {props.loansCart.data1}
        </div>
        <div className="cart__rate">
          <span>
            {props.loansCart.span2}
          </span>
          {props.loansCart.data2}
        </div>
      </div>
      
    </div>
  )
}

export default LoansCart;
