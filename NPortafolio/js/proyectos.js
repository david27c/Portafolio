// ===========================================
// 1. MODO CLARO / OSCURO (Copia de main.js)
// ===========================================
const btnModo = document.getElementById("modo");
const body = document.body;

btnModo.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  
  // Cambiar el ícono/texto del botón
  if (body.classList.contains("dark-mode")) {
    btnModo.textContent = "☀️ Claro";
    // Guardar preferencia
    localStorage.setItem('theme', 'dark');
  } else {
    btnModo.textContent = "🌙 Oscuro";
    // Guardar preferencia
    localStorage.setItem('theme', 'light');
  }
});

// Aplicar el tema guardado al cargar
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        btnModo.textContent = "☀️ Claro";
    }
});


// ===========================================
// 2. IDIOMA ESPAÑOL / INGLÉS
// ===========================================
const btnES = document.getElementById("es");
const btnEN = document.getElementById("en");

// Diccionario de textos Específico para Proyectos
const textosProyectos = {
  es: {
    // Navbar
    inicio: "Inicio",
    sobre: "Sobre mí",
    proyectos: "Proyectos",
    contacto: "Contacto",
    
    // Títulos principales
    titulo_proyectos: "Proyectos de Clase",
    subtitulo_proyectos: "Estos son algunos de los proyectos principales que he desarrollado durante mi formación en clase.",
    btn_ver_mas: "Ver Más",
    desc_completa_titulo: "Descripción Completa",
    repo: "Ver Repositorio en GitHub",
    
    // Proyecto 1: Adopta Un Amigo
    p1_nombre: "Adopta Un Amigo",
    p1_desc_corta: "Plataforma web para conectar animales sin hogar con adoptantes, enfocada en el diseño de interfaz y flujo de usuario.",
    p1_desc_larga: "La aplicación fue concebida como una plataforma web para facilitar la conexión entre animales en busca de un hogar y potenciales adoptantes. Se centró en la correcta presentación de los perfiles de los animales y la estructuración del flujo de usuario para el proceso de solicitud de adopción. Este proyecto fue la culminación del aprendizaje de Programación I, sirviendo como una introducción al desarrollo web con C# y ASP.NET. Aunque el curso se centró en la Programación Orientada a Objetos (POO), mi contribución específica en este proyecto se enfocó en el diseño.",
    p1_rol: "Rol Principal: Diseñador UX/UI (Experiencia e Interfaz de Usuario)",
    
    // Proyecto 2: Denuncia Ciudadana
    p2_nombre: "Denuncia Ciudadana",
    p2_desc_corta: "Aplicación móvil para simular reportes ciudadanos (fallas en infraestructura, servicios) con evidencia multimedia y geolocalización.",
    p2_desc_larga: "Este proyecto fue desarrollado como una tarea académica clave para demostrar habilidades de desarrollo móvil en Android y Java. Se centró en la creación de un sistema de reporte ciudadano para problemas comunitarios, como fallas en infraestructura o servicios, enfatizando la lógica funcional y el manejo de datos para simular procesos de reporte en tiempo real. La aplicación móvil fue concebida para simular un canal de comunicación eficiente y accesible entre la ciudadanía y las autoridades. El diseño funcional permite a los usuarios enviar reportes detallados de problemas (baches, fugas de agua, etc.) acompañados de evidencia multimedia y geolocalización precisa. El objetivo académico fue integrar módulos complejos como la autenticación de usuarios (Login/Registro), la gestión de datos persistentes y la conectividad mediante APIs para simular el envío y seguimiento del estado de los reportes, validando así la capacidad de construir una solución móvil completa.",
    p2_rol: "Rol Principal Desempeñado: Desarrollador Full Stack Móvil (Front-end y Back-end)",
    
    // Proyecto 3: Artesanias Conchita
    p3_nombre: "Artesanias Conchita",
    p3_desc_corta: "Sitio web público de cinco páginas clave, destacando diseño adaptable, Modo Oscuro gestionado por CSS Variables, y un Carrusel de Imágenes con JavaScript.",
    p3_desc_larga: "Este proyecto fue desarrollado en colaboración en el marco de la materia Ingeniería en Sistemas II. El objetivo central fue la implementación del sitio web público de la tienda, demostrando la capacidad de construir una interfaz de usuario completa, estructurada, adaptable y accesible, cumpliendo con los estándares de diseño y maquetación web. El sitio web Artesanías Conchita es una plataforma informativa de cinco páginas clave (Inicio, Productos, Historia, Contacto y Preguntas Frecuentes). Fue construido utilizando HTML5 semántico y un avanzado estilizado con CSS3. El diseño es totalmente adaptable, permitiendo que el contenido se organice perfectamente en cualquier tamaño de pantalla. Destaca por su accesibilidad, implementando un Modo Oscuro global gestionado eficientemente mediante Variables CSS (evidenciadas en estilos.css), y la interactividad de un Carrusel de Imágenes automático desarrollado con JavaScript para la página de inicio.",
    p3_rol: "Rol Desempeñado: Co-desarrollador Front-end y Arquitecto del Diseño",
  },
  
  en: {
    // Navbar
    inicio: "Home",
    sobre: "About Me",
    proyectos: "Projects",
    contacto: "Contact",
    
    // Títulos principales
    titulo_proyectos: "Class Projects",
    subtitulo_proyectos: "These are some of the main projects I have developed during my training in class.",
    btn_ver_mas: "View More",
    desc_completa_titulo: "Full Description",
    repo: "View Repository on GitHub",
    
    // Proyecto 1: Adopt A Friend
    p1_nombre: "Adopt A Friend",
    p1_desc_corta: "Web platform to connect homeless animals with adopters, focused on interface design and user flow.",
    p1_desc_larga: "The application was conceived as a web platform to facilitate the connection between animals seeking a home and potential adopters. It focused on the correct presentation of animal profiles and the structuring of the user flow for the adoption application process. This project was the culmination of learning Programming I, serving as an introduction to web development with C# and ASP.NET. Although the course focused on Object-Oriented Programming (OOP), my specific contribution in this project focused on design.",
    p1_rol: "Main Role: UX/UI Designer (User Experience and Interface)",
    
    // Proyecto 2: Citizen Complaint
    p2_nombre: "Citizen Complaint",
    p2_desc_corta: "Mobile application to simulate citizen reports (infrastructure failures, services) with multimedia evidence and geolocation.",
    p2_desc_larga: "This project was developed as a key academic task to demonstrate mobile development skills in Android and Java. It focused on creating a citizen reporting system for community problems, such as infrastructure failures or services, emphasizing functional logic and data handling to simulate real-time reporting processes. The mobile application was designed to simulate an efficient and accessible communication channel between citizens and authorities. The functional design allows users to send detailed problem reports (potholes, water leaks, etc.) accompanied by multimedia evidence and precise geolocation. The academic objective was to integrate complex modules such as user authentication (Login/Registration), persistent data management, and connectivity through APIs to simulate the submission and status tracking of reports, thus validating the ability to build a complete mobile solution.",
    p2_rol: "Main Role Played: Full Stack Mobile Developer (Front-end and Back-end)",
    
    // Proyecto 3: Conchita Handicrafts
    p3_nombre: "Conchita Handicrafts",
    p3_desc_corta: "Public website with five key pages, highlighting adaptive design, Dark Mode managed by CSS Variables, and an Image Carousel with JavaScript.",
    p3_desc_larga: "This project was developed in collaboration within the framework of the Systems Engineering II course. The central objective was the implementation of the public website for the store, demonstrating the ability to build a complete, structured, adaptive, and accessible user interface, meeting web design and layout standards. The Artesanías Conchita website is an informational platform with five key pages (Home, Products, History, Contact, and Frequently Asked Questions). It was built using semantic HTML5 and advanced CSS3 styling. The design is fully adaptive, allowing content to organize perfectly on any screen size. It stands out for its accessibility, implementing a global Dark Mode efficiently managed by CSS Variables (evidenced in estilos.css), and the interactivity of an automatic Image Carousel developed with JavaScript for the home page.",
    p3_rol: "Role Played: Co-Front-end Developer and Design Architect",
  }
};

