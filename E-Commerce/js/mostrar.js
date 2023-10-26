function OmegaTeam(staff){
    //console.log(staff[0].nombre)
    for(let i =0; i < staff.length; i++){
        equipo.innerHTML +=`<div class="card" style="width: 18rem;">
        <img src="${staff[i].imagen}" class=" v" alt="${staff[i].nombre}">
        <div class="card-body">
          <h5 class="card-title">${staff[i].apellido}, ${staff[i].nombre}</h5>
          <p class="card-text">${staff[i].descripcion}</p>
        </div>
      </div>`
    }   
  }


fetch('https://script.google.com/macros/s/AKfycbyWI24rAUL0G5jJxsjrhn86pu9Tv9WkOV3v3vRp6CsL0XfW7Mt0fR9_kMBUnPCHf700/exec')
.then(response => response.json())
.then(datos => {
    //console.log(datos.datos)
    OmegaTeam(datos.datos)
})
.catch(error => console.log(error))