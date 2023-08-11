import React from 'react'
import './_Hero.scss'

import { AnimatedText, Button } from '../../components'

// const benefits = [
//   "aumentar tu energía", 
//   "alcanzar tu peso ideal",
//   "abandonar tu inflamación", 
//   "regular la diabetes",
//   "dominar el estrés",
//   "tener un sueño reparador"
// ]

const Hero = props => {
  return (
    <>
      <section className="hero">
        <div className="hero__overlay">
            <div className="hero__logo">
                <h1 className='hero__txt-logo'>Doc<span>Conmigo</span></h1>
            </div>
            <div className="hero__intro">

            <p className="hero__txt-intro">juntos es posible <br/></p>
            <p className="hero__txt-intro--biger"> <AnimatedText /> </p>
            <Button link="https://wa.me/573025261619?text=Me%20interesan%20sus%20servicios%20como%20m%C3%A9dico%20funcional"/>
            </div>
            
        </div>
      </section>
    </>
  )
}
 
export default Hero