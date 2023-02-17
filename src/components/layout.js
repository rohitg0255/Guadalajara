import React from 'react'

import Header from './shared/header'
import Footer from './shared/footer'

const Layout= ({children}) => {
  return (
    <div>
        <Header></Header>
        {children}
        <Footer></Footer>
    </div>
  )
}

export default Layout