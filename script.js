/* ============================================================
   María Abella — Portfolio
   i18n + Chart.js
   ============================================================ */

/* ---------- Translations ---------- */
const i18n = {
  es: {
    "nav.name": "María Abella",
    "nav.about": "Sobre mí",
    "nav.numbers": "Números",
    "nav.projects": "Proyectos",
    "nav.education": "Formación",
    "nav.contact": "Contacto",

    "hero.eyebrow": "Fashion Retail · Barcelona",
    "hero.tagline": "Store Manager · Product & Retail Strategy",
    "hero.sub": "Construyo experiencias de tienda donde el producto, el dato y la creatividad se encuentran.",
    "hero.ctaPrimary": "Ver mis proyectos",
    "hero.ctaSecondary": "Descargar CV",

    "about.eyebrow": "Sobre mí",
    "about.title1": "Comprometida,",
    "about.title2": "versátil",
    "about.title3": "y proactiva.",
    "about.caption": "— una visión integral del retail, del producto al punto de venta.",
    "about.lead": "Profesional de Fashion Retail con más de tres años de experiencia en primera línea de marcas nacionales e internacionales. Actualmente Store Manager en Scalpers (ECI Diagonal). Gestiono tres departamentos con KPI y productos independientes, y un equipo de cinco personas en uno de los corners de mayor tráfico de la marca en Cataluña.",
    "about.body1": "Mi formación en EAE Business School, IED Barcelona e IDEM me da una visión integral del negocio: producto, supply chain, demand planning, visual merchandising y comunicación de marca.",
    "about.body2": "Mi experiencia está en el punto de venta, pero mi objetivo es dar el salto hacia la <strong>conceptualización y estrategia en HQ</strong>. Disfruto del equilibrio entre creatividad y análisis, y lo que más valoro es poder llevar la estrategia de marca al terreno, traduciéndola en experiencias y resultados concretos en tienda.",

    "numbers.eyebrow": "Resultados que importan",
    "numbers.title1": "Números",
    "numbers.title2": "que cuentan",
    "numbers.title3": "una historia.",
    "numbers.kpiLabel": "Scalpers · KPIs personales",
    "numbers.kpiTitle": "Rendimiento en tienda",
    "numbers.kpiCaption": "Conversión, ticket medio y récord semanal por encima del estándar retail.",
    "numbers.metric1": "facturación semanal en tienda TTGG tras rediseño de visual merchandising y rotación de producto.",
    "numbers.metric2": "récord de ventas semanales junto a un equipo de 6 personas en Scalpers Diagonal.",
    "numbers.metric3": "perfiles de creadoras de contenido gestionados, con audiencias de 82K hasta 1,2M.",
    "numbers.influencerIntroLabel": "Paréntesis fuera del retail",
    "numbers.influencerIntroTitle": "Influencer Marketing — un capítulo paralelo",
    "numbers.influencerIntroBody": "Entre junio 2022 y enero 2023 trabajé en remoto como Influencer Marketing Assistant para una freelance, gestionando una cartera de 10 creadoras de contenido en moda, belleza y lifestyle. Los datos del gráfico que sigue corresponden a esa etapa: una experiencia que sumó visión 360º de marca a mi recorrido retail.",
    "numbers.influencerLabel": "Influencer Marketing · Audiencias gestionadas",
    "numbers.influencerTitle": "Alcance de mi cartera",
    "numbers.influencerCaption": "10 perfiles en moda, belleza y lifestyle. Top: @aliciarev (1,2M TikTok · 34,9M views/mes).",

    "projects.eyebrow": "Trabajos seleccionados",
    "projects.title1": "Proyectos",
    "projects.title2": "universitarios.",
    "projects.lead": "Análisis, auditorías y dossiers estratégicos desarrollados durante el Máster en Fashion & Retail Management de EAE Business School (Barcelona–Rome).",
    "projects.roleLabel": "Mi rol:",
    "projects.download": "Descargar dossier",

    "projects.p1.meta": "2025–2026 · Gestión del Punto de Venta · EAE",
    "projects.p1.title": "Mystery Shopping · Hermès",
    "projects.p1.lead": "Auditoría de la boutique Hermès de Paseo de Gracia (Barcelona) para evaluar el alineamiento entre los valores de marca y la experiencia real en punto de venta.",
    "projects.p1.b1": "Análisis del ceremonial de ventas, marketing sensorial (iluminación, fragancia de cuero, música casi imperceptible, invitación al tacto) y rol del personal en tienda.",
    "projects.p1.b2": "<strong>Fortalezas:</strong> coherencia total del customer journey, savoir-faire artesanal transmitido por el equipo, ausencia de presión comercial.",
    "projects.p1.b3": "<strong>Áreas de mejora:</strong> discreción excesiva inicial, integración de elementos digitales, percepción de surtido limitado.",
    "projects.p1.b4": "Propuesta de evolución del uniforme: negro elegante con detalle naranja Hermès y pañuelo de seda como guiño al heritage.",
    "projects.p1.role": "proyecto individual — trabajo de campo, redacción del dossier y propuesta creativa.",

    "projects.p2.meta": "2025–2026 · Retail Management · EAE",
    "projects.p2.title": "Retail Audit · Casa LOEWE Barcelona",
    "projects.p2.lead": "Auditoría 360° de la flagship de LOEWE en Casa Lleó i Morera (Passeig de Gràcia), analizando cómo el punto de venta opera como extensión cultural de la marca.",
    "projects.p2.b1": "Análisis estructurado en 5 ejes: marca y estrategia, ambiente y atmósfera, store layout y materiales, producto y visual merchandising, servicio y experiencia.",
    "projects.p2.b2": "Documentación del marketing sensorial (aroma Tomato Leaves, paisaje sonoro jazz / clásica experimental, iluminación dirigida sobre textura) y del rol del arte en tienda — Tanabe Chikuunsai IV, Aurélia Muñoz, Picasso.",
    "projects.p2.b3": "Conclusión: la tienda como <em>casa</em>, no como tienda. Tres pilares — vanguardia, marketing sensorial y clienteling — que convierten el punto de venta en centro cultural.",
    "projects.p2.role": "proyecto en equipo de 5 personas. Foco personal en el bloque de ambiente, atmósfera y dimensión sensorial.",

    "projects.p3.meta": "2025–2026 · Trabajo Fin de Máster · EAE",
    "projects.p3.title": "Pop-up Agua Bendita · Sunset Lifestyle",
    "projects.p3.lead": "Estrategia de expansión internacional para la marca colombiana de swimwear premium en el mercado estadounidense, materializada en un pop-up experiencial en El Silencio Ibiza.",
    "projects.p3.b1": "<strong>Diagnóstico:</strong> investigación primaria con 115 encuestas y 8 entrevistas a consumidoras americanas (25–45). Solo el 6,7% del target reconocía Agua Bendita vs. 33,3% Farm Rio.",
    "projects.p3.b2": "<strong>Concepto:</strong> <em>Sunset Lifestyle</em> en El Silencio Ibiza, con partnerships estratégicos (Hawaiian Tropic, La Eivissenca) y activación <em>Sunset Watch Party</em> — evento de tardeo con DJ en directo.",
    "projects.p3.b3": "<strong>Plan financiero:</strong> inversión USD 140.080 (sobre presupuesto de 150K) · ventas directas proyectadas USD 144.600 · retorno total estimado USD 284.000 — ratio 2,03x.",
    "projects.p3.b4": "<strong>Comunicación:</strong> estrategia en 4 fases con influencer marketing, contenido orgánico, plan digital (landing, SEO, SEM) y CRM post-evento.",
    "projects.p3.role": "proyecto en equipo de 4 personas (María Abella, Ana Gómez, Pau Medina, Karina Weiss).",

    "education.eyebrow": "Formación",
    "education.title1": "Una base",
    "education.title2": "de moda, retail",
    "education.title3": "y mucho rigor.",
    "education.current": "actualidad",
    "edu.e1": "Modelos de negocio retail, omnicanalidad, supply chain, demand planning, expansión internacional.",
    "edu.e2title": "Diplomada en Marketing y Comunicación de Moda",
    "edu.e2": "Consumer behavior, branding, posicionamiento y planes de marketing orientados a resultados.",
    "edu.e3title": "Máster en Estilismo y Dirección Artística",
    "edu.e3": "Dirección creativa, storytelling de moda, moodboards y dossiers.",
    "edu.e4title": "Escaparatismo, Visual Merchandising & Personal Shopper",
    "edu.e4": "Visual merchandising estratégico, colorimetría y asesoría de imagen.",
    "edu.e5title": "Medicina (1 año) — Universidad Europea de Madrid",
    "edu.e5school": "Rigor, atención al detalle y trabajo en equipo multicultural.",
    "edu.e5": "Dejé la carrera para dedicarme a lo que verdaderamente me apasiona: la moda.",

    "contact.eyebrow": "Hablemos",
    "contact.title1": "Construyamos algo",
    "contact.title2": "memorable.",
    "contact.sub": "Abierta a oportunidades en HQ de fashion retail, producto, visual merchandising y dirección de tienda.",
    "contact.email": "Email",
    "contact.phone": "Teléfono",
    "contact.linkedin": "/in/maria-abella",
    "contact.download": "Descargar PDF",

    "footer.made": "Diseñado con cuidado en Barcelona",

    /* Chart labels */
    "chart.creativity": "Creatividad",
    "chart.analysis": "Análisis",
    "chart.conversion": "Conversión",
    "chart.ticket": "Ticket medio (€)",
    "chart.weekRecord": "Récord semanal (€)",
    "chart.uplift": "Uplift TTGG",
    "chart.followers": "Seguidores (miles)"
  },

  en: {
    "nav.name": "María Abella",
    "nav.about": "About",
    "nav.numbers": "Numbers",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.contact": "Contact",

    "hero.eyebrow": "Fashion Retail · Barcelona",
    "hero.tagline": "Store Manager · Product & Retail Strategy",
    "hero.sub": "Building store experiences where product, data and creativity meet.",
    "hero.ctaPrimary": "See my projects",
    "hero.ctaSecondary": "Download CV",

    "about.eyebrow": "About me",
    "about.title1": "Committed,",
    "about.title2": "versatile",
    "about.title3": "and proactive.",
    "about.caption": "— a full view of retail, from product to point of sale.",
    "about.lead": "Fashion Retail professional with over three years of experience on the front line of national and international brands. Currently Store Manager at Scalpers (ECI Diagonal). I lead three departments with independent KPIs and product lines, and a team of five at one of the brand's busiest corners in Catalonia.",
    "about.body1": "My background at EAE Business School, IED Barcelona and IDEM gives me a 360° view of the business: product, supply chain, demand planning, visual merchandising and brand communication.",
    "about.body2": "My experience is on the shop floor, but my goal is to move into <strong>concept work and strategy at HQ</strong>. I enjoy the balance between creativity and analysis, and what I value most is bringing brand strategy down to the floor — translating it into real experiences and tangible results in store.",

    "numbers.eyebrow": "Results that matter",
    "numbers.title1": "Numbers",
    "numbers.title2": "that tell",
    "numbers.title3": "a story.",
    "numbers.kpiLabel": "Scalpers · personal KPIs",
    "numbers.kpiTitle": "Floor performance",
    "numbers.kpiCaption": "Conversion, average ticket and weekly record above retail standard.",
    "numbers.metric1": "weekly revenue at TTGG store after visual merchandising and product rotation redesign.",
    "numbers.metric2": "weekly sales record alongside a team of 6 at Scalpers Diagonal.",
    "numbers.metric3": "content creator profiles managed, with audiences from 82K up to 1.2M.",
    "numbers.influencerIntroLabel": "An aside from retail",
    "numbers.influencerIntroTitle": "Influencer Marketing — a parallel chapter",
    "numbers.influencerIntroBody": "Between June 2022 and January 2023 I worked remotely as an Influencer Marketing Assistant for a freelancer, managing a portfolio of 10 content creators in fashion, beauty and lifestyle. The figures in the chart below correspond to that period: an experience that added a 360° brand view to my retail journey.",
    "numbers.influencerLabel": "Influencer Marketing · Managed audiences",
    "numbers.influencerTitle": "Portfolio reach",
    "numbers.influencerCaption": "10 profiles across fashion, beauty and lifestyle. Top: @aliciarev (1.2M TikTok · 34.9M monthly views).",

    "projects.eyebrow": "Selected work",
    "projects.title1": "University",
    "projects.title2": "projects.",
    "projects.lead": "Strategic analyses, audits and dossiers developed during the Master in Fashion & Retail Management at EAE Business School (Barcelona–Rome).",
    "projects.roleLabel": "My role:",
    "projects.download": "Download dossier",

    "projects.p1.meta": "2025–2026 · Point of Sale Management · EAE",
    "projects.p1.title": "Mystery Shopping · Hermès",
    "projects.p1.lead": "Audit of the Hermès boutique on Paseo de Gracia (Barcelona) assessing how the in-store experience aligns with the brand's core values.",
    "projects.p1.b1": "Analysis of the sales ceremony, sensory marketing (lighting, leather fragrance, near-imperceptible music, invitation to touch) and the role of in-store staff.",
    "projects.p1.b2": "<strong>Strengths:</strong> full coherence of the customer journey, savoir-faire transmitted by the team, absence of commercial pressure.",
    "projects.p1.b3": "<strong>Areas to improve:</strong> excessive initial discretion, integration of digital elements, perception of limited assortment.",
    "projects.p1.b4": "Uniform evolution proposal: elegant black with Hermès orange detailing and a silk scarf as a heritage nod.",
    "projects.p1.role": "individual project — fieldwork, dossier writing and creative proposal.",

    "projects.p2.meta": "2025–2026 · Retail Management · EAE",
    "projects.p2.title": "Retail Audit · Casa LOEWE Barcelona",
    "projects.p2.lead": "360° audit of LOEWE's flagship in Casa Lleó i Morera (Passeig de Gràcia), examining how the store operates as a cultural extension of the brand.",
    "projects.p2.b1": "Analysis structured around 5 axes: brand and strategy, ambience and atmosphere, store layout and materials, product and visual merchandising, service and experience.",
    "projects.p2.b2": "Documentation of sensory marketing (Tomato Leaves scent, jazz / experimental classical soundscape, directional lighting on texture) and the role of art in store — Tanabe Chikuunsai IV, Aurélia Muñoz, Picasso.",
    "projects.p2.b3": "Conclusion: the store as a <em>house</em>, not a shop. Three pillars — avant-garde, sensory marketing and clienteling — turning the point of sale into a cultural venue.",
    "projects.p2.role": "team project (5 people). Personal focus on the ambience, atmosphere and sensory dimension.",

    "projects.p3.meta": "2025–2026 · Master's Thesis · EAE",
    "projects.p3.title": "Pop-up Agua Bendita · Sunset Lifestyle",
    "projects.p3.lead": "International expansion strategy for the Colombian premium swimwear brand into the US market, materialised in an experiential pop-up at El Silencio Ibiza.",
    "projects.p3.b1": "<strong>Diagnosis:</strong> primary research with 115 surveys and 8 in-depth interviews with American consumers (25–45). Only 6.7% of the target spontaneously recalled Agua Bendita vs. 33.3% for Farm Rio.",
    "projects.p3.b2": "<strong>Concept:</strong> <em>Sunset Lifestyle</em> at El Silencio Ibiza, with strategic partnerships (Hawaiian Tropic, La Eivissenca) and a <em>Sunset Watch Party</em> activation — afternoon event with live DJ.",
    "projects.p3.b3": "<strong>Financial plan:</strong> total investment USD 140,080 (under the 150K budget) · projected direct sales USD 144,600 · estimated total return USD 284,000 — 2.03x ratio.",
    "projects.p3.b4": "<strong>Communication:</strong> four-phase strategy with influencer marketing, organic content, digital plan (landing, SEO, SEM) and post-event CRM.",
    "projects.p3.role": "team project of 4 (María Abella, Ana Gómez, Pau Medina, Karina Weiss).",

    "education.eyebrow": "Education",
    "education.title1": "A foundation",
    "education.title2": "in fashion, retail",
    "education.title3": "and rigour.",
    "education.current": "present",
    "edu.e1": "Retail business models, omnichannel, supply chain, demand planning and international expansion.",
    "edu.e2title": "Diploma in Fashion Marketing & Communication",
    "edu.e2": "Consumer behaviour, branding, positioning and results-driven marketing plans.",
    "edu.e3title": "Master in Styling & Art Direction",
    "edu.e3": "Creative direction, fashion storytelling, moodboards and dossiers.",
    "edu.e4title": "Window Display, Visual Merchandising & Personal Shopper",
    "edu.e4": "Strategic visual merchandising, colour theory and image consulting.",
    "edu.e5title": "Medicine (1 year) — Universidad Europea de Madrid",
    "edu.e5school": "Rigour, attention to detail and multicultural teamwork.",
    "edu.e5": "I left this path to pursue what I'm truly passionate about: fashion.",

    "contact.eyebrow": "Let's talk",
    "contact.title1": "Let's build something",
    "contact.title2": "memorable.",
    "contact.sub": "Open to opportunities in fashion retail HQ, product, visual merchandising and store management.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.linkedin": "/in/maria-abella",
    "contact.download": "Download PDF",

    "footer.made": "Designed with care in Barcelona",

    /* Chart labels */
    "chart.creativity": "Creativity",
    "chart.analysis": "Analytics",
    "chart.conversion": "Conversion",
    "chart.ticket": "Avg ticket (€)",
    "chart.weekRecord": "Weekly record (€)",
    "chart.uplift": "TTGG uplift",
    "chart.followers": "Followers (K)"
  }
};

