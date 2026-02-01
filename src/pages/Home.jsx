import heroImage from '../assets/hero.png'

export default function Home() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__title" role="heading" aria-level={1}>
            <p>Projetos Sociais</p>
            <p>que transformam</p>
          </div>
          <p className="hero__subtitle">
            Conectamos sua empresa com projetos sociais impactantes. Juntos,
            criamos mudanças reais na comunidade.
          </p>
          <a className="hero__cta" href="#">
            Cadastrar Empresa <span aria-hidden="true">→</span>
          </a>

          <div className="hero__stats">
            <div className="hero__stat">
              <strong>500+</strong>
              <span>Empresas Voluntárias</span>
            </div>
            <div className="hero__stat">
              <strong>1.2K+</strong>
              <span>Projetos Realizados</span>
            </div>
            <div className="hero__stat">
              <strong>50K+</strong>
              <span>Vidas Impactadas</span>
            </div>
          </div>
        </div>

        <div className="hero__media">
          <img
            className="hero__image"
            src={heroImage}
            alt="Projeto social com pessoas ao redor de um globo"
          />
        </div>
      </div>
    </section>
  )
}