// Función para aplicar el cambio de idioma
function cambiarIdioma(lang) {
  const t = textosProyectos[lang];
  
  // 1. Navbar Links
  // Nota: Asume que la navegación es la misma que en index.html
  const enlaces = document.querySelectorAll(".navbar nav ul li a");
  enlaces[0].textContent = t.inicio; // index.html#inicio
  enlaces[1].textContent = t.sobre; // index.html#sobre-mi
  enlaces[2].textContent = t.proyectos; // proyectos.html
  enlaces[3].textContent = t.contacto; // index.html#contacto
  
  // 2. Títulos principales
  document.getElementById("titulo-proyectos").textContent = t.titulo_proyectos;
  document.getElementById("subtitulo-proyectos").textContent = t.subtitulo_proyectos;
  
  // 3. Proyectos (P1, P2, P3)
  for (let i = 1; i <= 3; i++) {
    const nombre = t[`p${i}_nombre`];
    
    // Resumen
    document.getElementById(`nombre-p${i}`).textContent = nombre;
    document.getElementById(`desc-corta-p${i}`).textContent = t[`p${i}_desc_corta`];
    document.getElementById(`btn-ver-mas-p${i}`).textContent = t.btn_ver_mas;
    
    // Detalle
    document.getElementById(`nombre-detalle-p${i}`).textContent = nombre;
    document.getElementById(`desc-completa-titulo-p${i}`).textContent = t.desc_completa_titulo;
    // Usamos innerHTML para permitir que el JS inserte el contenido sin escapar comillas o puntos.
    document.getElementById(`desc-completa-p${i}`).innerHTML = t[`p${i}_desc_larga`];
    document.getElementById(`rol-p${i}`).innerHTML = t[`p${i}_rol`];
    document.getElementById(`repo-p${i}`).textContent = t.repo;
  }
}

// Event Listeners para los botones de idioma
btnES.addEventListener("click", () => {
    cambiarIdioma("es");
    // Opcional: guardar la preferencia
    localStorage.setItem('lang', 'es');
});

btnEN.addEventListener("click", () => {
    cambiarIdioma("en");
    // Opcional: guardar la preferencia
    localStorage.setItem('lang', 'en');
});

// Establecer el idioma inicial al cargar la página (o usar la preferencia guardada)
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('lang') || 'es'; // Por defecto es español
    cambiarIdioma(savedLang);
});