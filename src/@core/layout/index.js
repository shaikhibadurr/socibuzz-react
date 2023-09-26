import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

const Layout = (props) => {
  return (
    <>
      <Header />
      <h2>Default Layout</h2>
      <Outlet />
    </>
  )
}

export default Layout
