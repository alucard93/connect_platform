export default function PageSection({ title, children }) {
  return (
    <section className="page-section">
      <h1 className="page-section__title">{title}</h1>
      <div className="page-section__cards">{children}</div>
    </section>
  )
}
