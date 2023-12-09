import React from 'react'
import { Link} from "react-router-dom";
export const Navbar = () => {
  return (
    <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">My account</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/" target='_blank'>buy me coffie</Link></li>
        </ul>
    </nav>
  )
}
