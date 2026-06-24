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
    "nav.experience": "Trayectoria",
    "nav.expertise": "Expertise",
    "nav.contact": "Contacto",

    "hero.eyebrow": "Fashion Retail · Barcelona",
    "hero.tagline": "Store Manager · Product & Retail Strategy",
    "hero.sub": "Construyo experiencias de tienda donde el producto, el dato y la creatividad se encuentran.",
    "hero.ctaPrimary": "Ver mi trayectoria",
    "hero.ctaSecondary": "Descargar CV",

    "placeholder.portrait": "Tu foto editorial aquí",
    "placeholder.about": "Imagen de marca / lifestyle",
    "placeholder.scalpersStore": "Foto del corner / tienda",
    "placeholder.influencer": "Mockup de campaña / Instagram",

    "about.eyebrow": "Sobre mí",
    "about.title1": "Elegante,",
    "about.title2": "atrevida",
    "about.title3": "y orientada a resultados.",
    "about.caption": "— una visión integral del retail, del producto al punto de venta.",
    "about.lead": "Profesional de Fashion Retail con más de tres años en primera línea, hoy Store Manager en Scalpers (ECI Diagonal). Gestiono tres departamentos y un equipo de cinco personas en uno de los corners de mayor tráfico de la marca en Cataluña.",
    "about.body1": "Mi formación en EAE Business School, IED Barcelona e IDEM me da una visión integral del negocio: producto, supply chain, demand planning, visual merchandising y comunicación de marca. Disfruto del salto del punto de venta al análisis y la conceptualización en HQ.",
    "about.body2": "Mezclo creatividad y análisis en una proporción que me define: <strong>60% creatividad, 40% análisis</strong>. Me apasiona crear conceptos de tienda, trabajar en equipo y que el trabajo hable por sí solo.",
    "about.pillar1": "años en fashion retail",
    "about.pillar2": "personas a cargo",
    "about.pillar3": "departamentos simultáneos",

    "numbers.eyebrow": "Resultados que importan",
    "numbers.title1": "Números",
    "numbers.title2": "que cuentan",
    "numbers.title3": "una historia.",
    "numbers.donutLabel": "Mi mix profesional",
    "numbers.donutTitle": "Creatividad & Análisis",
    "numbers.donutCaption": "La intuición creativa apoyada en datos.",
    "numbers.kpiLabel": "Scalpers · KPIs personales",
    "numbers.kpiTitle": "Rendimiento en tienda",
    "numbers.kpiCaption": "Conversión, ticket medio y récord semanal por encima del estándar retail.",
    "numbers.metric1": "facturación semanal en tienda TTGG tras rediseño de visual merchandising y rotación de producto.",
    "numbers.metric2": "récord de ventas semanales junto a un equipo de 6 personas en Scalpers Diagonal.",
    "numbers.metric3": "perfiles de creadoras de contenido gestionados, con audiencias de 82K hasta 1,2M.",
    "numbers.influencerLabel": "Influencer Marketing · Audiencias gestionadas",
    "numbers.influencerTitle": "Alcance de mi cartera",
    "numbers.influencerCaption": "10 perfiles en moda, belleza y lifestyle. Top: @aliciarev (1,2M TikTok · 34,9M views/mes).",

    "experience.eyebrow": "Trayectoria",
    "experience.title1": "De la tienda",
    "experience.title2": "al headquarters.",

    "exp.r1.date": "Mayo 2026 — Presente",
    "exp.r1.title": "Store Manager",
    "exp.r1.b1": "Gestión simultánea de tres líneas de producto (mujer, hombre, tallas grandes) y un equipo de 5 personas, con reporte a la partner regional de Cataluña.",
    "exp.r1.b2": "Adaptación de la estrategia comercial y de producto a objetivos de venta independientes por departamento, en uno de los corners de mayor tráfico de la marca.",
    "exp.r1.b3": "Supervisión de visual merchandising, reposición y seguimiento de KPIs (ventas, ticket medio, conversión) por departamento.",

    "exp.r2.date": "Feb 2023 — Presente",
    "exp.r2.title": "Retail & Consumer Experience Specialist",
    "exp.r2.b1": "Reasignada a tienda TTGG con bajo rendimiento: tras rediseño de visual merchandising y rotación de producto, +50% de facturación semanal.",
    "exp.r2.b2": "Tasa de conversión personal ~38% con ticket medio ~85€, por encima del estándar de retail de moda.",
    "exp.r2.b3": "Análisis semanal de datos en Excel, ~22 cambios de colección/año y formación de 3-5 nuevas incorporaciones.",

    "exp.r3.date": "Jun 2022 — Ene 2023",
    "exp.r3.title": "Influencer Marketing Assistant",
    "exp.r3.loc": "Remoto",
    "exp.r3.b1": "Gestión de 10 creadoras en moda, belleza y lifestyle. Audiencias entre 82K y 1,2M, incluyendo @aliciarev (1,2M TikTok, 34,9M views/mes).",
    "exp.r3.b2": "Coordinación de briefings, plazos y estándares de contenido en Instagram y TikTok.",
    "exp.r3.b3": "Análisis de métricas y reportes de rendimiento por campaña para apoyar decisiones estratégicas de cliente.",

    "exp.r4.date": "Jun 2022 — Ene 2023",
    "exp.r4.title": "Retail & Consumer Experience Specialist",
    "exp.r4.b1": "Atención personalizada al cliente orientada a la fidelización y la frecuencia de compra, con registro en CRM.",
    "exp.r4.b2": "Visual merchandising quincenal en tienda de pequeño formato, adaptando el espacio a la demanda y a los estándares de marca.",
    "exp.r4.b3": "Gestión de stock e inventario y cumplimiento de objetivos mensuales de facturación.",

    "exp.r5.date": "Mar 2022 — Jun 2022",
    "exp.r5.title": "Marketing Intern",
    "exp.r5.b1": "Estrategias de marketing y comunicación de marca, interna y externa, en inglés y español.",
    "exp.r5.b2": "Diseño del Libro de Bienvenida integrado en todas las tiendas de España, estandarizando procesos y atención al cliente.",

    "exp.r6.date": "Jun 2021 — Sep 2021",
    "exp.r6.title": "Marketing Intern",
    "exp.r6.b1": "Gestión autónoma de Instagram y LinkedIn: planificación de contenido, copywriting y línea editorial.",
    "exp.r6.b2": "Campañas de paid media en Google Ads y administración de base de datos de clientes.",
    "exp.r6.b3": "Apoyo a la estrategia comercial que llevó a la colección a entrar en Furest.",

    "expertise.eyebrow": "Expertise",
    "expertise.title1": "Lo que sé",
    "expertise.title2": "hacer.",
    "exp.s1.title": "Producto & punto de venta",
    "exp.s1.l1": "Análisis de rotación y rendimiento de surtido",
    "exp.s1.l2": "Identificación de best-sellers y baja salida",
    "exp.s1.l3": "Visual merchandising y estándares de HQ",
    "exp.s1.l4": "Supply chain, desarrollo de producto y demand planning",
    "exp.s2.title": "Análisis & datos",
    "exp.s2.l1": "Excel aplicado a análisis comercial y reporting",
    "exp.s2.l2": "KPIs retail: ventas, ticket medio, conversión",
    "exp.s2.l3": "Lectura de ventas, stock y comportamiento de cliente",
    "exp.s2.l4": "Mentalidad analítica orientada a resultados",
    "exp.s3.title": "Cliente & ventas",
    "exp.s3.l1": "Clienteling avanzado",
    "exp.s3.l2": "Upselling y cross-selling estratégico",
    "exp.s3.l3": "Fidelización de clientes recurrentes",
    "exp.s3.l4": "CRM (Oct8one, Kubbo)",
    "exp.s4.title": "Equipo & coordinación",
    "exp.s4.l1": "Gestión simultánea de 3 departamentos con KPIs independientes",
    "exp.s4.l2": "Liderazgo de turno y formación de incorporaciones",
    "exp.s4.l3": "Reporting a partner regional y ejecución de guidelines",
    "exp.s4.l4": "Coordinación de plantillas y cobertura",
    "exp.s5.title": "Marketing & comunicación",
    "exp.s5.l1": "Branding y visual merchandising on/offline",
    "exp.s5.l2": "Influencer marketing y campañas en RRSS",
    "exp.s5.l3": "Paid media (Google Ads) y copywriting editorial",
    "exp.s5.l4": "Moodboards, dossiers y dirección creativa",
    "exp.s6.title": "Herramientas & IA",
    "exp.s6.l1": "Office (Excel, Word, PowerPoint)",
    "exp.s6.l2": "Adobe Suite (Photoshop, InDesign)",
    "exp.s6.l3": "IA: ChatGPT, Claude, Midjourney, Sora, Gamma",
    "exp.s6.l4": "Idiomas: ES nativo · EN C1 · CA A2",

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
    "nav.experience": "Experience",
    "nav.expertise": "Expertise",
    "nav.contact": "Contact",

    "hero.eyebrow": "Fashion Retail · Barcelona",
    "hero.tagline": "Store Manager · Product & Retail Strategy",
    "hero.sub": "Building store experiences where product, data and creativity meet.",
    "hero.ctaPrimary": "See my journey",
    "hero.ctaSecondary": "Download CV",

    "placeholder.portrait": "Your editorial photo here",
    "placeholder.about": "Brand / lifestyle image",
    "placeholder.scalpersStore": "Store / corner photo",
    "placeholder.influencer": "Campaign / Instagram mockup",

    "about.eyebrow": "About me",
    "about.title1": "Elegant,",
    "about.title2": "daring",
    "about.title3": "and results-driven.",
    "about.caption": "— a full view of retail, from product to point of sale.",
    "about.lead": "Fashion Retail professional with 3+ years in store, currently Store Manager at Scalpers (ECI Diagonal). I lead three departments and a team of five at one of the brand's busiest corners in Catalonia.",
    "about.body1": "My background at EAE Business School, IED Barcelona and IDEM gives me an end-to-end view of the business: product, supply chain, demand planning, visual merchandising and brand communication. I enjoy moving from store floor to analysis and concept work at HQ.",
    "about.body2": "I blend creativity and analytics in a ratio that defines me: <strong>60% creativity, 40% analysis</strong>. I love crafting store concepts, working as a team and letting the work speak for itself.",
    "about.pillar1": "years in fashion retail",
    "about.pillar2": "people led",
    "about.pillar3": "departments managed",

    "numbers.eyebrow": "Results that matter",
    "numbers.title1": "Numbers",
    "numbers.title2": "that tell",
    "numbers.title3": "a story.",
    "numbers.donutLabel": "My professional mix",
    "numbers.donutTitle": "Creativity & Analytics",
    "numbers.donutCaption": "Creative intuition backed by data.",
    "numbers.kpiLabel": "Scalpers · personal KPIs",
    "numbers.kpiTitle": "Floor performance",
    "numbers.kpiCaption": "Conversion, average ticket and weekly record above retail standard.",
    "numbers.metric1": "weekly revenue at TTGG store after visual merchandising and product rotation redesign.",
    "numbers.metric2": "weekly sales record alongside a team of 6 at Scalpers Diagonal.",
    "numbers.metric3": "content creator profiles managed, with audiences from 82K up to 1.2M.",
    "numbers.influencerLabel": "Influencer Marketing · Managed audiences",
    "numbers.influencerTitle": "Portfolio reach",
    "numbers.influencerCaption": "10 profiles across fashion, beauty and lifestyle. Top: @aliciarev (1.2M TikTok · 34.9M monthly views).",

    "experience.eyebrow": "Experience",
    "experience.title1": "From the floor",
    "experience.title2": "to headquarters.",

    "exp.r1.date": "May 2026 — Present",
    "exp.r1.title": "Store Manager",
    "exp.r1.b1": "Leading three product lines (women, men, plus sizes) and a team of 5, reporting to the regional partner for Catalonia.",
    "exp.r1.b2": "Adapting commercial and product strategy to independent sales targets per department, at one of the brand's highest-traffic corners.",
    "exp.r1.b3": "Supervising visual merchandising, replenishment and KPI tracking (sales, average ticket, conversion) per department.",

    "exp.r2.date": "Feb 2023 — Present",
    "exp.r2.title": "Retail & Consumer Experience Specialist",
    "exp.r2.b1": "Reassigned to underperforming TTGG store: visual merchandising and product rotation redesign drove +50% weekly revenue.",
    "exp.r2.b2": "Personal conversion rate ~38% with average ticket ~€85, above fashion retail standard.",
    "exp.r2.b3": "Weekly Excel data analysis, ~22 collection changes/year and onboarding of 3-5 new hires.",

    "exp.r3.date": "Jun 2022 — Jan 2023",
    "exp.r3.title": "Influencer Marketing Assistant",
    "exp.r3.loc": "Remote",
    "exp.r3.b1": "Managed 10 creators in fashion, beauty and lifestyle. Audiences from 82K to 1.2M, including @aliciarev (1.2M TikTok, 34.9M monthly views).",
    "exp.r3.b2": "Coordinated briefings, deadlines and content standards across Instagram and TikTok.",
    "exp.r3.b3": "Analysed metrics and built campaign performance reports to inform client strategy.",

    "exp.r4.date": "Jun 2022 — Jan 2023",
    "exp.r4.title": "Retail & Consumer Experience Specialist",
    "exp.r4.b1": "Personalised customer service focused on loyalty and purchase frequency, with CRM tracking.",
    "exp.r4.b2": "Bi-weekly visual merchandising in small-format store, adapting space to demand and brand standards.",
    "exp.r4.b3": "Stock and inventory management, meeting monthly revenue targets.",

    "exp.r5.date": "Mar 2022 — Jun 2022",
    "exp.r5.title": "Marketing Intern",
    "exp.r5.b1": "Marketing strategy and brand communication, internal and external, in English and Spanish.",
    "exp.r5.b2": "Designed the Welcome Book rolled out across every store in Spain, standardising processes and customer service.",

    "exp.r6.date": "Jun 2021 — Sep 2021",
    "exp.r6.title": "Marketing Intern",
    "exp.r6.b1": "Owned Instagram and LinkedIn: content planning, copywriting and editorial voice.",
    "exp.r6.b2": "Google Ads paid media campaigns and customer database management.",
    "exp.r6.b3": "Supported the commercial strategy that brought the collection into Furest.",

    "expertise.eyebrow": "Expertise",
    "expertise.title1": "What I do",
    "expertise.title2": "best.",
    "exp.s1.title": "Product & retail floor",
    "exp.s1.l1": "Assortment rotation and performance analysis",
    "exp.s1.l2": "Best-seller and slow-mover identification",
    "exp.s1.l3": "Visual merchandising and HQ standards",
    "exp.s1.l4": "Supply chain, product development and demand planning",
    "exp.s2.title": "Analytics & data",
    "exp.s2.l1": "Excel applied to commercial analysis and reporting",
    "exp.s2.l2": "Retail KPIs: sales, average ticket, conversion",
    "exp.s2.l3": "Reading sales, stock and customer behaviour",
    "exp.s2.l4": "Analytical mindset, results-driven",
    "exp.s3.title": "Client & sales",
    "exp.s3.l1": "Advanced clienteling",
    "exp.s3.l2": "Strategic upselling and cross-selling",
    "exp.s3.l3": "Loyalty of recurring clients",
    "exp.s3.l4": "CRM (Oct8one, Kubbo)",
    "exp.s4.title": "Team & coordination",
    "exp.s4.l1": "Three departments with independent KPIs in parallel",
    "exp.s4.l2": "Shift leadership and onboarding of new hires",
    "exp.s4.l3": "Reporting to regional partner and executing HQ guidelines",
    "exp.s4.l4": "Staff scheduling and coverage planning",
    "exp.s5.title": "Marketing & comms",
    "exp.s5.l1": "Branding and visual merchandising on/offline",
    "exp.s5.l2": "Influencer marketing and social campaigns",
    "exp.s5.l3": "Paid media (Google Ads) and editorial copywriting",
    "exp.s5.l4": "Moodboards, dossiers and creative direction",
    "exp.s6.title": "Tools & AI",
    "exp.s6.l1": "Office (Excel, Word, PowerPoint)",
    "exp.s6.l2": "Adobe Suite (Photoshop, InDesign)",
    "exp.s6.l3": "AI: ChatGPT, Claude, Midjourney, Sora, Gamma",
    "exp.s6.l4": "Languages: ES native · EN C1 · CA A2",

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

function buildMixChart() {
  const el = document.getElementById("mixChart");
  if (!el) return;
  charts.mix = new Chart(el, {
    type: "doughnut",
    data: {
      labels: [t("chart.creativity"), t("chart.analysis")],
      datasets: [{
        data: [60, 40],
        backgroundColor: [theme.rose, theme.burgundy],
        borderColor: theme.aubergine,
        borderWidth: 4,
        hoverOffset: 8
      }]
    },
    options: {
      cutout: "68%",
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: theme.cream,
            font: { family: "Inter", size: 11, weight: "500" },
            padding: 18,
            boxWidth: 10,
            boxHeight: 10
          }
        },
        tooltip: {
          callbacks: {
            label: (ctx) => ` ${ctx.label}: ${ctx.parsed}%`
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false
    }
  });
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
    buildMixChart();
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
