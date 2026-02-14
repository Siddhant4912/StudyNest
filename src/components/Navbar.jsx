import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo/Logo-Small-Dark.png"

const Navbar = () => {
  return (
    <div>
        <Link to={"/"}>
            <img src={logo} alt="" />
        </Link>

        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/"></Link>
                </li>
            </ul>
        </nav>
    </div>


  )
}

export default Navbar