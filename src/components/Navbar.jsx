
import { useState } from 'react'

const links = [
  { name: 'Inicio', href: '/#inicio' },
  { name: 'Sobre mí', href: '/#sobre-mi' },
  { name: 'Proyectos', href: '/#proyectos' },
  { name: 'Tecnologías', href: '/#tecnologias' },
  { name: 'Contacto', href: '/#contacto' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <a
        href="/#inicio"
        className="logo"
        onClick={closeMenu}
      >
        LM<span>.</span>
      </a>

      <button
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        type="button"
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        id="main-navigation"
        className={`nav-links ${menuOpen ? 'nav-open' : ''}`}
        aria-label="Navegación principal"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
