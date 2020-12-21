import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import Maybe from './Maybe.jsx'

const Card = ({ frontmatter, slug }) => {
  return (
    <Link to={slug} className="card-styles">
      <div>
        <Maybe if={frontmatter.featuredImage}>
          <Image
            className="card-image"
            fluid={frontmatter.featuredImage.childImageSharp.fluid}
          />
        </Maybe>
      </div>
      <div>
        <span className="card-topic">{frontmatter.category}</span>
        <h3>{frontmatter.title}</h3>
      </div>
      {/* <figure className="card-styles">
        <figcaption>
        </figcaption>
      </figure> */}
    </Link>
  )
}
export default Card
