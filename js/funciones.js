
// Funcion para agregar contactos
const agregarContacto = (contacto) => {

    let lista = obtenerContactos();
    lista.push(contacto);

    localStorage.setItem("contactos", JSON.stringify(lista));

};

// Funcion para obtener los contactos
const obtenerContactos = (filtro = null)=>{

    let lista = localStorage.getItem("contactos");

    if(lista){

        lista = JSON.parse(lista);
    }
    else {
        lista = [];
    }

    //filtrar la lista para tarer solo cuando el filro esta  en alguna parte
    if (filtro != null){

        //Si esta expresion devuelve "true" o un valor que sea representable como verdadera, el elemento sera considerado en la lista
        // Filter tiene una estructura similar al for each con una expresion lambda
        lista = lista.filter( c=> c.nombre.includes(filtro) || c.correo.includes(filtro) || c.telefono.includes(filtro))
        
        //lista = lista.filter( c=> c.nombre.includes(filtro)) //filtra solo por nombre
    }

    return lista;



};

