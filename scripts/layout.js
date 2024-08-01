document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("prueba");
  var headerLogoImg = document.querySelector(".header-logo-img");
  var headerSocial = document.querySelector(".header-social");

  // Guardar condiciones iniciales
  var initialNavbarStyles = {
    backgroundColor: navbar.style.backgroundColor,
    position: navbar.style.position,
    top: navbar.style.top,
    height: navbar.style.height,
  };

  var initialHeaderLogoImgStyles = {
    width: headerLogoImg.style.width,
    position: headerLogoImg.style.position,
    top: headerLogoImg.style.top,
    left: headerLogoImg.style.left,
    transform: headerLogoImg.style.transform, // Corregido aquí
  };

  var initialHeaderSocialStyles = {
    transform: headerSocial.style.transform,
    top: headerSocial.style.top, // Guardar también el top
  };

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "#FDE9E9"; // Cambiar a color sólido cuando el scroll pase los 50px
      navbar.style.position = "fixed"; // Cambiar posición a fijo después de desplazarse 50px
      navbar.style.top = "0"; // Mantener en la parte superior de la ventana
      navbar.style.height = "100px"; // Cambiar altura a 80px

      if (window.innerWidth <= 425) {
        headerLogoImg.style.transform = "scale(0.4)";
        headerLogoImg.style.top = "17px";
        headerLogoImg.style.left = "-300px";
        headerSocial.style.top = "-78px"; // Cambiado a transform para scale en pantallas menores a 425px
      } else if (window.innerWidth <= 480) {
        headerLogoImg.style.transform = "scale(0.5)";
        headerLogoImg.style.top = "17px";
        headerLogoImg.style.left = "-330px";
      } else if (window.innerWidth <= 770) {
        headerLogoImg.style.transform = "scale(0.7)";
        headerLogoImg.style.top = "-10px";
        headerLogoImg.style.left = "-450px";
        headerSocial.style.top = "-68px"; // Ajustar la posición del header-social 20px más abajo
      } else {
        headerLogoImg.style.transform = "scale(0.7)"; // Cambiado a transform para scale en pantallas mayores a 770px
        headerLogoImg.style.top = "20px";
        headerLogoImg.style.left = "-20px";
        headerSocial.style.top = "15px"; // Restaurar la posición para pantallas mayores a 770px
      }

      headerLogoImg.style.width = "200px"; // Ajustar tamaño del logo
      headerLogoImg.style.position = "relative";
      headerSocial.style.transform = "scale(0.8)"; // Ajustar tamaño de iconos sociales
    } else if (window.scrollY === 0) {
      // Restaurar condiciones iniciales cuando el scroll es 0
      navbar.style.backgroundColor = initialNavbarStyles.backgroundColor;
      navbar.style.position = initialNavbarStyles.position;
      navbar.style.top = initialNavbarStyles.top;
      navbar.style.height = initialNavbarStyles.height;
      headerLogoImg.style.width = initialHeaderLogoImgStyles.width;
      headerLogoImg.style.position = initialHeaderLogoImgStyles.position;
      headerLogoImg.style.top = initialHeaderLogoImgStyles.top;
      headerLogoImg.style.left = initialHeaderLogoImgStyles.left;
      headerLogoImg.style.transform = initialHeaderLogoImgStyles.transform; // Restaurado a transform
      headerSocial.style.transform = initialHeaderSocialStyles.transform;
      headerSocial.style.top = initialHeaderSocialStyles.top; // Restaurar la posición
    }
  });
});

/**
 * BARRA DE NAVEGACION
 */
//seleccionar con el método getElementById la etiqueta correspondiente donde se renderizará la barra de navegación.

const navSelector = document.getElementById("navbar");

//creando una variable options y la modificamos para el footer
const options = [
  {
    title: "",
    linkTo: "",
    opts: [""],
  },
  {
    title: "",
    linkTo: "",
    opts: [""],
  },
  {
    title: "",
    linkTo: "",
    opts: [""],
  },
  {
    title: "",
    linkTo: "",
    opts: [""],
  },
  { title: "", linkTo: "", opts: [""] },
];

/** //Iteracion con un for of
for (let option of options) {
  //crear un elemeto
  let anchor = document.createElement("a");
  //asignarle un nombre de clase
  anchor.className = "nav-a";
  //asignarle un texto
  anchor.textContent = option.title;
  //asignarle un href
  anchor.href = option.linkTo;
  //agregar un hijo
  navSelector.appendChild(anchor);
}
*/

/**
 * PIE DE PAGINA
 */
//seleccionar con el método getElementById la etiqueta correspondiente donde se renderizará el footer.
const footerSelector = document.querySelector("#footer");

//iteracion con un for of
for (let option of options) {
  //crear un elemento
  let anchor = document.createElement("ul");
  //asignarle un nombre de clase
  anchor.className = "footer-ul";
  //agregar un il
  let li = document.createElement("li");
  //asignarle una clase
  li.className = "footer-main-item";
  //crear una etiqueta a
  let a = document.createElement("a");
  //asignarle un nombre de clase
  a.className = "footer-a";
  //asignarle un texto
  a.textContent = option.title;
  //asignarle un href
  a.href = option.linkTo;

  //agregar al li
  li.appendChild(a);
  //agregar a la ul
  anchor.appendChild(li);

  //iteracion con un for of
  for (let opt of option.opts) {
    //crear un li
    let li = document.createElement("li");
    //asignarle una clase
    li.className = "footer-li";
    //crear una etiqueta a
    let a = document.createElement("a");
    //asignarle un nombre de clase
    a.className = "footer-a";
    //asignarle un texto
    a.textContent = opt;
    //agregar al li
    li.appendChild(a);
    //agregar a la ul
    anchor.appendChild(li);
  }

  //agregar un hijo
  footerSelector.appendChild(anchor);
}

// Función para actualizar la visibilidad de los elementos del carrito y "Me gusta"
function actualizarVisibilidadElementos() {
  // Obtener la información del usuario del localStorage y parsearla como un objeto JSON
  var usuarioInfo = JSON.parse(localStorage.getItem("usuarioLogueado"));

  // Obtener elementos de los iconos
  var iconoInicioSesion = document.getElementById("inicio-sesion");
  var iconoUsuario = document.getElementById("usuario");
  var iconoCarrito = document.getElementById("cart");
  var iconoFavorito = document.getElementById("favorito");

  // Si hay información de usuario almacenada en el localStorage, considerar que el usuario ha iniciado sesión
  if (usuarioInfo) {
    iconoInicioSesion.style.display = "none"; // Ocultar botón de inicio de sesión
    iconoUsuario.style.display = "block"; // Mostrar icono de usuario
    iconoCarrito.style.display = "block"; // Mostrar icono de carrito
    iconoFavorito.style.display = "block"; // Mostrar icono de favorito
  } else {
    // Si no hay información de usuario, considerar que el usuario no ha iniciado sesión
    iconoInicioSesion.style.display = "block"; // Mostrar botón de inicio de sesión
    iconoUsuario.style.display = "none"; // Ocultar icono de usuario
    iconoCarrito.style.display = "none"; // Ocultar icono de carrito
    iconoFavorito.style.display = "none"; // Ocultar icono de favorito
  }
}

// Llamar a la función de actualización al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  actualizarVisibilidadElementos();
});
