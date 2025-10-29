// ===========================================
// 1. MODO CLARO / OSCURO
// ===========================================
const btnModo = document.getElementById("modo");
const body = document.body;

btnModo.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  
  // Cambiar el ícono/texto del botón
  if (body.classList.contains("dark-mode")) {
    btnModo.textContent = "☀️ Claro";
  } else {
    btnModo.textContent = "🌙 Oscuro";
  }
});


// ===========================================
// 2. IDIOMA ESPAÑOL / INGLÉS
// ===========================================
const btnES = document.getElementById("es");
const btnEN = document.getElementById("en");

// Diccionario de textos (Incluye todas las secciones y el nuevo contenido)
const textos = {
  es: {
    // Navbar
    inicio: "Inicio",
    sobre: "Sobre mí",
    proyectos: "Proyectos",
    contacto: "Contacto",
    
    // Sección Inicio
    titulo_inicio: "¡Hola! Soy David Ernesto Soto Cedillos",
    lema_strong: "Frase personal:",
    lema_text: "Desarrollador en constante aprendizaje.",
    
    // Sección Sobre Mí
    titulo_sobre: "Sobre mí",
    p_resumen: "Soy estudiante de Técnico en Ingeniería en Sistemas y Redes Informáticas con interés en el desarrollo web, bases de datos y diseño de interfaces. Tengo conocimientos básicos en tecnologías como HTML, CSS, JavaScript y MySQL. Me gusta aprender nuevas herramientas y aplicar lo que aprendo en pequeños proyectos académicos y personales para seguir mejorando mis habilidades.",
    
    titulo_area: "Área de Desarrollo de Interés",
    p_area: "Mi principal interés se centra en la parte visual y de interacción de las aplicaciones, enfocándome en el diseño y la experiencia del usuario (UX/UI). Estoy muy motivado a seguir creciendo en esta área.",
    
    titulo_frontback: "Front-End o Back-End",
    p_frontback: "Me inclino más por el Front-End (interfaces de usuario, interactividad, maquetación). Tengo conocimientos básicos en C# y en el manejo de bases de datos, lo que me permite comprender la lógica detrás de las aplicaciones y colaborar en tareas sencillas de Back-End. Disfruto trabajar en la parte visual de los proyectos: diseñar interfaces, crear maquetaciones limpias e interactivas y asegurarme de que la experiencia del usuario sea atractiva y funcional. Estoy motivado a seguir aprendiendo y desarrollando mis habilidades en ambos ámbitos, aunque por el momento me inclino más a trabajar y colaborar como Back-End.",
    
    titulo_habilidades: "Habilidades",
    habilidad1: "Conocimientos básicos en HTML, CSS, JavaScript y C#",
    habilidad2: "Manejo inicial de bases de datos con MariaDB, PostgreSQL y XAMPP",
    habilidad3: "Uso de Git y GitHub para control de versiones",
    habilidad4: "Trabajo en equipo, organización y comunicación efectiva",
    
    titulo_valores: "Valores profesionales",
    p_valores: "Responsabilidad, compromiso, honestidad y una fuerte disposición para aprender y recibir retroalimentación.",
    
    titulo_intereses: "Intereses",
    p_intereses: "Desarrollo de software, diseño de interfaces, tecnologías web y proyectos colaborativos.",
    btn_cv: "📄 Descargar CV",
    
    // Sección Contacto
    titulo_contacto: "Contacto"
  },
  
  en: {
    // Navbar
    inicio: "Home",
    sobre: "About Me",
    proyectos: "Projects",
    contacto: "Contact",
    
    // Sección Inicio
    titulo_inicio: "Hi! I’m David Ernesto Soto Cedillos",
    lema_strong: "Personal Motto:",
    lema_text: "Developer in constant learning.",
    
    // Sección Sobre Mí
    titulo_sobre: "About Me",
    p_resumen: "I am a student of Engineering in Computer Systems and Networks with an interest in web development, databases and interface design. I have basic knowledge of technologies such as HTML, CSS, JavaScript and MySQL. I like to learn new tools and apply what I learn in small academic and personal projects to further improve my skills.",
    titulo_area: "Area of Development Interest",
    p_area: "My primary focus is on the visual and interaction aspects of applications, specializing in design and user experience (UX/UI). I am highly motivated to continue growing in this area.",
    
    titulo_frontback: "Front-End or Back-End",
    p_frontback: "I lean more toward the Front-End (user interfaces, interactivity, layout). I have basic knowledge of C# and database management, which allows me to understand the logic behind applications and collaborate on simple Back-End tasks. I enjoy working on the visual aspects of projects: designing interfaces, creating clean and interactive layouts, and ensuring that the user experience is attractive and functional. I am motivated to continue learning and developing my skills in both areas, although for the moment I lean more toward working and collaborating as a Back-End developer.",
    
    titulo_habilidades: "Skills",
    habilidad1: "Basic knowledge of HTML, CSS, JavaScript, and C#",
    habilidad2: "Initial experience with databases using MariaDB, PostgreSQL, and XAMPP",
    habilidad3: "Use of Git and GitHub for version control",
    habilidad4: "Teamwork, organization, and effective communication",
    
    titulo_valores: "Professional Values",
    p_valores: "Responsibility, commitment, honesty, and a strong willingness to learn and receive feedback.",
    
    titulo_intereses: "Interests",
    p_intereses: "Software development, interface design, web technologies, and collaborative projects.",
    btn_cv: "📄 Download CV",
    
    // Sección Contacto
    titulo_contacto: "Contact"
  }
};

