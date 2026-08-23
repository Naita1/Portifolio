# Portfolio — Tainá Ribeiro

Meu portfólio em React (Vite) com hero de parallax em 5 camadas. Construí a partir de imagens de nuvens com identidade visual "cyberpunk ao entardecer".

🌐 **[Acesse o portfólio](https://portifolio-eight-blond.vercel.app/)**

## Como rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

Build de produção:

```bash
npm run build
npm run preview
```

## Decisões de Design

**Paleta** — Criei um sistema híbrido: fundo em gradiente índigo profundo (extraído do céu das nuvens) + dois acentos neon, magenta e ciano (o toque cyberpunk), com âmbar quente como terceiro acento. Mantém a atmosfera sem ser óbvio.

**Tipografia** — Syne (display, geométrica) para títulos, Inter para corpo, Space Mono para dados — reforça a sensação de painel/HUD.

**As 5 camadas de nuvem** (`src/assets/clouds`), da mais distante pra mais próxima:

| arquivo | papel | velocidade de parallax |
|---|---|---|
| `01-sky.png` | céu/gradiente de fundo | 0.04 (quase parada) |
| `02-cloud-far.png` | nuvem mais distante | 0.10 |
| `03-cloud-mid.png` | nuvem intermediária | 0.20 |
| `04-cloud-near.png` | nuvem mais próxima | 0.34 |
| `05-cloud-front.png` | nuvem de primeiro plano | 0.52 (mais rápida) |

Camadas mais próximas se movem mais rápido — cria ilusão de profundidade. A camada de céu recebe leve zoom para reforçar a distância.

`05-cloud-front.png` reaparece como horizonte decorativo no fim da seção de Contato — fecha visualmente a página.

**Assinatura visual** — Usei aberração cromática no nome do Hero: duas cópias do texto, contornadas em magenta e ciano, deslocadas atrás. Reinterpretação cyberpunk com um toque pessoal.

**Performance** — Construí hooks próprios (`useScrollY`, `useReveal`) sem libs pesadas de parallax. Uso `requestAnimationFrame` para throttle e apenas `transform`/`opacity` no Hero. Animações de entrada usam `IntersectionObserver` e respeitam `prefers-reduced-motion`.

## Estrutura do Projeto

```
src/
├── assets/clouds/        # 5 camadas de nuvem
├── components/           # Nav, Hero, About, Resume, Skills, Projects, Contact, Footer
├── data/content.js       # conteúdo centralizado (editável)
├── hooks/
│   ├── useScrollY.js     # scroll throttled via rAF
│   └── useReveal.js      # fade-in via IntersectionObserver
├── App.jsx
├── main.jsx
└── index.css             # design tokens + estilos
```

## Créditos

**Assets de Nuvens** — Sky with Clouds Background (Pixel Art Set) por [free-game-assets](https://free-game-assets.itch.io/free-sky-with-clouds-background-pixel-art-set)  
Disponível em [itch.io](https://itch.io/) — Licença CC0 (domínio público)
