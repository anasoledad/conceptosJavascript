//objetos con notación literal

let pelicula = {
    // propiedades -> clave : valor,
    id: 2000,
    genero: 'Comedia',
    nombre: 'Son como niños',
    duracion: '1h 45min',
    estado: true,
    clasificicacion: 'atp',
    //metodos
    reproducir: function(){
        document.write(`<p>La peli ${this.nombre} se está reproduciendo...</p>`);
    },
    pausa: ()=>{document.write(`<p>La peli está pausada</p>`);}
}

//usar el objeto

console.log(pelicula);

// mostrar el objeto por pantalla
document.write('Película: '+ pelicula.nombre);
document.write('<br>Duración: '+ pelicula.duracion);
document.write('<br>Genero: '+ pelicula['genero']);

// invocar a un método
pelicula.reproducir();
pelicula.pausa();

// modificar el objeto
pelicula.duracion = '1hr 55min';
document.write('Película: '+ pelicula.nombre);
document.write('<br>Duración: '+ pelicula.duracion);

//agregar una nueva propiedad
pelicula.fechaEstreno = '15/03/2023';
document.write('<br>Película: '+ pelicula.nombre);
document.write('<br>Fecha de estreno: '+ pelicula.fechaEstreno);

// borrar una propiedad del objeto
delete pelicula.fechaEstreno;
console.log(pelicula);

// averiguar si una propiedad esta dentro del objeto
console.log(pelicula.hasOwnProperty('region'));
console.log(pelicula.hasOwnProperty('id'));

// definir un prototipo
function Videojuego(){
    this.nombre = 'Terraria';
    this.precio = 129.99;
}

const terraria = new Videojuego();
console.log(terraria);