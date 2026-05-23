# discordia/ — Microblog Platform

Plataforma de microblog com tema dark moderno, construída com **Angular 19** usando a API de Signals e componentes standalone.

---

## ✦ Stack

| Camada | Tecnologia |
|---|---|
| Framework | Angular 21 (standalone components) |
| Reatividade | Signals (`signal`, `computed`) |
| Estilos | SCSS com variáveis CSS |
| Tipografia | DM Sans + Space Mono (Google Fonts) |

---

## ✦ Estrutura do Projeto

```
src/
└── app/
    ├── models/
    │   └── post.model.ts           # Interface Post
    ├── services/
    │   ├── post.service.ts         # Estado global com Signals
    │   └── hashtag.pipe.ts         # Pipe para destacar #hashtags
    └── components/
        ├── topbar/                 # Barra superior fixa
        ├── compose-box/            # Campo de composição (600 chars)
        ├── post-card/              # Card individual de post
        └── feed/                   # Lista reativa de posts
```

---

## ✦ Como rodar

### Pré-requisitos
- Node.js 20+
- npm 9+

### Instalação

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo dev (http://localhost:4200)
npm start

# 3. Build de produção
npm run build
```

---

## ✦ Funcionalidades

- **Compor posts** com limite de 600 caracteres
- **Anel de progresso** animado com alerta visual ao se aproximar do limite
- **Like** com toggle e contagem em tempo real
- **Repost** com toggle e contagem em tempo real
- **Hashtags** detectadas automaticamente e destacadas via `HashtagPipe`
- **Animação** de entrada nos novos posts
- **Estado global** gerenciado com `signal()` no `PostService`

---

## ✦ Padrões Angular 19 utilizados

```typescript
// Signals para estado reativo
private _posts = signal<Post[]>([]);
readonly posts = computed(() => this._posts());

// Input/Output modernos
post = input.required<Post>();
liked = output<number>();

// @if / @for (novo template syntax)
@for (post of posts(); track post.id) { ... }
@if (posts().length === 0) { ... }
```
