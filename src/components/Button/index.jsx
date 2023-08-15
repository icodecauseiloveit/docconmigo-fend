import React from 'react'
import './_Button.scss'
 
const Button = props => {
  return (
    <>
      <a href={props.link} target="_blank" rel="noreferrer" className="btn">agenda tu cita</a>
    </>
  )
}
 
export default Button