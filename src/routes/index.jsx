import { createBrowserRouter } from 'react-router-dom' // Removido RouterProvider daqui

// Importando seus componentes
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Mentoria from '../pages/Mentoria'
import Doacao from '../pages/Doacao'
import Voluntariado from '../pages/Voluntariado'
import Eventos from '../pages/Eventos'
import EventosEP from '../pages/EventosEP'
import Usuario from '../pages/Usuario'

// ADICIONE O EXPORT AQUI
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'mentoria', element: <Mentoria /> },
      { path: 'doacao', element: <Doacao /> },
      { path: 'voluntariado', element: <Voluntariado /> },
      { path: 'eventos', element: <Eventos /> },
      { path: 'eventosep', element: <EventosEP /> },
      { path: 'usuario', element: <Usuario /> },
    ],
  },
])