/* ---------- Theme tokens for charts ---------- */
const theme = {
  burgundy: "#5C1A1B",
  burgundyDeep: "#3F0F11",
  cream: "#F4ECDD",
  rose: "#E5C9C2",
  roseDust: "#D9B9B2",
  aubergine: "#2D1820",
  muted: "rgba(244, 236, 221, 0.55)"
};

/* ---------- State ---------- */
let currentLang = "es";
let charts = {};

/* ---------- Apply translations ---------- */
function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.body.classList.toggle("lang-en", lang === "en");
  document.body.classList.toggle("lang-es", lang === "es");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = i18n[lang][key];
    if (value !== undefined) {
      el.innerHTML = value;
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  rebuildCharts();
}

/* ---------- Charts ---------- */
function destroyCharts() {
  Object.values(charts).forEach((c) => c && c.destroy());
  charts = {};
}

function buildKpiChart() {
  const el = document.getElementById("kpiChart");
  if (!el) return;
  charts.kpi = new Chart(el, {
    type: "bar",
    data: {
      labels: [
        t("chart.conversion"),
        t("chart.ticket"),
        t("chart.uplift"),
        t("chart.weekRecord")
      ],
      datasets: [{
        label: "",
        data: [38, 85, 50, 200], // conversion 38%, ticket 85, uplift 50%, week record /100 -> 200 for scale
        backgroundColor: [theme.rose, theme.roseDust, theme.rose, theme.roseDust],
        borderRadius: 2,
        borderSkipped: false
      }]
    },
    options: {
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const labels = [
                ctx.parsed.y + "%",
                "€" + ctx.parsed.y,
                "+" + ctx.parsed.y + "%",
                "~€" + ctx.parsed.y * 100
              ];
              return " " + labels[ctx.dataIndex];
            }
          }
        }
      },
      scales: {
        x: {
          ticks: { color: theme.cream, font: { family: "Inter", size: 11 } },
          grid: { display: false },
          border: { color: theme.muted }
        },
        y: {
          ticks: {
            color: theme.muted,
            font: { family: "Inter", size: 10 },
            stepSize: 50
          },
          grid: { color: "rgba(244, 236, 221, 0.08)" },
          border: { display: false }
        }
      },
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

