import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

const Card = ({ frontmatter, slug }) => {
  return (
    <Link to={slug} className="card-styles">
      <div>
        {
          frontmatter.featuredImage && (
            <Image
              className="card-image"
              fluid={frontmatter.featuredImage.childImageSharp.fluid}
            />
          )
        }
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
