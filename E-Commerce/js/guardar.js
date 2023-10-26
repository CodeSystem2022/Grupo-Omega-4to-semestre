function guardar(){
    let m = document.getElementById('marca').value
    let n= document.getElementById('nombre').value;
    let p = document.getElementById('precio').value;
    let s = document.getElementById('stock').value;
    let pa = document.getElementById('pantalla').value;
    let pro = document.getElementById('procesador').value;
    let cf = document.getElementById('camara_frontal').value;
    let ct = document.getElementById('camara_trasera').value;
    let b = document.getElementById('bateria').value;
    let sis = document.getElementById('sistema').value;
    let per = document.getElementById('perfil').value;
    let pe = document.getElementById('peso').value;
    let c = document.getElementById('caracteristicas').value;
    let r = document.getElementById('ram').value;
    let a = document.getElementById('almacenamiento').value;
    let ex = document.getElementById('expansion').value;
    let i1 = document.getElementById('txtURL').value;
    let i2 = document.getElementById('txtURL2').value;
    let i3 = document.getElementById('txtURL3').value;


    let producto ={
        marca: m,
        nombre: n,
        precio: p,
        stock: s,
        imagen: i1,
        imagen2: i2,
        imagen3: i3,
        caracteristicas: c,
        pantalla: pa,
        procesador: pro,
        ram: r,
        almacenamiento: a,
        expansion: ex,
        camara_frontal: cf,
        camara_trasera: ct,
        bateria: b,
        sistema: sis,
        perfil: per,
        peso: pe,
        
    };

    let url= 'http://127.0.0.1:5000/productos'
    let options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: {'Content-Type':'application/json'}
    }

    fetch(url, options)
    .then(function(){
        alert("Producto agregado exitosamente");
        window.location.href = './productos.html'
    }).catch(error =>{
        alert('No pudo agregarse el prodcto');
        console.error(error);
    })
}
