export default function Card({
  image,
  title,
  description,
  activity,
  impact,
  buttonText = 'Quero Doar',
}) {
  return (
    <article className="card">
      <img className="card__image" src={image} alt={title} />
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        {description && <p className="card__description">{description}</p>}
        {activity && (
          <p className="card__description">
            <strong>Atividade:</strong> {activity}
          </p>
        )}
        {impact && (
          <p className="card__description">
            <strong>Impacto:</strong> {impact}
          </p>
        )}
      </div>
      <button className="card__button">{buttonText}</button>
    </article>
  )
}
