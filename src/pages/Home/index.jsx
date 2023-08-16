import React from 'react'
import './_Home.scss'
import { Hero, Navbar, Whoami } from '../../components'
 
const Home = props => {
  return (
    <>
      <Hero />
      <Navbar />
      <Whoami />
    </>
  )
}
 
export default Home