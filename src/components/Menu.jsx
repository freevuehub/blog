import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const topicMap = ({ node }) => (
  <li key={node.slug}>
    <Link to={`/${node.slug}`}>{node.name}</Link>
  </li>
)
const Menu = (props) => (
  <ul>
    {props.list.map(topicMap)}
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>
)

Menu.propTypes = {
  list: PropTypes.array,
}

Menu.defaultProps = {
  list: [],
}

export default Menu
