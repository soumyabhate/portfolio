import groups from '../data/skills.json'

const flatten = (obj) => Object.values(obj).flat()
const looped = (arr) => [...arr, ...arr] // duplicate for seamless loop

export default function SkillsMarquee(){
  const items = looped(flatten(groups))
  return (
    <div className="marquee card" style={{padding:'12px'}}>
      <div className="track">
        {items.map((s,i)=> <span key={i} className="tag skill">{s}</span>)}
      </div>
    </div>
  )
}
