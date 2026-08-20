export const profile = {
  name: 'Tainá Ribeiro',
  role: 'Desenvolvedora',
  tagline: 'Front-end com React + Automação com Python. Transformando ideias em código.',
  location: 'Baseado em — São Paulo',
  email: 'tainaribeir1930@gmail.com',
  socials: [
    { label: 'GH', value: '/Naita1', href: 'https://github.com/Naita1' },
    { label: 'LI', value: '/taina-cl-ribeiro', href: 'https://www.linkedin.com/in/taina-cl-ribeiro/' },
  ],
}

export const about = {
  eyebrow: 'sobre',
  heading: ['Criatividade', 'em código.'],
  paragraphs: [
  'Sou estudante de Análise e Desenvolvimento de Sistemas no IFSP e atuo como estagiária em Desenvolvimento de Software, com foco principal em automação de processos e otimização de fluxos corporativos.',
  'Na área de automação, trabalho com RPA utilizando Python e integração de sistemas, contribuindo para a eficiência e escalabilidade de processos empresariais. Paralelamente, desenvolvo projetos pessoais em Front-end com React.js, com interesse em UI/UX, Arquitetura de Software, APIs e Banco de Dados Oracle, além de estudos em PL/SQL avançado.'
  ],
  facts: [
    { label: 'Foco', value: 'Front-end & Automação' },
    { label: 'Disponibilidade', value: 'Tempo integral (estágio)' },
    { label: 'Fuso', value: 'GMT-3' },
  ],
}

export const timeline = [
  {
    year: '2024',
    kind: 'work',
    title: 'Estagiária de Desenvolvimento de Software',
    place: 'Super Mercados Pague Menos',
    description:
      'Automação com RPA em Python e integração de APIs.',
  }
]

export const skills = {
  eyebrow: 'skills',
  heading: ['Ferramentas', 'de trabalho.'],
  categories: [
    {
      title: 'Linguagens',
      chipStyle: 'chip',
      items: ['Python', 'JavaScript', 'Java', 'SQL'],
    },
    {
      title: 'Front-end',
      chipStyle: 'chip chip--cyan',
      items: ['React.js', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
      title: 'Back-end & Dados',
      chipStyle: 'chip chip--cyan',
      items: ['Node.js', 'Flask', 'APIs RESTful', 'PostgreSQL', 'Firebase/Firestore', 'Oracle DB'],
    },
    {
      title: 'Automação & DevOps',
      chipStyle: 'chip',
      items: ['Selenium', 'Pandas', 'Docker', 'Git', 'CI/CD'],
    },
    {
      title: 'Ferramentas & Metodologias',
      isWide: true,
      chipStyle: 'chip chip--ghost',
      items: [
        'VS Code',
        'IntelliJ IDEA',
        'Figma',
        'Vercel',
        'Netlify',
        'Jest',
        'Pytest',
        'Scrum',
        'Kanban',
      ],
    },
  ],
  languages: [
    { label: 'Português', level: 'Nativo' },
    { label: 'Inglês', level: 'Intermediário' },
  ],
}

export const projects = [
  {
    title: 'Manto Store',
    description:
      'Plataforma de e-commerce premium para camisas de futebol com tema escuro, personalização em tempo real, cálculo dinâmico de frete e autenticação segura integrada com Firebase.',
    tags: ['React', 'Firebase', 'Vite', 'UI/UX'],
    link: 'https://manto-store-eight.vercel.app/',
    github: 'https://github.com/Naita1/Manto-Store',
  },
  {
    title: 'Cyberpunk Mech',
    description:
      'Aplicação Full-stack com interface futurista cyberpunk e gerenciamento de garagens de robôs. Conta com backend robusto com arquitetura polimórfica, testes unitários e banco de dados Firestore.',
    tags: ['React', 'Spring Boot', 'Tailwind CSS', 'Firebase', 'Java'],
    link: 'https://cyber-punk-mech-ui.vercel.app/',
    githubFront: 'https://github.com/Naita1/CyberPunkMech-UI',
    githubBack: 'https://github.com/Naita1/CyberPunkMech-API',
  },
]

export const contact = {
  eyebrow: 'contato',
  heading: ['Vamos trabalhar', 'juntas?'],
  cta: 'Enviar e-mail',
}
