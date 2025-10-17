export default function Footer(){
  const y = new Date().getFullYear()
  return (
    <footer className="container" style={{paddingBottom:32, opacity:.8}}>
      <hr style={{borderColor:'var(--line)', borderWidth:0, height:1, background:'var(--line)'}}/>
      <p style={{marginTop:16}}>© {y} Soumya Bhate • Built with React & Vite</p>
    </footer>
  )
}
