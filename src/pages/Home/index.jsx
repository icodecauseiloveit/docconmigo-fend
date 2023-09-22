import React from 'react'
import './_Home.scss'
import { Hero, Navbar, Whoami, ReviewLink } from '../../components'
import reviewImage from '../../assets/opinion.png'

const Home = props => {
  return (
    <>
      <Hero />
      <Navbar />
      <Whoami />
      <ReviewLink imageSrc={reviewImage} link="https://g.page/r/CS_-8Koe6-hwEBE/review" />
    </>
  )
}
 
export default Home