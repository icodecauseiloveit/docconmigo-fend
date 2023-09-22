import React from 'react'
import './_ReviewLink.scss'

 
const ReviewLink = ({ imageSrc, link }) => {
  return (
    <div className="animated-image-container">
        <a href={link} className="animated-image-container__image-link">
            <img src={imageSrc} alt="Imagen Fija" className="animated-image-container__animated-image" />
        </a>
    </div>
  )
}
 
export default ReviewLink