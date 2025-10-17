import groups from '../data/skills.json'
export default function SkillsCloud(){
  return (
    <div className="grid" style={{display:'grid', gap:16}}>
      {Object.entries(groups).map(([cat, items])=>(
        <div key={cat} className="card" style={{padding:16}}>
          <h3 style={{marginTop:0}}>{cat}</h3>
          <div>{items.map((s,i)=><span key={i} className="tag">{s}</span>)}</div>
        </div>
      ))}
    </div>
  )
}
