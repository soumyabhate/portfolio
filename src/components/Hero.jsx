import profile from '../data/profile.json'
export default function Hero(){
  return (
    <header className="container" style={{position:'relative', paddingTop:48, paddingBottom:24}}>
      <div className="petals">{Array.from({length:5}).map((_,i)=><span key={i} style={{left:`${i*18+5}%`, top:`${(i%3)*20+10}%`}}/>)}</div>
      <div className="card" style={{padding:'28px', position:'relative'}}>
        <h1 style={{margin:'0 0 6px', fontSize:42, color:'var(--ink-900)'}}>{profile.name}</h1>
        <p className="lead">{profile.tagline}</p>
        <div style={{marginTop:16}}>
          <a className="btn primary" href={profile.links.resume}>View Resume</a>
          <a className="btn" style={{marginLeft:8}} href="#projects">See Projects</a>
        </div>
        <div style={{marginTop:16}}>
          {profile.now.map((t,idx)=> <span key={idx} className="tag">{t}</span>)}
        </div>
      </div>
    </header>
  )
}
