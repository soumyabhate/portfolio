import './Navbar.css'
export default function Navbar(){
  return (
    <nav className="nav">
      <div className="nav__inner">
        <a className="brand" href="#">SB</a>
        <div className="nav__links">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="btn">Contact</a>
        </div>
      </div>
    </nav>
  )
}
