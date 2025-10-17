import './Navbar.css'

export default function Navbar({ active }){
  const links = [
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <nav className="nav">
      <div className="nav__inner">
        <a className="brand" href="#">SB</a>
        <div className="nav__links">
          {links.map(l => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav__link ${active === l.id ? 'active' : ''}`}
            >
              {l.label}
            </a>
          ))}
          <a href="SoumyaBhateResume.pdf" className="btn">Resume</a>
        </div>
      </div>
    </nav>
  )
}
