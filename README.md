<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=F48FB1,FFF59D,81D4FA&height=220&section=header&text=Portfolio&fontSize=70&fontColor=ffffff&fontAlignY=35&desc=React%20%2B%20Vite%20%7C%20Tailwind%20CSS&descSize=18&descAlignY=65&descAlign=50&animation=fadeIn"/>
</div>

<div align="center">
  <br>
  <a href="https://portifolio-eight-blond.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Ver%20Portfólio-000000?style=for-the-badge&logo=vercel&logoColor=white&color=81D4FA" />
  </a>
  <a href="https://www.linkedin.com/in/taina-cl-ribeiro" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=F06292" />
  </a>
  <a href="mailto:tainaribeir1930@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white&color=F48FB1" />
  </a>
</div>
<br>

# Portfolio — Tainá Ribeiro

Portfólio interativo desenvolvido com React (Vite) e Tailwind CSS, trazendo uma experiência visual *ao entardecer* com parallax em 5 camadas e animações fluidas baseadas na direção do scroll.

---

## 🚀 Tecnologias e Ferramentas

* **Core:** React 18 + Vite
* **Estilização:** Tailwind CSS + PostCSS (Utility-First com Design Tokens customizados)
* **Tipografia:** Syne (Display), Inter (Corpo) e Space Mono (Monospaced)
* **Animações & Performance:** Hooks nativos com `requestAnimationFrame` e `IntersectionObserver`

---

## 🛠️ Como Executar o Projeto

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no seu navegador.

Build de produção:

```bash
npm run build
npm run preview
```

---

## 🎨 Decisões de Design e Arquitetura

### 1. Paleta de Cores e Identidade Visual

* **Base:** Fundo escuro baseado em gradiente índigo profundo extraído das nuvens.
* **Destaques:** Neon saturado com **Magenta** e **Ciano** (símbolos da estética cyberpunk), complementados por **Âmbar** como ponto focal para avisos e eyebrow tags.
* **Cards & Badges:** Uso de pílulas sólidas e com alto contraste para garantir excelente legibilidade sem apagar contra o fundo escuro.

### 2. Sistema de Parallax (Hero)

As 5 camadas de imagem (`src/assets/clouds`) criam profundidade por meio de movimentação em velocidades distintas atreladas ao scroll:

| Arquivo | Função Visual | Velocidade Parallax |
| --- | --- | --- |
| `01-sky.png` | Céu / Gradiente de fundo | `0.04` (Quase estático) |
| `02-cloud-far.png` | Nuvens distantes | `0.10` |
| `03-cloud-mid.png` | Nuvens intermediárias | `0.20` |
| `04-cloud-near.png` | Nuvens próximas | `0.34` |
| `05-cloud-front.png` | Primeiro plano | `0.52` (Mais rápida) |

*A camada `05-cloud-front.png` é reutilizada no rodapé (seção de Contato) para fechar a composição visual da página.*

### 3. Animações e Performance (Zero Libs Pesadas)

* **`useScrollY`:** Throttling do scroll via `requestAnimationFrame` com limpeza de cancelamento no ciclo de desmontagem para evitar vazamentos de memória.
* **`useReveal`:** Animação de entrada por `IntersectionObserver` sensível à direção do scroll. Se você rola para baixo, o elemento sobe; se rola para cima, ele desce.
* **Aceleração por Hardware:** Transições restritas a `opacity` e `transform` (`transform-gpu`, `will-change-[transform,opacity]`), rodando a 60fps na GPU sem causar re-layouts na CPU.

---

## 📁 Estrutura do Projeto

```
.
├── src/
│   ├── assets/clouds/     # As 5 camadas de nuvem em Pixel Art
│   ├── components/        # Componentes UI refatorados com Tailwind CSS
│   ├── data/content.js    # Arquivo único com os dados do portfólio
│   ├── hooks/             # Hooks customizados (useScrollY, useReveal)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css          # Diretivas do Tailwind CSS e resets fundamentais
├── tailwind.config.js     # Configuração de temas, cores customizadas e fontes
├── postcss.config.js      # Processador CSS para o Tailwind
└── package.json
```

---

## 📄 Créditos e Licenças

* **Assets de Nuvens:** *Sky with Clouds Background (Pixel Art Set)* por [free-game-assets](https://free-game-assets.itch.io/free-sky-with-clouds-background-pixel-art-set) via [itch.io](https://itch.io/) — Licença CC0 (Domínio Público).

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=81D4FA,FFF59D,F48FB1&height=100&section=footer"/>
</div>