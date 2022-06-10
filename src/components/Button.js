import React from 'react'

const Button = ({text}) => {
  return (
    <button  className='btn btn-full letter-spacing uppercase'><span>{text}</span></button>
  )
}

export default Button