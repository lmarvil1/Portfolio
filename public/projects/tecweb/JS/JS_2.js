/*EN ESTE JS CODIFICAMOS EL JUEGO DE LA PÁGINA DE BLOG. EVENTOS DE ARRASTRE
Creamos dos variables. 
La primera contiene todos los elementos que tienen la clase .arrastre
La segunda variable contiene los elementos que tienene la clase .soltar*/

var elemsArrastre = document.querySelectorAll(".arrastre")
var elemsSoltar = document.querySelectorAll(".soltar")

/*Para cada uno de los elementos de arrastre en la variable elemArrastre, queremos que cada vez que se arrastre se ejecute una funcion*/
elemsArrastre.forEach( item => {item.addEventListener("dragstart", inicio);});

elemsSoltar.forEach( item => {
    item.addEventListener("dragenter", dentro); /*Cuando un elemento arrastre se suelta y es la opcion correcta*/
    item.addEventListener("dragover", dudando); /*Cuando un elemento arrastre se encuentra encima de un elemento soltar*/
    item.addEventListener("dragleave", fuera); /*Cuando un elemento arrastre sale del rango del elemento soltar*/
    item.addEventListener("drop", soltar); /*Cuando un elemento arrastre se suelta en un elemento soltar y no es la opcion correcta*/
});


/*Ahora definimos las funciones que nos permiten hacer el juego*/
function inicio(event) {
    event.dataTransfer.setData("text", event.target.id); /*Indicamos qué datos se están arrastrando del elemento. En este caso es el id,porque queremos poder añadirselo a su respectivo elemento soltar*/
}

/*La funcion que permite soltar elementos en su espacio correcto*/
function soltar(accion) {
    accion.preventDefault();
    accion.target.classList.remove("soltar-hover"); /*Quitamos la clase soltar-hover para que el elem soltar vuelva a su estilo inicial*/

    var datosArrastre = accion.dataTransfer.getData("text"); /*Cogemos los datos del elemento que se esta arrastrando*/
    var datosSoltar = accion.target.getAttribute("data-arrastre-id"); /*Cogemos el valor que tiene el elemento soltar en su atributo data-arrastre-id. Este elem soltar es sobre el q esta el elem arrastrar con el que estamos interactuando*/
    var verdadero = datosArrastre === datosSoltar; 

    if (verdadero) { /*Si los datos de las dos variables anteriores son del mismo tipo y tienen el mismo valor, es decir, la variable verdadero adquiere valor True, se ejecutan los siguientes comandos*/
        var elemArrastre = document.getElementById(datosArrastre); /*Se coge el elemento de arrastre que habia sido seleccionado*/
        accion.target.classList.add("soltado"); /*A nuestro elemento soltar se le añade el estilo soltado. Ya no se puede interactuar con el porque ya tiene su opcion correcta*/
        elemArrastre.classList.add("arrastrado"); /*A nuestro elemento arrastre se le añade el estilo arrastrado. Con esto impedimos que se pueda volver a interactuar con el (ya se ha conseguido la opcion correcta)*/
        elemArrastre.setAttribute("draggable","false"); /*Impedimos que el elemento arrastre que ya esta en su posicion pueda volver a arrastrarse*/
        this.innerHTML = String(this.getAttribute("id")); /*En nuestro elemento soltar, el valor HTML cambia al de su id, que contiene el nombre de la respuesta correcta seleccionada*/
        this.classList.add("finalizado") /*Se añade la clase finalizado a el elemento soltar para que la funcion cont() pueda sumar 1 al contador.*/
        cont() /*Con esta funcion llevamos un contador, que nos permite saber cuantas respuestas correctas tenemos. Cuando llegue a 6 quiere decir que el juego ha finalizado.*/
        restart() /*En caso de que el contador no tenga el valor de 6, no pasa nada. Si si tiene el valor de 6, entonces aparece el boton de restart*/
    }
}

/*Cuando tenemos un elemento de clase arrastrar por encima (hover) de otro en el que podemos soltarlo. Se activa la clase soltar-hover --> aumenta el tamaño y cambia colores*/
function dentro(accion) {
    if(!accion.target.classList.contains("soltado")) {
        accion.target.classList.add("soltar-hover");
    }
}

/*Con esta funcion quitamos el estilo soltar-hover de los elementos de clase soltar. Gracias a esto cuando un elemento deja de estar sobre otro, vuelve a su estado inicial*/
function fuera(accion) {
    if(!accion.target.classList.contains("soltado")) {
        accion.target.classList.remove("soltar-hover")
    }
}

/*Cuando uno de los objetos de clase arrastre está encima de alguno de los objetos de clase soltar*/
function dudando(accion) {
    if(!accion.target.classList.contains("soltado")) {
        accion.preventDefault();
    }
}

/*Hacemos una funcion para poder llevar la cuenta de los aciertos*/
var contador = 0
function cont() {
    contador +=1
}