// Función para aplicar el cambio de idioma
function cambiarIdioma(lang) {
  
  // 1. Navbar Links (Necesita un nuevo índice)
  const enlaces = document.querySelectorAll(".navbar nav ul li a");
  enlaces[0].textContent = textos[lang].inicio;
  enlaces[1].textContent = textos[lang].sobre;
  enlaces[2].textContent = textos[lang].proyectos; // NUEVO ENLACE
  enlaces[3].textContent = textos[lang].contacto;
  
  // 2. Sección Inicio
  document.getElementById("titulo-inicio").textContent = textos[lang].titulo_inicio;
  // El lema requiere dos partes (strong y texto)
  const lemaElement = document.getElementById("lema");
  lemaElement.innerHTML = `<strong>${textos[lang].lema_strong}</strong> ${textos[lang].lema_text}`;
  
  // 3. Sección Sobre Mí
  const sobreMi = document.getElementById("sobre-mi");
  sobreMi.querySelector(".subtitulo").textContent = textos[lang].titulo_sobre;
  
  // Párrafos y Subtítulos
  sobreMi.querySelector("p.texto").textContent = textos[lang].p_resumen;
  
  // Área de Desarrollo
  sobreMi.querySelectorAll(".subtitulo2")[0].textContent = textos[lang].titulo_area;
  sobreMi.querySelectorAll("p.texto")[1].textContent = textos[lang].p_area;
  
  // Front/Back
  sobreMi.querySelectorAll(".subtitulo2")[1].textContent = textos[lang].titulo_frontback;
  sobreMi.querySelectorAll("p.texto")[2].textContent = textos[lang].p_frontback;
  
  // Habilidades (Asumiendo que el índice es constante)
  sobreMi.querySelectorAll(".subtitulo2")[2].textContent = textos[lang].titulo_habilidades;
  const habilidades = sobreMi.querySelectorAll(".lista li");
  habilidades[0].textContent = textos[lang].habilidad1;
  habilidades[1].textContent = textos[lang].habilidad2;
  habilidades[2].textContent = textos[lang].habilidad3;
  habilidades[3].textContent = textos[lang].habilidad4;
  
  // Valores
  sobreMi.querySelectorAll(".subtitulo2")[3].textContent = textos[lang].titulo_valores;
  sobreMi.querySelectorAll("p.texto")[3].textContent = textos[lang].p_valores;

  // Intereses
  sobreMi.querySelectorAll(".subtitulo2")[4].textContent = textos[lang].titulo_intereses;
  sobreMi.querySelectorAll("p.texto")[4].textContent = textos[lang].p_intereses;

  // Botón CV
  document.querySelector(".btn-cv").textContent = textos[lang].btn_cv;
  
  // 4. Sección Contacto
  document.getElementById("contacto").querySelector(".subtitulo").textContent = textos[lang].titulo_contacto;
}

// Event Listeners para los botones de idioma
btnES.addEventListener("click", () => cambiarIdioma("es"));
btnEN.addEventListener("click", () => cambiarIdioma("en"));

// Establecer el idioma inicial al cargar la página (ESPAÑOL)
document.addEventListener("DOMContentLoaded", () => {
    cambiarIdioma("es");
});