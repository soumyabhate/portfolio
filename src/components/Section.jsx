export default function Section({id, title, subtitle, children}){
  return (
    <section id={id} className="section">
      <div className="container">
        <h2>{title}</h2>
        {subtitle && <p className="lead">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
