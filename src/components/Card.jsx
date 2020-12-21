import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Card = ({ frontmatter, slug }) => {
  return (
    <Link to={slug}>
      <figure className="card-styles">
        {
          frontmatter.featuredImage && (
            <Image
              className="card-image"
              fluid={frontmatter.featuredImage.childImageSharp.fluid}
            />
          )
        }

        <figcaption>
          <div className="card-topic">{frontmatter.category}</div>
          <h3>{frontmatter.title}</h3>
        </figcaption>
      </figure>
    </Link>
  )
}
export default Card
