import data from '../data/projects.json'
export default function ProjectsGrid(){
  return (
    <div className="grid" style={{display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))'}}>
      {data.map((p,i)=>(
        <article key={i} className="card" style={{padding:16}}>
          <h3 style={{marginTop:0}}>{p.title}</h3>
          <p>{p.summary}</p>
          <div>{p.tags?.map((t,ix)=><span key={ix} className="tag">{t}</span>)}</div>
          <div style={{marginTop:12, display:'flex', gap:8}}>
            {p.links?.live && <a className="btn" href={p.links.live}>Live</a>}
            {p.links?.repo && <a className="btn" href={p.links.repo}>Code</a>}
          </div>
        </article>
      ))}
    </div>
  )
}
