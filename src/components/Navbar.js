import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {

  const [selectedItem, setSelectedItem] = useState('about')

  useEffect(() => {

    const handleScroll = () => {
      const sectionIds = ['about', 'experience', 'education', 'projects']
      // Check which section is currently in the viewport
      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 0) {
            setSelectedItem(sectionId)
          }
        }
      }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav>
      <ul>
        <li className={selectedItem === 'about' ? 'nav-selected' : ''}>
          <a href="#about">About</a>
        </li>
        <li className={selectedItem === 'experience' ? 'nav-selected' : ''}>
          <a href="#experience">Experience</a>
        </li>
        <li className={selectedItem === 'education' ? 'nav-selected' : ''}>
          <a href="#education">Education</a>
        </li>
        <li className={selectedItem === 'projects' ? 'nav-selected' : ''}>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;