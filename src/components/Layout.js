import React from "react"
import Navbar from "./Navbar"
import "../styles/footer.css"
import "../styles/nav.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright 2021 SummerSquads Red Team</p>
      </footer>
    </div>
  )
}
