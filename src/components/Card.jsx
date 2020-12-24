import React from 'react'
import { Link } from 'gatsby'
import Images from './Images.jsx'

const Card = ({ frontmatter, slug }) => {
  return (
    <Link to={slug} className="card-styles">
      <div>
        <Images
          className="card-image"
          featuredImage={frontmatter.featuredImage}
        />
      </div>
      <div>
        <span className="card-topic">{frontmatter.category}</span>
        <h3>{frontmatter.title}</h3>
      </div>
    </Link>
  )
}
export default Card
