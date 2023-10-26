const getURL = 'https://script.google.com/macros/s/AKfycbwnIJW6MuMF1ihpCJGdQcQUF9_cbH8gpUbfkUYWJZXbKsE_v-fVMZwd3yogQSjstkRQ/exec'

const postURL = 'https://script.google.com/macros/s/AKfycbxMDR7xEJFFKkY9CdJGp8vKMnG5KmaO1yWGilrFQSQbBVIIZujYKzAdA51tm4RltLhW3g/exec'

const form = document.forms['enviar-reseñas']

const imgEstrella = '<img class="estrellita" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABdElEQVR4nO3Wv0scURTF8Y9GMYkiRINIilgK/sCUacQUabRIl39AWFsrra20FkutRBC0E2wSUoiNrYVBY5ciSCxioatgUFl4wio76+6+cRbEAwemuPd+zzDDe5dnxak/uG5awmK94F04xwW66xFgBtfBhedM1YKjogB/8SrLABNF8FvnsoI3YK9EgH00ZhFgrAT81qNZBPheJsC3tGEdGAhvNo5ZXJUJcBVqxkPPQJjxoNoxhxVs4RfyZUDVOh9mbgXGXGDe0ZeUoUkuHFxfJegjjh8R/g/DHlAffj8C/A+GVKh32E0R/hPvVak32E4BvoO3Is789Qj4Bl6LVBMOaoAfhN5ovcBpDQHO0grwIeITVPzXV3v1VupcWnvfdY1OZV/cTRh+iYXgy4SaQm+UWhOG/8BgUV0vNkvU/UdbTIBP9wYelrtI8LnEtjQSE2A6DDkNm+/LCnqaMYmT0DsVE2ANyzXu/Z2Yx2pMgJ6Y5hRneLq6AfhdOKoInyD2AAAAAElFTkSuQmCC">'

const clases = ["reseña_uno","reseña_dos","reseña_tres","reseña_cuatro","reseña_cinco","reseña_seis","reseña_siete","reseña_ocho"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function ponerEstrella(objeto,p){
    let cantEstrellas = objeto[p].estrellas
    let acumulador = ""
    
    for( let x = 0; x < cantEstrellas; x++){
        
        acumulador += imgEstrella
    }

    return acumulador
}

function ponerResenia(objeto){

    for(let i =0; i < objeto.length; i++){
        resenia.innerHTML += `<div class="reseña">${ponerEstrella(objeto,i)} <section class="${clases[getRandomInt(8)]}"><h2>${objeto[i].nombre } ${objeto[i].apellido }</h2><p>• ${objeto[i].resenia}</p></section></div>`
    }
    
}

limpiar.addEventListener('click',e =>{
    e.preventDefault()
    form.reset();
});

//evento enviar datos
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(postURL, { method: 'POST',body: new FormData(form)})
    .then(response =>alert('Enviado!', response),form.reset())
    .catch(error => console.error('Error!', error.message))
})

//mostrar comentarios
fetch(getURL)
.then(response => response.json())
.then(datos => {
    ponerResenia(datos.datos)
})
.catch(error => console.log(error))