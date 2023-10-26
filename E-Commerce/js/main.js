const {createApp} = Vue;

createApp({
  data(){
    return{
        productos: [],
        url: 'http://127.0.0.1:5000/productos',
        cargando: true,
        error: false,
        elementosPorPagina: 5,
        datosPaginados: []
    }
},
methods:{
  fetchApi(url){
      fetch(url)
      .then(res => res.json())
      .then(data =>{
          this.productos = data;
          this.cargando = false;
      }).catch(err =>{
          console.error(err);
          this.error = true;
      })
  },
  eliminar(id){
      const url = this.url+"/"+id;
      let options={
          method: 'DELETE'
      }

      fetch(url, options)
      .then(res=> res.json())
      .then(data => {
          alert("Producto  Eliminado Exitosamente");
          location.reload();
      }).catch(err => console.error(err))
  }
},
    components: {
        "navegacion":{
          template: '<header class="cabecera"><a href="./index.html"><img class="logo" src="./Img/logo-de-omega-team.jpg" alt="logo"></a><div class="icon-container"> <button id="buttonIcon" type="button" class="button-icon-menu"><i class="fa-solid fa-bars bars-icon"></i></button> <button id="buttonIconCancel" type="button" class="button-icon-menu icon-cancel"><i class="fa-solid fa-x bars-icon iconCancel-color"></i></button> </div> <div class="lista-menu-icon-container" id="menu-desplegable"> <ul class="lista-menu-icon__lista"> <li><a href="./index.html">Inicio</a></li> <li><a href="./resenia.html">Reseñas</a></li> <li><a href="./nosotros.html">Quienes Somos</a></li> <li><a href="./contacto.html">Contacto</a></li> </ul> </div> <nav class="menu"> <ul class="menu__lista"> <li class="menu__item"><a class="menu__link" href="index.html">Inicio</a></li> <li class="menu__item"><a class="menu__link" href="./resenia.html">Reseñas</a></li> <li class="menu__item"><a class="menu__link" href="./nosotros.html">Quienes Somos</a></li> <li class="menu__item"><a class="menu__link" href="./contacto.html">Contacto</a></li> </ul> </nav> </header>'
      },
      "navegacion2":{
        template: '<header class="cabecera"><a href="admin.html"><img class="logo" src="./Img/logo-de-omega-team.jpg" alt="logo"></a><div class="icon-container"> <button id="buttonIcon" type="button" class="button-icon-menu"><i class="fa-solid fa-bars bars-icon"></i></button> <button id="buttonIconCancel" type="button" class="button-icon-menu icon-cancel"><i class="fa-solid fa-x bars-icon iconCancel-color"></i></button> </div> <div class="lista-menu-icon-container" id="menu-desplegable"> <ul class="lista-menu-icon__lista"> <li><a href="admin.html">Inicio</a></li> <li><a href="productos.html">Productos</a></li> <li><a href="producto_nuevo.html">Alta Producto</a></li></ul> </div> <nav class="menu"> <ul class="menu__lista"> <li class="menu__item"><a class="menu__link" href="admin.html">Inicio</a></li> <li class="menu__item"><a class="menu__link" href="productos.html">Productos</a></li> <li class="menu__item"><a class="menu__link" href="producto_nuevo.html">Alta Producto</a></li> </ul> </nav> </header>'
    },
      "piesito":{
        template:' <footer class="footer" id="footer"> <div class="powered__content"> <h1 class="powered__content-text">Powered by OmegaGroup | © 2023</h1> </div> </footer>'
      }
  }
  ,
    created(){
        this.fetchApi(this.url);
    }
}).mount('#app')