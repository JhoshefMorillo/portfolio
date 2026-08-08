/* ============================================================
   1. TEXTOS (ES / EN)
   ============================================================ */
const textos = {
  es: {
    cargo: "Desarrollador Web Frontend",
    descripcion:
      "Transformo ideas en soluciones web que generan resultados reales.",
    navAbout: "Acerca de",
    navTech: "Tecnologías",
    navProjects: "Proyectos",

    aboutTitle: "Acerca de mí",
    aboutP1:
      "Soy desarrollador web frontend, enfocado en construir interfaces limpias y funcionales con <strong>HTML</strong>, <strong>CSS</strong> y <strong>JavaScript</strong>. Este portafolio que estás viendo es un ejemplo de eso.",
    aboutP2:
      "Mi interés por la tecnología empezó jugando videojuegos y preguntándome cómo estaban hechos. Esa curiosidad me llevó a estudiar <strong>Ingeniería de Software</strong> — carrera que sigo cursando actualmente — y fue ahí donde descubrí mi verdadera pasión: el <strong>desarrollo web</strong>, crear interfaces que la gente use, disfrute y le sean útiles en su día a día.",
    aboutP3:
      "Estoy en constante aprendizaje, combinando lo que veo en el instituto con proyectos propios, con una meta clara: convertirme en <strong>desarrollador Full Stack</strong> y construir productos completos, de inicio a fin. Cada proyecto que hago me acerca más a eso.",
    aboutP4:
      "En mi tiempo libre me gusta hacer deporte, escuchar música, ir a la iglesia y pasar tiempo con mi familia. Ese equilibrio es lo que me mantiene con la energía para seguir creando.",

    techTitle: "Tecnologías",
    toolsTitle: "Herramientas",
    projectsTitle: "Proyectos",

    proj1Title: "ImgTool — Compresor de Imágenes ↗",
    proj1Desc:
      "Compresor y conversor de imágenes gratuito e ilimitado, sin marcas de agua ni registro — todo se procesa en el navegador.",

    proj2Title: "JM QR — Generador de Códigos QR ↗",
    proj2Desc:
      "Desarrollé un generador de códigos QR gratuito e ilimitado, para evitar los límites y marcas de agua de las páginas de pago. Permite personalizar colores, logo y exportar en PNG, SVG y PDF.",

    proj3Title: "Curymarka SAC — Propuesta Web Corporativa ↗",
    proj3Desc:
      "Desarrollé una propuesta de sitio corporativo para una empresa real de mantenimiento electromecánico y suministro de oxígeno medicinal, que actualmente no cuenta con presencia web. Incluye formulario de contacto funcional, animaciones al scroll y diseño 100% responsive.",

    proj4Title: "MAISON YHON — Landing E-commerce ↗",
    proj4Desc:
      "Desarrollé la landing page de una marca ficticia de perfumería de nicho, con catálogo filtrable, carrito de compras persistente y checkout automático vía WhatsApp, sin necesidad de backend.",

    projSoonTitle: "Próximamente... ⏳",
    projSoonDesc: "Se viene un nuevo proyecto increíble. ¡Sigue pendiente!",
    projSoonTag1: "Próximo",
    projSoonTag2: "Nuevo",
    projSoonTag3: "En desarrollo",
    projectsFooter: "✦ Se vienen más proyectos muy pronto...",

    temas: {
      original: "original",
      green: "Verde Esmeralda",
      purple: "Violeta Minimalista",
    },
  },

  en: {
    cargo: "Frontend Web Developer",
    descripcion:
      "I transform ideas into web solutions that generate real results.",
    navAbout: "About",
    navTech: "Technologies",
    navProjects: "Projects",

    aboutTitle: "About me",
    aboutP1:
      "I'm a frontend web developer, focused on building clean and functional interfaces with <strong>HTML</strong>, <strong>CSS</strong> and <strong>JavaScript</strong>. This portfolio you're looking at is a good example of that.",
    aboutP2:
      "My interest in technology started by playing video games and wondering how they were made. That curiosity led me to study <strong>Software Engineering</strong> — which I'm still currently pursuing — and that's where I discovered my true passion: <strong>web development</strong>, building interfaces that people use, enjoy, and find useful in their everyday lives.",
    aboutP3:
      "I'm constantly learning, combining what I study at institute with my own projects, with a clear goal: becoming a <strong>Full Stack developer</strong> and building complete products from start to finish. Every project I do brings me closer to that.",
    aboutP4:
      "In my free time, I enjoy playing sports, listening to music, going to church, and spending time with my family. That balance is what keeps me energized to keep creating.",

    techTitle: "Technologies",
    toolsTitle: "Tools",
    projectsTitle: "Projects",

    proj1Title: "ImgTool — Image Compressor ↗",
    proj1Desc:
      "Free, unlimited image compressor and converter, no watermarks or sign-up required — everything runs in the browser.",

    proj2Title: "JM QR — QR Code Generator ↗",
    proj2Desc:
      "Built a free, unlimited QR code generator to avoid the limits and watermarks of paid tools. Supports custom colors, logo, and export in PNG, SVG and PDF.",

    proj3Title: "Curymarka SAC — Corporate Website Proposal ↗",
    proj3Desc:
      "Built a corporate website proposal for a real company in electromechanical maintenance and medical oxygen supply that currently has no web presence. Includes a working contact form, scroll animations and full responsive design.",

    proj4Title: "MAISON YHON — E-commerce Landing ↗",
    proj4Desc:
      "Built a landing page for a fictional niche perfume brand, with filterable catalog, persistent shopping cart and automatic WhatsApp checkout, no backend required.",

    projSoonTitle: "Coming soon... ⏳",
    projSoonDesc: "A new amazing project is on its way. Stay tuned!",
    projSoonTag1: "Upcoming",
    projSoonTag2: "New",
    projSoonTag3: "In progress",
    projectsFooter: "✦ More projects coming very soon...",

    temas: {
      original: "Original",
      green: "Emerald Slate",
      purple: "Minimal Purple",
    },
  },
};

