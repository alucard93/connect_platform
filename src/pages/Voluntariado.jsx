import { useState } from 'react'
import Card from '../componentes/Card'
import PageSection from '../componentes/PageSection'
import Toast from '../componentes/Toast'

export default function Voluntariado() {
  const [showToast, setShowToast] = useState(false)

  const cards = [
    {
      id: 1,
      image: 'https://placehold.co/357x164',
      title: 'Mutirão de reciclagem',
      description:
        'Coletar materiais recicláveis e orientar sobre descarte consciente.',
    },
    {
      id: 2,
      image: 'https://placehold.co/357x164',
      title: 'Aulas de Tecnologia',
      description:
        'Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.',
    },
    {
      id: 3,
      image: 'https://placehold.co/357x164',
      title: 'Esporte e Inclusão',
      description:
        'Organizar treinos e jogos que incentivam a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens.',
    },
  ]

  const handleParticipate = () => {
    setShowToast(true)
  }

  return (
    <PageSection title="Voluntariado">
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          title={card.title}
          description={card.description}
          buttonText="Quero participar"
          onButtonClick={handleParticipate}
        />
      ))}
      <Toast
        message="Inscrito com sucesso!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </PageSection>
  )
}
