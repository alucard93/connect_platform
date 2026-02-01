export default function Usuario() {
  const user = {
    name: 'Vinicius Bispo',
    status: 'Voluntário Ativo',
    bio: 'Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.',
    location: 'Salvador, BA',
    email: 'vini.bispo@gmail.com',
    memberSince: 'Janeiro 2022',
    photo: 'https://placehold.co/291x297',
    tags: ['Educação', 'Meio Ambiente', 'Assistência Social', 'Design'],
  }

  return (
    <section className="user-profile">
      <div className="user-profile__card">
        <div className="user-profile__photo-wrapper">
          <img
            src={user.photo}
            alt={user.name}
            className="user-profile__photo"
          />
        </div>

        <div className="user-profile__info">
          <h1 className="user-profile__name">{user.name}</h1>
          <span className="user-profile__status">{user.status}</span>
          <p className="user-profile__bio">{user.bio}</p>

          <div className="user-profile__details">
            <div className="user-profile__detail">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{user.location}</span>
            </div>

            <div className="user-profile__detail">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>{user.email}</span>
            </div>

            <div className="user-profile__detail">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
              </svg>
              <span>Membro desde {user.memberSince}</span>
            </div>
          </div>

          <div className="user-profile__tags">
            {user.tags.map((tag, index) => (
              <span key={index} className="user-profile__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
