import React from 'react'
import SearchBar from '../content/SearchBar'

const Layout = ({ children }) => {
  return (
    <div className="content-base">
      <SearchBar />
      <div className="bg-darkbluepurple">{children}</div>
    </div>
  )
}

export default Layout
