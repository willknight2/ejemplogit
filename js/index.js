
//agregndo un listener al boton guardar (id="guardar-btn") que esta en el index.html
document.querySelector("#guardar-btn").addEventListener("click", ()=>{
    
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let correo = document.querySelector("#correo-txt").value.trim();
    let telefono = document.querySelector("#telefono-txt").value.trim();

    //creando un objeto en el formato de JavaScript del navegador
    let objeto =  {nombre:nombre, correo:correo, telefono:telefono};

    agregarContacto(objeto);

    //Notificacion de alerta -> Datos Guardados
    Swal.fire("Agregado","Contacto Guardado!!!","success")

    //limpiar el formulario
    document.querySelector("#nombre-txt").value = ""
    document.querySelector("#correo-txt").value = ""
    document.querySelector("#telefono-txt").value = ""


});