/* ============================================================
   2. IDIOMA — boton, persistencia y aplicacion de textos
   ============================================================ */

// Idioma guardado en localStorage (si existe); por defecto ingles
let idiomaActual = localStorage.getItem("idiomaPortafolio") || "en";

const btnIdioma = document.getElementById("lang-btn");

btnIdioma.addEventListener("click", () => {
  idiomaActual = idiomaActual === "es" ? "en" : "es";
  localStorage.setItem("idiomaPortafolio", idiomaActual);
  actualizarBotonIdioma();
  aplicarIdioma(idiomaActual);
});

// Actualiza el texto/bandera del boton segun el idioma actual
function actualizarBotonIdioma() {
  btnIdioma.innerHTML =
    idiomaActual === "es"
      ? '<img src="img/pe.png" alt="ES" width="16" /> ES'
      : '<img src="img/us.png" alt="EN" width="16" /> EN';
}

function aplicarIdioma(idioma) {
  const t = textos[idioma];

  const cargo = document.getElementById("cargo");
  if (cargo) cargo.textContent = t.cargo;

  const desc = document.getElementById("descripcion");
  if (desc) desc.textContent = t.descripcion;

  const navAbout = document.querySelector("a[href='#about']");
  if (navAbout) navAbout.textContent = t.navAbout;

  const navTech = document.querySelector("a[href='#technologies']");
  if (navTech) navTech.textContent = t.navTech;

  const navProjects = document.querySelector("a[href='#projects']");
  if (navProjects) navProjects.textContent = t.navProjects;

  const aboutTitle = document.querySelector("#about h3");
  if (aboutTitle) aboutTitle.textContent = t.aboutTitle;

  const parrafos = document.querySelectorAll("#about p");
  if (parrafos[0]) parrafos[0].innerHTML = t.aboutP1;
  if (parrafos[1]) parrafos[1].innerHTML = t.aboutP2;
  if (parrafos[2]) parrafos[2].innerHTML = t.aboutP3;
  if (parrafos[3]) parrafos[3].innerHTML = t.aboutP4;

  const techTitle = document.querySelector("#technologies h3");
  if (techTitle) techTitle.textContent = t.techTitle;

  const toolsTitle = document.querySelector("#tools-title");
  if (toolsTitle) toolsTitle.textContent = t.toolsTitle;

  const projectsTitle = document.querySelector("#projects h3");
  if (projectsTitle) projectsTitle.textContent = t.projectsTitle;

  // Traduce las 4 tarjetas de proyecto (requiere los IDs del HTML)
  const proyectos = [
    { title: "#proj1-title", desc: "#proj1-desc", key: "proj1" },
    { title: "#proj2-title", desc: "#proj2-desc", key: "proj2" },
    { title: "#proj3-title", desc: "#proj3-desc", key: "proj3" },
    { title: "#proj4-title", desc: "#proj4-desc", key: "proj4" },
  ];

  proyectos.forEach(({ title, desc, key }) => {
    const elTitulo = document.querySelector(title);
    const elDesc = document.querySelector(desc);
    if (elTitulo) elTitulo.textContent = t[`${key}Title`];
    if (elDesc) elDesc.textContent = t[`${key}Desc`];
  });

  // Traduce la tarjeta "Proximamente" y el banner final
  const soonTitle = document.querySelector("#proj-soon-title");
  if (soonTitle) soonTitle.textContent = t.projSoonTitle;

  const soonDesc = document.querySelector("#proj-soon-desc");
  if (soonDesc) soonDesc.textContent = t.projSoonDesc;

  const soonTag1 = document.querySelector("#proj-soon-tag1");
  if (soonTag1) soonTag1.textContent = t.projSoonTag1;

  const soonTag2 = document.querySelector("#proj-soon-tag2");
  if (soonTag2) soonTag2.textContent = t.projSoonTag2;

  const soonTag3 = document.querySelector("#proj-soon-tag3");
  if (soonTag3) soonTag3.textContent = t.projSoonTag3;

  const projectsFooter = document.querySelector("#projects-footer");
  if (projectsFooter) projectsFooter.textContent = t.projectsFooter;

  // Traduce los nombres de los temas dentro del desplegable
  const opcionesTema = document.querySelectorAll("#theme-menu li");
  opcionesTema.forEach((li) => {
    const tema = li.getAttribute("data-theme");
    const nombreSpan = li.querySelector(".theme-name");
    if (nombreSpan && t.temas[tema]) {
      nombreSpan.textContent = t.temas[tema];
    }
  });
}

