import React from 'react'
import Image from 'gatsby-image'

const Images = (props) => {
  return props.featuredImage ? (
    <Image
      className={props.className}
      fluid={props.featuredImage.childImageSharp.fluid}
    />
  ) : <></>
}

export default Images
