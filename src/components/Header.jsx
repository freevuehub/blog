import { Link, useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import Menu from './Menu'
import SearchBox from './SearchBox'

const Header = ({ siteTitle, menuOpen, setMenuOpen }) => {
  const data = useStaticQuery(graphql`
    {
      allTopicsJson {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `)
  const onLogoClick = () => {
    if (menuOpen) {
      setMenuOpen(false)
    }
  }
  const onMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header id="header">
      <div className="container">
        <button id="site-logo-wrapper" onClick={onLogoClick}>
          <Link
            to="/"
            id="site-logo"
            style={{ textDecoration: 'none' }}
          >
            {siteTitle}
          </Link>
        </button>

        <nav id="nav">
          <Menu list={data.allTopicsJson.edges} />
          <SearchBox />
          <button className="menu-button" onClick={onMenuClick}>
            {menuOpen ? <MdClose /> : <FiMenu />}
          </button>
        </nav>
      </div>
      {menuOpen && (
        <div id="menu">
          <Menu list={data.allTopicsJson.edges} />
        </div>
      )}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
