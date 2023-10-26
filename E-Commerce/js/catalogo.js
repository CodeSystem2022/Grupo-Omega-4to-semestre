let marca = location.search.slice(1,-1);
var idd;

function control_stock(dato, dato2){
  let frase = "Sin Stock"
  if(dato > 0){
    frase = "$ "+dato2;
  }

  return frase
}

function catalogo(celu){
    //console.log(marca)
    
    for(let i =0; i < celu.length; i++){
        if(celu[i].marca == marca){
          //console.log(control_stock(celu[i].stock,celu[i].precio))
          idd = celu[i].id;
          
            equipos.innerHTML +=`<section class="galeria-celu" >
            <div class="card card2" style="width: 18rem;">
            
            <div id="carouselExampleSlidesOnly${idd}" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="${celu[i].imagen}" alt="${celu[i].nombre}">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${celu[i].imagen2}" alt="${celu[i].nombre}">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${celu[i].imagen3}" alt="${celu[i].nombre}">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleSlidesOnly${idd}" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleSlidesOnly${idd}" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
              <div class="card-body">
                <h5 class="card-title">${celu[i].nombre}</h5>
                <a id="abrir${idd}" class="btn btn-dark" onclick ="modales('ventana${idd}','abrir${idd}')">Ver detalles</a>
              </div>
            </div>
              </section>
            </section>
            <div id="ventana${idd}" class="modal">
            <div class="contenido-modal">
            <div class="cierre"><i class="fa-solid fa-x close"></i></div>
                <h2>${celu[i].nombre}</h2>
                <p>${celu[i].caracteristicas}</p>
                <ul class="lista">                          
                        <li class="items"><div> <img  class="img_lista" src="https://img.icons8.com/ios/50/ios-screenshot.png"></div><div><p> Pantalla:</p> <spam> ${celu[i].pantalla}</spam></div> </li>
                        
                        <li class="items"><div><img class="img_lista" src="https://img.icons8.com/wired/64/processor.png"></div><div> <p>Procesador:</p> <spam>${celu[i].procesador}</spam></div></li>
                        
                        <li class="items"><div><img class="img_lista" src="https://img.icons8.com/dotty/80/settings-3.png"></div><div> <p>RAM:</p> <spam>${celu[i].ram}GB</spam></div></li>
                        
                        <li class="items"><div><img class="img_lista" src="https://img.icons8.com/ios-filled/50/stack.png"></div><div> <p>Almacenamiento:</p> <spam>${celu[i].almacenamiento}GB</spam></div></li>
                        
                        <li class="items"><div><img class="img_lista" src="https://img.icons8.com/wired/64/box--v1.png"></div><div> <p>Expansión:</p> <spam>${celu[i].expansion}</spam></div></li>
                        
                        <li class="items"><div><img class="img_lista" src="https://img.icons8.com/ios-filled/50/camera-on-tripod.png"></div><div><p>Camara Frontal:</p><spam>${celu[i].camara_frontal} </spam> <p>Camara Trasera:</p> <spam>${celu[i].camara_trasera}</spam></div></li>
                        
                        <li class="items"><div><img class="img_lista" src="https://img.icons8.com/ios/50/android-l-battery--v1.png"></div><div> <p>Bateria:</p> <spam>${celu[i].bateria} mAh</spam></div></li>
                        
                        <li class="items"><div><img class="img_lista" src="https://img.icons8.com/ios/50/android-os.png"></div><div> <p>OS:</p> <spam>${celu[i].sistema}</spam></div></li>
                        
                        <li class="items"><div><img class="img_lista" src="https://img.icons8.com/pastel-glyph/64/diagonal-arrows-right.png" alt="diagonal-arrows-right"></div><div> <p>Perfil:</p> <spam>${celu[i].perfil} mm</spam></div></li>
                        
                        <li class="items"><div><img class="img_lista" src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/external-scale-4th-july-vitaliy-gorbachev-fill-vitaly-gorbachev.png"></div><div> <p>Peso:</p>  <spam>${celu[i].peso}</spam></div></li>
                    </ul>
                    <div class="precio">
                    <p class="precio_texto">${control_stock(celu[i].stock,celu[i].precio)}</p>
                    </div>
            </div>
          </div>
            `
            
            //console.log("dos")
        }
    }
}

fetch('http://127.0.0.1:5000/productos')
.then(Response => Response.json())
.then(datos => {
    //console.log(datos)
    catalogo(datos)
    
}).catch(error => console.log(error))

function modales(m,a){
  
  var modal = document.getElementById(m);

// Botón que abre el modal

var boton = document.getElementById(a);

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace click en el botón, se abre la ventana
boton.addEventListener("click",function() {
  modal.style.display = "block";
});

// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click",function() {
  modal.style.display = "none";
});

// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click",function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
}