/*Para poder reiniciar el juego*/
function restart() {
    if(contador==6) {
        var cambio1 = document.querySelector(".arrastre-elem"); /*Con estas lineas la opacidad de los elementos disminuye para poder dejar en primer plano el boton de reinicio*/
        var cambio2 = document.querySelector(".soltar-elem");
        cambio1.style.opacity = '30%';
        cambio1.style.transition = "opacity 0.3s ease-in";
        cambio2.style.opacity = '30%';
        cambio2.style.transition = "opacity 0.3s ease-in";
        var boton = document.createElement("button"); /*Se crea un boton de reinicio para poder volver a jugar. En las siguientes lineas se le establecen los valores se atributos y el estilo*/
        boton.setAttribute("id","boton-reinicio");
        boton.innerHTML = "Reiniciar";
        boton.onclick = function recargar() {window.location.reload();}; /*Permite reiniciar todos los parametros para volver a jugar*/
        document.querySelector(".juego").appendChild(boton); /*Se añade el boton al contenedor "juego" para que sea visible*/
    }
}

var propiedades = [];

function enviarFormulario() {
  var nombre = document.getElementById("nombre").value;
  var apellidos = document.getElementById("apellidos").value;
  var email = document.getElementById("mail").value;
  var telefono = document.getElementById("phone").value;
  var mensaje = document.getElementById("msg").value;
  var ciudad = document.getElementById("ciudad").value;

  // Obtener la operación seleccionada
  var operacion;
  var operacionRadios = document.getElementsByName("tipo_consulta");
  for (var i = 0; i < operacionRadios.length; i++) {
    if (operacionRadios[i].checked) {
      operacion = operacionRadios[i].value;
      break;
    }
  }


  // Crear objeto de propiedad
  var nuevaPropiedad = {
    nombre: nombre,
    apellidos: apellidos,
    email: email,
    telefono: telefono,
    mensaje: mensaje,
    ciudad: ciudad,
    tipoConsulta: operacion,
  };

// Enviar datos al servidor utilizando fetch
fetch('http://127.0.0.1:8081', {
    // Configuración de la solicitud
    method: 'POST',  // Utilizar el método POST para enviar datos al servidor
    headers: {
      'Content-Type': 'application/json',  // Indicar que los datos se enviarán en formato JSON
    },
    body: JSON.stringify(nuevaPropiedad),  // Convertir el objeto a una cadena JSON y enviarlo en el cuerpo de la solicitud
  })
  // Manejar la respuesta del servidor
  .then(response => response.json())  // Convertir la respuesta del servidor a formato JSON
  .then(data => {
    // Acciones a realizar después de recibir una respuesta exitosa del servidor
    console.log('Respuesta del servidor:', data);  // Mostrar la respuesta del servidor en la consola
    // Puedes realizar acciones adicionales según la respuesta del servidor
    mostrarVentanaEmergente("Mensaje enviado al servidor");  // Mostrar un mensaje al usuario
  })
  // Manejar errores en la solicitud al servidor
  .catch(error => {
    // Acciones a realizar si hay un error en la solicitud al servidor
    console.error('Error al enviar los datos al servidor:', error);  // Mostrar el error en la consola
    // Puedes realizar acciones adicionales según el tipo de error
  });


  // Agregar objeto al vector
  propiedades.push(nuevaPropiedad);

  // Mostrar ventana emergente
  mostrarVentanaEmergente("Mensaje enviado");

  // Mostrar resultados al usuario
  mostrarResultados();
  

}

function mostrarVentanaEmergente(mensaje) {
  // Utilizar la función 'alert' para mostrar una ventana emergente
  alert(mensaje);
}

function mostrarResultados() {
  var resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = "<p>Hemos recibido su mensaje con la siguiente información:</p>";

  // Iterar sobre el vector de propiedades y mostrar información
  for (var i = 0; i < propiedades.length; i++) {
    resultadosDiv.innerHTML += "<p><strong>Nombre:</strong> " + propiedades[i].nombre + " " + propiedades[i].apellidos + "<br>";
    resultadosDiv.innerHTML += "<strong>Email:</strong> " + propiedades[i].email + "<br>";
    resultadosDiv.innerHTML += "<strong>Teléfono:</strong> " + propiedades[i].telefono + "<br>";
    resultadosDiv.innerHTML += "<strong>Ciudad:</strong> " + propiedades[i].ciudad + "<br>";
    resultadosDiv.innerHTML += "<strong>Tipo de consulta:</strong> " + propiedades[i].tipoConsulta + "<br>";
    resultadosDiv.innerHTML += "<strong>Mensaje:</strong> " + propiedades[i].mensaje + "<br>";

  }

  // Mensaje adicional después de mostrar todas las propiedades
  resultadosDiv.innerHTML += "<p>Nos pondremos en contacto con usted lo antes posible.</p>";
}

