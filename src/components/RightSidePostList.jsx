import React from 'react'
import CardSmall from './cardSmall'

const RightSidePostList = (props) => {
  return (
    <>
      <h2 className="sidebar-header">{props.title}</h2>
      <div>
        {
          props.list.map(({ node }) => (
            <CardSmall
              key={node.id}
              slug={node.fields.slug}
              frontmatter={node.frontmatter}
            />
          ))
        }
      </div>
    </>
  )
}

export default RightSidePostList
