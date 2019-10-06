import React from "react"

import Header from "../Header/header.component"
import Footer from "../Footer/footer.component"

import LayoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={LayoutStyles.container}>
      <div className={LayoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