// Aplica el idioma inicial (guardado o Ingles por defecto) al cargar
actualizarBotonIdioma();
aplicarIdioma(idiomaActual);

/* ============================================================
   3. EFECTO LUZ CURSOR (fijo en el original, dinamico en los demas temas)
   ============================================================ */
let ultimoMouseX = window.innerWidth / 2;
let ultimoMouseY = window.innerHeight / 2;

function actualizarFondoCursor() {
  const x = ultimoMouseX;
  const y = ultimoMouseY;

  const esOriginal = document.body.classList.contains("theme-original");

  if (esOriginal) {
    const colorFondo = getComputedStyle(document.body)
      .getPropertyValue("--color-bg")
      .trim();

    document.body.style.background = `
      radial-gradient(
        600px at ${x}px ${y}px,
        rgba(29, 78, 216, 0.15),
        transparent 80%
      ),
      ${colorFondo}
    `;
  } else {
    const estilos = getComputedStyle(document.body);
    const colorAcento = estilos.getPropertyValue("--color-accent").trim();
    const colorFondo = estilos.getPropertyValue("--color-bg").trim();

    document.body.style.background = `
      radial-gradient(
        600px at ${x}px ${y}px,
        ${colorAcento}26,
        transparent 80%
      ),
      ${colorFondo}
    `;
  }
}

document.addEventListener("mousemove", (e) => {
  ultimoMouseX = e.clientX + window.scrollX;
  ultimoMouseY = e.clientY + window.scrollY;
  actualizarFondoCursor();
});

