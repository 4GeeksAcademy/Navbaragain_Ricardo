import React from "react"
export default function Navbar() {
    return (
    <nav className="nav">
   <a href="/" className="site-title"> Site Name </a>
    <ul>
        <li className="active">
         <a href="/Home"> Home</a> </li>
         <li>
         <a href="/About"> About</a> 
         </li>
         <li>
            <a href="/Services"> Services</a> </li>
            <li>
         <a href="/Contact"> Contact</a>
        </li>
    </ul>
   </nav>
    )

}