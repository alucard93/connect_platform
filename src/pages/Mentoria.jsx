import Card from '../componentes/Card'

export default function Mentoria() {
  const cards = [
    {
      id: 1,
      image: 'https://placehold.co/357x164',
      title: 'Mentoria de Carreira e Emprego',
      description:
        'Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho.',
    },
    {
      id: 2,
      image: 'https://placehold.co/357x164',
      title: 'Compartilhe Experiência',
      description: 'Oriente jovens e profissionais iniciantes em sua área.',
    },
    {
      id: 3,
      image: 'https://placehold.co/357x164',
      title: 'Acompanhamento',
      description:
        'Participe como guia em jornadas de aprendizado e desenvolvimento.',
    },
  ]

  return (
    <section className="page-section">
      <h1 className="page-section__title">Mentoria</h1>

      <div className="page-section__cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
            buttonText="Quero participar"
          />
        ))}
      </div>
    </section>
  )
}