document.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  if (!touch) return;
  ultimoMouseX = touch.clientX + window.scrollX;
  ultimoMouseY = touch.clientY + window.scrollY;
  actualizarFondoCursor();
});

document.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  if (!touch) return;
  ultimoMouseX = touch.clientX + window.scrollX;
  ultimoMouseY = touch.clientY + window.scrollY;
  actualizarFondoCursor();
});

/* ============================================================
   4. SELECTOR DE ESTILO (Theme Switcher)
   ============================================================ */
const themeSwitcher = document.getElementById("theme-switcher");
const themeMenu = document.getElementById("theme-menu");
const themeOverlay = document.getElementById("theme-overlay");

if (themeSwitcher && themeMenu && themeOverlay) {
  themeMenu.querySelectorAll("li").forEach((opcion) => {
    opcion.addEventListener("click", () => {
      const tema = opcion.getAttribute("data-theme");

      document.body.classList.remove(
        "theme-original",
        "theme-green",
        "theme-purple",
      );
      document.body.classList.add(`theme-${tema}`);
      localStorage.setItem("temaPortafolio", tema);

      actualizarFondoCursor();

      themeOverlay.classList.add("activo");
      setTimeout(() => {
        themeOverlay.classList.remove("activo");
      }, 200);

      themeSwitcher.removeAttribute("open");
    });
  });

  const temaGuardado = localStorage.getItem("temaPortafolio") || "original";
  document.body.classList.add(`theme-${temaGuardado}`);

  document.addEventListener("click", (e) => {
    if (!themeSwitcher.contains(e.target)) {
      themeSwitcher.removeAttribute("open");
    }
  });
}

actualizarFondoCursor();

/* ============================================================
   5. SCROLL SUAVE PERSONALIZADO (natural, tipo nativo)
   ============================================================ */
function scrollSuaveA(destino) {
  const inicio = window.scrollY;
  const distancia = destino - inicio;

  const duracion = Math.min(Math.max(Math.abs(distancia) * 0.5, 300), 600);

  let tiempoInicio = null;

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function paso(timestamp) {
    if (!tiempoInicio) tiempoInicio = timestamp;
    const tiempoTranscurrido = timestamp - tiempoInicio;
    const progreso = Math.min(tiempoTranscurrido / duracion, 1);
    const progresoSuave = easeOutQuart(progreso);

    window.scrollTo(0, inicio + distancia * progresoSuave);

    if (tiempoTranscurrido < duracion) {
      requestAnimationFrame(paso);
    }
  }

  requestAnimationFrame(paso);
}

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href").replace("#", "");

    if (id === "about") {
      scrollSuaveA(0);
      return;
    }

    const seccion = document.getElementById(id);
    if (!seccion) return;

    let offset = 0;
    if (id === "technologies") offset = -180;
    if (id === "projects") offset = 50;

    const destino =
      seccion.getBoundingClientRect().top + window.scrollY + offset;
    scrollSuaveA(destino);
  });
});

/* ============================================================
   6. NAV ACTIVO AL HACER SCROLL
   ============================================================ */
const enlaces = document.querySelectorAll("nav a");
const secciones = document.querySelectorAll("main section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        enlaces.forEach((a) => a.classList.remove("active"));
        const id = entry.target.getAttribute("id");
        const enlaceActivo = document.querySelector(`nav a[href="#${id}"]`);
        if (enlaceActivo) enlaceActivo.classList.add("active");
      }
    });
  },
  {
    threshold: 0,
    rootMargin: "-50% 0px -50% 0px",
  },
);

secciones.forEach((seccion) => observer.observe(seccion));

/* ============================================================
   7. BOTON DE GMAIL
   ============================================================ */
const gmailLink = document.getElementById("gmail-link");

if (gmailLink) {
  const destinatario = "jhoshefdev@gmail.com";
  const asunto = "Contacto desde tu portafolio";
  const cuerpo =
    "Hola Jhoshef, vi tu portafolio y me gustaría contactarte para...";

  gmailLink.href = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
}
