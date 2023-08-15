import React from 'react'
import './_Home.scss'
import { Hero, Navbar } from '../../components'
 
const Home = props => {
  return (
    <>
      <Hero />
      <Navbar />
      <div style={{height: '100rem'}}></div>
    </>
  )
}
 
export default Home