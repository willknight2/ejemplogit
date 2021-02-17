const cargarTabla = (contactos)=>{

    const tbody = document.querySelector("#tbody-contactos");
    
    tbody.innerHTML ='';

    contactos.forEach( c=>{
        let tr = document.createElement('tr');
        let tdNombre = document.createElement("td");
        tdNombre.innerText = c.nombre;
        let tdCorreo = document.createElement("td");
        tdCorreo.innerText = c.correo;
        let tdTelefono = document.createElement("td");
        tdTelefono.innerText = c.telefono;
        
        tr.appendChild(tdNombre);
        tr.appendChild(tdCorreo);
        tr.appendChild(tdTelefono);
        tbody.appendChild(tr);

    });

};



window.addEventListener("DOMContentLoaded", ()=>{
    let contactos = obtenerContactos();
    //console.log(contactos)
    cargarTabla(contactos);
});


document.querySelector("#filtro-txt").addEventListener("input", ()=>{
    let filtro = document.querySelector("#filtro-txt").value.trim();
    
    let contacto = obtenerContactos(filtro);
    cargarTabla(contacto);
});