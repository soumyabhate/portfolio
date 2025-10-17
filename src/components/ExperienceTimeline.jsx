import exp from '../data/experience.json'
export default function ExperienceTimeline(){
  return (
    <div style={{display:'grid', gap:16}}>
      {exp.map((e,i)=>(
        <article key={i} className="card" style={{padding:16}}>
          <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:8}}>
            <h3 style={{margin:'4px 0'}}>{e.role} — {e.org}</h3>
            <span className="tag">{e.period}</span>
          </div>
          <ul style={{marginTop:8}}>
            {e.bullets.map((b,ix)=><li key={ix}>{b}</li>)}
          </ul>
          <div>{e.stack?.map((s,ix)=><span key={ix} className="tag">{s}</span>)}</div>
        </article>
      ))}
    </div>
  )
}
