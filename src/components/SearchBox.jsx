import { navigate } from 'gatsby'
import React from 'react'
import { IoIosSearch } from 'react-icons/io'

const SearchBox = () => {
  const onSearch = (event) => {
    event.preventDefault()

    const value = event.target.query.value.toLowerCase()

    navigate(`/?s=${value}`)
  }

  return (
    <div id="search-box">
      <form onSubmit={onSearch}>
        <input type="text" id="query" aria-label="Search" />
      </form>
      <IoIosSearch />
    </div>
  )
}

export default SearchBox
