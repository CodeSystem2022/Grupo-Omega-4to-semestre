let argurl = location.search.split('&');

let data = [];

console.log(data);

for(let x = 0; x < argurl.length; x++){
    data[x] = argurl[x].split('=');
}

let id = decodeURIComponent(data[0][1])
document.getElementById('nombre').value = decodeURIComponent(data[1][1])
document.getElementById('precio').value = decodeURIComponent(data[2][1])
document.getElementById('stock').value = decodeURIComponent(data[3][1])
document.getElementById('txtURL').value = decodeURIComponent(data[4][1])
document.getElementById('txtURL2').value = decodeURIComponent(data[5][1])
document.getElementById('txtURL3').value = decodeURIComponent(data[6][1])
document.getElementById('expansion').value = decodeURIComponent(data[7][1])
document.getElementById('camara_trasera').value = decodeURIComponent(data[8][1])
document.getElementById('camara_frontal').value = decodeURIComponent(data[9][1])
document.getElementById('peso').value = decodeURIComponent(data[10][1])
document.getElementById('ram').value = decodeURIComponent(data[11][1])
document.getElementById('almacenamiento').value = decodeURIComponent(data[12][1])
document.getElementById('sistema').value = decodeURIComponent(data[13][1])
document.getElementById('perfil').value = decodeURIComponent(data[14][1])
document.getElementById('procesador').value = decodeURIComponent(data[15][1])
document.getElementById('pantalla').value = decodeURIComponent(data[16][1])
document.getElementById('caracteristicas').value = decodeURIComponent(data[17][1])
document.getElementById('bateria').value = decodeURIComponent(data[18][1])
document.getElementById('marca').value = decodeURIComponent(data[19][1])

function modificar(){
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

    let url= 'http://127.0.0.1:5000/productos/'+id;
    let options = {
        body: JSON.stringify(producto),
        method: 'PUT',
        headers: {'Content-Type':'application/json'}
    }

    fetch(url, options)
    .then(function(){
        alert("Producto modificado exitosamente");
        window.location.href = './productos.html'
    }).catch(error =>{
        alert('No pudo modificarse el prodcto');
        console.error(error);
    })
}