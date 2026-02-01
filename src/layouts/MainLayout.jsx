import { Outlet, Link } from 'react-router'

export default function MainLayout() {
  return (
    <div className="app-container">
      <header>
        {/* Sua Navbar azul conforme a imagem */}
        <nav>
          <Link to="/">Início</Link>
          <Link to="/doacao">Doação</Link>
          <Link to="/voluntariado">Voluntariado</Link>
          <Link to="/mentoria">Mentoria</Link>
          <Link to="/eventos">Eventos</Link>
        </nav>
      </header>

      <main>
        {/* Aqui é onde as páginas (Home, Mentoria, etc.) serão renderizadas */}
        <Outlet />
      </main>

      <footer>
        <p>© 2026 Projetos Sociais</p>
      </footer>
    </div>
  )
}
