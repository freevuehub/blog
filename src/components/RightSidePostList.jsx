import React from 'react'
import CardSmall from './cardSmall'

const RightSidePostList = (props) => {
  return (
    <>
      <h2 className="sidebar-header">{props.title}</h2>
      <div>
        {props.list.map(({ node }, index) => {
          if (2 < index && index < 5) {
            return (
              <CardSmall
                key={node.id}
                slug={node.fields.slug}
                frontmatter={node.frontmatter}
              />
            )
          } else return null
        })}
      </div>
    </>
  )
}

export default RightSidePostList
