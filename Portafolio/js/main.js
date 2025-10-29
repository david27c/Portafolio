// ===== MODO CLARO / OSCURO =====
const btnModo = document.getElementById("modo");
const body = document.body;

btnModo.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  
  if (body.classList.contains("dark-mode")) {
    btnModo.textContent = "☀️ Claro";
  } else {
    btnModo.textContent = "🌙 Oscuro";
  }
});

// ===== IDIOMA ESPAÑOL / INGLÉS =====
const btnES = document.getElementById("es");
const btnEN = document.getElementById("en");

// Diccionario de textos (puedes expandirlo con todas tus secciones)
const textos = {
  es: {
    logo: "Mi Portafolio",
    inicio: "Inicio",
    sobre: "Sobre mí",
    contacto: "Contacto",
    titulo_inicio: "¡Hola! Soy David Ernesto Soto Cedillos",
    lema: "Desarrollador en constante aprendizaje."
  },
  en: {
    logo: "My Portfolio",
    inicio: "Home",
    sobre: "About Me",
    contacto: "Contact",
    titulo_inicio: "Hi! I’m David Ernesto Soto Cedillos",
    lema: "Developer in constant learning."
  }
};

// Función para cambiar idioma
function cambiarIdioma(lang) {
  document.querySelector(".logo").textContent = textos[lang].logo;
  
  const enlaces = document.querySelectorAll(".navbar nav ul li a");
  enlaces[0].textContent = textos[lang].inicio;
  enlaces[1].textContent = textos[lang].sobre;
  enlaces[2].textContent = textos[lang].contacto;
  
  document.getElementById("titulo-inicio").textContent = textos[lang].titulo_inicio;
  document.getElementById("lema").textContent = textos[lang].lema;
}

// Eventos de idioma
btnES.addEventListener("click", () => cambiarIdioma("es"));
btnEN.addEventListener("click", () => cambiarIdioma("en"));

// ===== CARGA INICIAL =====
cambiarIdioma("es"); // Empieza en español