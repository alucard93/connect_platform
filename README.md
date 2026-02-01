# Connect Platform 🤝

Plataforma de conexão social que conecta pessoas a oportunidades de voluntariado, doações, mentorias e eventos em suas comunidades.

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?logo=vite)
![SCSS](https://img.shields.io/badge/SCSS-1.88.0-CC6699?logo=sass)

## 🌐 Demo

**Acesse:** [https://connect-platform-kappa.vercel.app](https://connect-platform-kappa.vercel.app)

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação](#-instalação)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Componentes](#-componentes)
- [Páginas](#-páginas)
- [Estilos](#-estilos)
- [Deploy](#-deploy)

---

## 📖 Sobre o Projeto

O Connect Platform é uma aplicação web responsiva desenvolvida em React que facilita a conexão entre pessoas que desejam contribuir com a comunidade através de:

- **Doações** - Campanhas para arrecadação de alimentos, materiais escolares e equipamentos
- **Voluntariado** - Oportunidades para participar de ações sociais
- **Mentoria** - Programas de orientação profissional e pessoal
- **Eventos & Palestras** - Workshops e palestras educacionais

---

## ✨ Funcionalidades

- ✅ Navegação responsiva com slider infinito no mobile
- ✅ Cards informativos com imagens e descrições
- ✅ Sistema de toast para feedback de ações
- ✅ Página de perfil de usuário
- ✅ Menu dropdown de perfil
- ✅ Layout adaptativo para todos os dispositivos
- ✅ Animações suaves e transições

---

## 🛠 Tecnologias

| Tecnologia       | Versão | Descrição                                |
| ---------------- | ------ | ---------------------------------------- |
| React            | 19.1.0 | Biblioteca para construção de interfaces |
| React Router DOM | 7.6.0  | Roteamento de páginas SPA                |
| Vite             | 7.3.1  | Build tool e dev server                  |
| SCSS/Sass        | 1.88.0 | Pré-processador CSS                      |
| ESLint           | 9.25.0 | Linter para JavaScript                   |

---

## 📁 Estrutura do Projeto

```
connect_platform/
├── public/                  # Arquivos estáticos
├── src/
│   ├── assets/              # Imagens e recursos
│   │   ├── hero.png
│   │   ├── logo.svg
│   │   └── perfil.png
│   ├── componentes/         # Componentes reutilizáveis
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── PageSection.jsx
│   │   └── Toast.jsx
│   ├── layouts/             # Layouts de página
│   │   └── MainLayout.jsx
│   ├── pages/               # Páginas da aplicação
│   │   ├── Doacao.jsx
│   │   ├── Eventos.jsx
│   │   ├── Home.jsx
│   │   ├── Mentoria.jsx
│   │   ├── Usuario.jsx
│   │   └── Voluntariado.jsx
│   ├── routes/              # Configuração de rotas
│   │   └── index.jsx
│   ├── styles/              # Estilos SCSS
│   │   ├── base/
│   │   │   └── _base.scss
│   │   ├── components/
│   │   │   ├── _footer.scss
│   │   │   ├── _header.scss
│   │   │   └── _toast.scss
│   │   ├── pages/
│   │   │   ├── _doacao.scss
│   │   │   ├── _home.scss
│   │   │   ├── _page.scss
│   │   │   └── _usuario.scss
│   │   ├── _mixins.scss
│   │   ├── _variables.scss
│   │   └── main.scss
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

---

## 🚀 Instalação

### Pré-requisitos

- Node.js 20.19+ ou 22.12+
- npm ou yarn

### Passos

1. **Clone o repositório**

```bash
git clone https://github.com/alucard93/connect_platform.git
cd connect_platform
```

2. **Instale as dependências**

```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

4. **Acesse no navegador**

```
http://localhost:5173
```

---

## 📜 Scripts Disponíveis

| Script  | Comando           | Descrição                          |
| ------- | ----------------- | ---------------------------------- |
| dev     | `npm run dev`     | Inicia servidor de desenvolvimento |
| build   | `npm run build`   | Gera build de produção             |
| preview | `npm run preview` | Visualiza build de produção        |
| lint    | `npm run lint`    | Executa verificação de código      |

---

## 🧩 Componentes

### Header

Cabeçalho fixo com logo, navegação e menu de perfil.

- Slider infinito de navegação em telas < 760px
- Dropdown de perfil com opções de conta

### Footer

Rodapé simples com copyright.

### Card

Componente de card reutilizável para listagens.

- Props: `image`, `title`, `description`, `activity`, `impact`, `buttonText`, `onButtonClick`
- Suporta diferentes tipos de conteúdo (doação, evento, etc.)

### PageSection

Wrapper para páginas de listagem com título e grid de cards.

- Props: `title`, `children`

### Toast

Notificação de feedback para ações do usuário.

- Props: `message`, `isVisible`, `onClose`
- Auto-dismiss após 3 segundos
- Animação de entrada e barra de progresso

### Button

Botão reutilizável com variantes de estilo.

- Props: `children`, `variant`, `onClick`

---

## 📄 Páginas

| Rota            | Componente   | Descrição                                   |
| --------------- | ------------ | ------------------------------------------- |
| `/`             | Home         | Página inicial com hero, estatísticas e CTA |
| `/doacao`       | Doacao       | Campanhas de doação disponíveis             |
| `/voluntariado` | Voluntariado | Oportunidades de voluntariado               |
| `/mentoria`     | Mentoria     | Programas de mentoria                       |
| `/eventosep`    | Eventos      | Eventos e palestras                         |
| `/usuario`      | Usuario      | Perfil do usuário                           |

---

## 🎨 Estilos

### Arquitetura SCSS

O projeto utiliza arquitetura modular com:

- **Variables** (`_variables.scss`) - Cores, fontes e espaçamentos
- **Mixins** (`_mixins.scss`) - Funções reutilizáveis (container, flex-center, respond-md)
- **Base** (`_base.scss`) - Reset e estilos globais
- **Components** - Estilos de componentes isolados
- **Pages** - Estilos específicos de páginas

### Cores Principais

| Variável           | Cor          | Uso                            |
| ------------------ | ------------ | ------------------------------ |
| `$color-primary`   | `#1f5c93`    | Cor principal (header, botões) |
| `$color-secondary` | `#fd7267`    | Cor de destaque (CTAs)         |
| `#075985`          | Azul escuro  | Títulos de seção               |
| `#1e3a8a`          | Azul marinho | Títulos de cards               |
| `#22c55e`          | Verde        | Status ativo, sucesso          |

### Breakpoints

| Breakpoint | Uso                    |
| ---------- | ---------------------- |
| 1440px     | Max-width containers   |
| 1280px     | Desktop grande         |
| 1024px     | Tablet/Desktop pequeno |
| 768px      | Tablet portrait        |
| 760px      | Mobile slider ativado  |
| 480px      | Mobile pequeno         |
| 420px      | Mobile extra pequeno   |

---

## 🌐 Deploy

### Vercel (Recomendado)

1. **Instale Vercel CLI**

```bash
npm install -g vercel
```

2. **Faça deploy**

```bash
vercel
```

3. **Para atualizações via GitHub**

```bash
git add .
git commit -m "sua mensagem"
git push
```

O Vercel faz deploy automático a cada push.

### Configuração vercel.json

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

---

## 👥 Contribuição

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona NovaFeature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT.

---

## 📞 Contato

**Vai na Web & Empower** - Projeto destinado exclusivamente a fins educativos.

---

Feito com ❤️ para conectar pessoas e transformar comunidades.
