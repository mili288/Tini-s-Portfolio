import React from 'react'
import '../styles/Header.css';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <ul className="menu cf">
<li><a href="/">Home</a></li>
<li>
        <a href="">Services</a>
        <ul class="submenu">
<li><a href="/services">Custom Drawing</a></li>
</ul>
</li>
<li><a href="/work">Work</a></li>
<li><a href="/manga">Manga</a></li>
<li><a href="/about">About me</a></li>
<li><a href="/contact">Contact Me</a></li>
</ul>
    </div>
  )
}

export default Header