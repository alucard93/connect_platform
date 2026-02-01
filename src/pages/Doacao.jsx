import { useState } from 'react'
import Card from '../componentes/Card'
import PageSection from '../componentes/PageSection'
import Toast from '../componentes/Toast'

export default function Doacao() {
  const [showToast, setShowToast] = useState(false)

  const cards = [
    {
      id: 1,
      image: 'https://placehold.co/357x164',
      title: 'Instituto grande familia',
      description:
        'Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.',
    },
    {
      id: 2,
      image: 'https://placehold.co/357x164',
      title: 'Projeto Futuro na Escola',
      description:
        'Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.',
    },
    {
      id: 3,
      image: 'https://placehold.co/357x164',
      title: 'Instituto Conecta Jovem',
      description:
        'Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades.',
    },
  ]

  const handleDonate = () => {
    setShowToast(true)
  }

  return (
    <PageSection title="Doação">
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          title={card.title}
          description={card.description}
          buttonText="Quero Doar"
          onButtonClick={handleDonate}
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
