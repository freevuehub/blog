import React from "react"
import { Link } from "gatsby"
import Images from './Images.jsx'

const FeaturedCard = (props) => (
  <figure className={`featured-link ${props.className}`}>
    <Link to={props.fields.slug}>
      <div className="featured-overlay"></div>
      <Images featuredImage={props.frontmatter.featuredImage} />
      <figcaption>
        <h2>{props.frontmatter.title}</h2>
        <span>{props.frontmatter.category}</span>
      </figcaption>
    </Link>
  </figure>
)
const Featured = ({ list }) => {
  if (!list.length) {
    return <div>...loading</div>
  }

  return (
    <div id="featured">
      {list.map(({ node }, index) => {
        return (
          <FeaturedCard
            key={node.fields.slug}
            className={`featured-${index ? 'secondary' : 'main'}`}
            {...node}
          />
        )
      })}
    </div>
  )
}

export default Featured
