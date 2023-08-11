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

            {/* <h2 className="hero__welcome">Soy la <span>Dra. Lucia Cortez</span></h2> */}
            {/* <h3 className="hero__profession">Médico Funcional</h3> */}
            <p className="hero__txt-intro">juntos es posible <br/></p>
            <p className="hero__txt-intro--biger"> <AnimatedText /> </p>
            <Button />
            </div>
            
        </div>
      </section>
    </>
  )
}
 
export default Hero