function buildInfluencerChart() {
  const el = document.getElementById("influencerChart");
  if (!el) return;
  // Approx follower counts (K) of managed creators — illustrative based on CV range
  const data = [82, 110, 145, 173, 220, 310, 480, 650, 880, 1200];
  charts.influencer = new Chart(el, {
    type: "bar",
    data: {
      labels: data.map((_, i) => "#" + (i + 1)),
      datasets: [{
        label: t("chart.followers"),
        data: data,
        backgroundColor: data.map((v) => {
          const pct = v / 1200;
          // gradient from rose-dust to burgundy
          const r = Math.round(217 - (217 - 92) * pct);
          const g = Math.round(185 - (185 - 26) * pct);
          const b = Math.round(178 - (178 - 27) * pct);
          return `rgb(${r}, ${g}, ${b})`;
        }),
        borderRadius: 2
      }]
    },
    options: {
      indexAxis: "x",
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => " " + ctx.parsed.y + "K " + t("chart.followers").toLowerCase()
          }
        }
      },
      scales: {
        x: {
          ticks: { color: theme.muted, font: { family: "Inter", size: 10 } },
          grid: { display: false },
          border: { color: theme.muted }
        },
        y: {
          ticks: {
            color: theme.muted,
            font: { family: "Inter", size: 10 },
            callback: (v) => v + "K"
          },
          grid: { color: "rgba(244, 236, 221, 0.08)" },
          border: { display: false }
        }
      },
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

function rebuildCharts() {
  destroyCharts();
  // small delay so the lang toggle paints first
  requestAnimationFrame(() => {
    buildKpiChart();
    buildInfluencerChart();
  });
}

/* ---------- Helpers ---------- */
function t(key) {
  return i18n[currentLang][key] || key;
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  // Year in footer
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Detect browser lang on first load
  const browserLang = (navigator.language || "es").toLowerCase().startsWith("en") ? "en" : "es";
  applyLang(browserLang);

  // Lang switch
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });
});
