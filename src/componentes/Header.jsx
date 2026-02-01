import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import perfil from '../assets/perfil.png'

const navLinks = [
  { to: '/doacao', label: 'Doação' },
  { to: '/voluntariado', label: 'Voluntariado' },
  { to: '/mentoria', label: 'Mentoria' },
  { to: '/eventosep', label: 'Eventos & Palestras' },
]

export default function Header() {
  const navTrackRef = useRef(null)
  const navGroupRef = useRef(null)

  useEffect(() => {
    const track = navTrackRef.current
    const group = navGroupRef.current

    if (!track || !group) return

    const updateDistance = () => {
      const gapValue = getComputedStyle(track).getPropertyValue('--nav-gap')
      const gap = Number.parseFloat(gapValue) || 0
      track.style.setProperty(
        '--marquee-distance',
        `${group.scrollWidth + gap}px`,
      )
    }

    updateDistance()

    let resizeObserver
    if (window.ResizeObserver) {
      resizeObserver = new ResizeObserver(updateDistance)
      resizeObserver.observe(group)
    }

    window.addEventListener('resize', updateDistance)

    return () => {
      window.removeEventListener('resize', updateDistance)
      if (resizeObserver) resizeObserver.disconnect()
    }
  }, [])

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="logo-wrap" to="/" aria-label="Connect Platform">
          <svg
            className="logo-icon"
            width="87"
            height="66"
            viewBox="0 0 87 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M53.1875 39.0749L50.2115 36.1096C39.1679 26.3402 31.9497 19.7539 31.9497 11.6755C31.9497 5.1024 37.0519 0 43.6252 0C47.2464 0 50.854 1.70175 53.1875 4.45989C55.521 1.70175 59.1286 0 62.7498 0C69.3229 0 74.4253 5.1024 74.4253 11.6755C74.4253 19.7537 67.2072 26.3402 56.1635 36.1096L53.1875 39.0749Z"
              fill="#FD7267"
            />
            <path
              d="M86.9999 38.5954C86.2113 39.4527 85.2724 40.1935 84.413 40.9737C83.3771 41.9156 82.3136 42.8264 81.2392 43.7229C79.2429 45.3898 77.2057 47.0054 75.2008 48.6617C74.8059 47.6566 73.9551 46.7978 73.0697 46.2103C71.7251 45.3172 70.1016 44.8585 68.4678 44.6202C69.4741 43.3116 71.1673 42.7705 72.6263 42.1247C74.3272 41.3732 75.686 40.1899 77.1423 39.0597C78.5773 37.9458 80.1362 36.9384 81.9952 36.803C83.7322 36.6767 85.8675 37.1758 86.9999 38.5954Z"
              fill="white"
            />
            <path
              d="M84.8404 35.0688C84.7034 35.4958 84.3925 35.8866 84.1383 36.2484C83.6503 36.1505 83.1545 36.0929 82.6664 36.0656C80.6126 35.9476 78.7767 36.9308 77.1765 38.1159C75.5712 39.3041 74.1362 40.6601 72.2903 41.4767C70.576 42.2341 68.7385 42.8685 67.6564 44.503C67.6529 44.5076 67.6503 44.5123 67.6478 44.517C67.1107 44.4612 66.5783 44.4253 66.0592 44.4018C65.8818 44.3939 65.7047 44.3878 65.5273 44.3834C66.7396 43.0651 68.2602 42.0821 69.7787 41.1394C71.4547 40.0972 73.0561 39.0193 74.5945 37.7813C76.1355 36.5407 77.711 35.2388 79.5882 34.5442C81.249 33.9303 83.4962 33.7278 84.8404 35.0688Z"
              fill="white"
            />
            <path
              d="M78.6988 34.1029C77.2605 34.7424 75.9686 35.7499 74.7584 36.7149C73.9568 37.3534 73.1687 38.007 72.3391 38.6098C71.4696 39.2426 70.546 39.8014 69.6315 40.3671C67.7992 41.4995 65.9357 42.681 64.5678 44.3746C63.2215 44.3843 61.8765 44.4745 60.5327 44.5748C61.7261 43.3804 63.1269 42.4128 64.4932 41.4245C66.0622 40.2911 67.4581 39.0235 68.8686 37.7034C70.2428 36.4186 71.7031 35.1763 73.4768 34.4882C75.0981 33.8593 76.981 33.7265 78.6988 34.1029Z"
              fill="white"
            />
            <path
              d="M56.1787 52.7324C56.0907 52.7192 56.0083 52.716 55.9641 52.6955C55.4839 52.6515 55.0015 52.6148 54.5193 52.5865L53.3129 52.5287C53.2939 52.5169 53.1388 52.5433 53.1232 52.5295C52.4714 52.5149 51.8187 52.5184 51.1679 52.5443L50.4776 52.5818C49.8762 52.6221 49.2756 52.6817 48.6789 52.766C45.9729 53.1491 43.4004 53.9769 40.9518 55.1835C40.5292 55.3924 40.157 54.7598 40.5817 54.5509C43.3041 53.2087 46.1808 52.3013 49.2041 51.9668C51.5078 51.7119 53.829 51.7595 56.1327 51.976C56.1757 51.9778 56.2186 51.9814 56.2628 51.9877C56.6027 52.021 56.9412 52.0574 57.2803 52.097C59.5419 52.3619 61.7832 52.7873 64.0528 52.988C66.3383 53.1907 68.7501 53.243 70.9476 52.4811C72.6591 51.888 75.1726 51.07 74.6188 48.88C74.0845 46.7623 71.7449 46.3221 69.8336 45.7803C67.2832 45.0579 64.612 45.0176 61.9804 45.0881C59.3667 45.1597 56.7468 44.6815 54.1324 44.6146C51.67 44.5514 49.1656 43.5791 47.0029 42.3314C46.9766 42.3215 46.949 42.3077 46.9225 42.2892C46.9107 42.2811 46.8988 42.2726 46.8868 42.2645C46.8832 42.2627 46.8795 42.2609 46.8769 42.2582C46.8675 42.2538 46.8613 42.2471 46.853 42.2416C43.2916 39.7877 39.4515 36.6086 34.9247 36.4673C32.5403 36.3931 30.2366 37.0385 27.9211 37.5105C26.7853 37.7424 25.6119 37.9763 24.4495 38C23.2936 38.0237 22.1385 38.0045 20.9826 37.9982C18.2873 37.9826 15.6116 38.1275 13.0685 39.1065C10.643 40.0406 8.32186 41.2507 6.19325 42.7449C4.05999 44.2427 2.24028 46.0468 0.361185 47.839C0.241195 47.9535 0.121003 48.068 0 48.1819L9.85091 62.8969C10.4377 62.4678 11.0482 62.0727 11.6862 61.7235C13.9936 60.4612 16.4805 59.8718 19.1098 59.9093C21.7783 59.9468 24.4542 60.4225 27.0494 61.0147C29.9526 61.6783 32.821 62.4787 35.6996 63.2376C38.5623 63.9912 41.4447 64.72 44.3652 65.2113C47.1933 65.686 50.2183 65.9667 53.0454 65.3303C53.073 65.324 53.0997 65.3212 53.1263 65.3204C55.8066 63.7161 58.0323 61.5089 60.2381 59.3215C61.3381 58.2306 62.4372 57.1359 63.6006 56.113C64.4953 55.3266 65.421 54.5022 66.4433 53.8615C63.6233 53.8571 60.7762 53.2859 57.983 52.9183L56.1787 52.7324Z"
              fill="white"
            />
            <path
              d="M60.7393 43.1176C60.7599 43.1168 60.7806 43.1162 60.8013 43.1156V43.0625C60.7808 43.0811 60.7595 43.099 60.7393 43.1176Z"
              fill="black"
            />
          </svg>
        </Link>

        <nav className="nav-links" aria-label="Navegação principal">
          <div className="nav-links__track" ref={navTrackRef}>
            <div className="nav-links__group" ref={navGroupRef}>
              {navLinks.map((link) => (
                <Link key={link.to} className="nav-link" to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div
              className="nav-links__group nav-links__group--dup"
              aria-hidden="true"
            >
              {navLinks.map((link) => (
                <Link
                  key={`dup-${link.to}`}
                  className="nav-link nav-link--dup"
                  to={link.to}
                  tabIndex={-1}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="profile-wrap">
          <Link
            className="profile-link"
            to="/usuario"
            aria-label="Perfil do usuário"
          >
            <img className="profile-photo" alt="Foto de perfil" src={perfil} />
          </Link>
          <div className="profile-menu" role="menu" aria-label="Menu do perfil">
            <div className="profile-menu__header">
              <span className="profile-menu__name">Vinicius Bispo</span>
            </div>
            <ul className="profile-menu__list">
              <li className="profile-menu__item">
                <Link to="/voluntariado">Voluntariados</Link>
              </li>
              <li className="profile-menu__item">
                <Link to="/usuario">Configurações de conta</Link>
              </li>
              <li className="profile-menu__item">
                <button type="button">Sair</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
