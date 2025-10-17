import profile from '../data/profile.json'
export default function Contact(){
  return (
    <div className="card" style={{padding:16}}>
      <p>Want to collaborate? Reach me at <a href={`mailto:${profile.email}`}>{profile.email}</a> or find me on <a href={profile.links.linkedin}>LinkedIn</a>.</p>
    </div>
  )
}
