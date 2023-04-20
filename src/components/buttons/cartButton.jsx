import React from 'react'

const CartButton = (props) => {
  return (
    <>
      <button style={{backgroundColor:'red',color:'white'}}>Add{props.book} To Cart</button>
    </>
  )
}

export default CartButton
