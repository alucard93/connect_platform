import Card from '../componentes/Card'

export default function Eventos() {
  const cards = [
    {
      id: 1,
      image: 'https://placehold.co/357x164',
      title: 'Empoderando Jovens para o Futuro',
      activity:
        'Palestra motivacional sobre liderança jovem e transformação social.',
      impact:
        'Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades.',
    },
    {
      id: 2,
      image: 'https://placehold.co/357x164',
      title: 'Tecnologia que Transforma',
      activity: 'Workshop de introdução à programação e inovação digital.',
      impact:
        'Preparar jovens para o mercado de trabalho através da tecnologia.',
    },
    {
      id: 3,
      image: 'https://placehold.co/357x164',
      title: 'Carreira e Primeiro Emprego',
      activity:
        'Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado.',
      impact: 'Ajudar jovens a conquistar oportunidades de trabalho.',
    },
  ]

  return (
    <section className="page-section">
      <h1 className="page-section__title">Eventos & Palestras</h1>

      <div className="page-section__cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            activity={card.activity}
            impact={card.impact}
            buttonText="Quero Participar"
          />
        ))}
      </div>
    </section>
  )
}
