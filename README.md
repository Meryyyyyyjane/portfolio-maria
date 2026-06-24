# María Abella — Portfolio

Portfolio personal de **María Abella** · Fashion Retail · Product · Strategy.
Sitio estático bilingüe (ES / EN) construido con HTML, CSS y JavaScript puro. Charts con [Chart.js](https://www.chartjs.org/) vía CDN.

## Estructura

```
portfolio-maria/
├── index.html          # Estructura y contenido (con switch ES/EN)
├── styles.css          # Estética editorial: burgundy / cream / aubergine
├── script.js           # i18n (traducciones) + Chart.js
└── assets/
    ├── cv/             # CV PDF descargable
    └── images/         # (vacío) — tus fotos editoriales
```

## Cómo ver el sitio en local

Abre `index.html` haciendo doble clic en él, o desde Finder con clic derecho → Abrir con → Safari / Chrome.

> Tip: las fuentes y Chart.js cargan desde internet (Google Fonts + CDN), así que necesitas conexión la primera vez.

## Cómo añadir tus imágenes

1. Guarda tus fotos en `assets/images/` (formato `.jpg` o `.webp` recomendado).
2. Abre `index.html` y busca los bloques `<div class="img-placeholder">…</div>`.
3. Sustituye cada uno por:

```html
<img src="assets/images/tu-foto.jpg" alt="Descripción" class="hero__img" />
```

Lugares donde hay placeholders:
- **Hero** (foto editorial principal)
- **About** (imagen lifestyle / brand)
- **Experience → Store Manager** (foto del corner / tienda)
- **Experience → Influencer Marketing** (mockup campaña)

## Cómo editar texto

Todo el contenido editable está en `script.js`, en el objeto `i18n`:

```js
const i18n = {
  es: {
    "hero.tagline": "Store Manager · Product & Retail Strategy",
    ...
  },
  en: {
    "hero.tagline": "Store Manager · Product & Retail Strategy",
    ...
  }
};
```

Edita el valor en `es` y en `en` y guarda. Recarga el navegador.

## Cómo cambiar los gráficos (Numbers)

Los datos están en `script.js`, dentro de `buildMixChart`, `buildKpiChart` y `buildInfluencerChart`.

## Deploy

Este sitio es 100% estático. Vercel lo detecta automáticamente. Sigue las instrucciones del repo (sección abajo) o:

1. Sube a GitHub.
2. En Vercel: New Project → Import → Deploy. No hace falta configurar build.

---

© María Abella
