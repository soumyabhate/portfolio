import { useEffect, useState } from 'react'
import profile from '../data/profile.json'

export default function Hero(){
  const [y, setY] = useState(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const onScroll = () => setY(window.scrollY || 0)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const layer = (factor) => ({
    transform: `translateY(${(y * factor).toFixed(2)}px)`
  })

  return (
    <header className="container" style={{position:'relative', paddingTop:48, paddingBottom:24}}>
      {/* Parallax cloud layers */}
      <div className="clouds">
        <span className="cloud c1" style={layer(0.05)}/>
        <span className="cloud c2" style={layer(0.08)}/>
        <span className="cloud c3" style={layer(0.03)}/>
      </div>

      {/* Sakura petals (subtle) */}
      <div className="petals">{Array.from({length:5}).map((_,i)=>
        <span key={i} style={{left:`${i*18+5}%`, top:`${(i%3)*20+10}%`}}/>
      )}</div>

      <div className="card" style={{padding:'28px', position:'relative'}}>
        <h1 style={{margin:'0 0 6px', fontSize:42, color:'var(--ink-900)'}}>{profile.name}</h1>
        <p className="lead">{profile.tagline}</p>
        <div style={{marginTop:16}}>
          <a className="btn primary" href={profile.links.resume}>View Resume</a>
          <a className="btn" style={{marginLeft:8}} href="#projects">See Projects</a>
        </div>
        {profile.highlights?.length ? (
          <div style={{marginTop:16}}>
            {profile.highlights.map((t,idx)=> <span key={idx} className="tag">{t}</span>)}
          </div>
        ): null}
      </div>
    </header>
  )
}
