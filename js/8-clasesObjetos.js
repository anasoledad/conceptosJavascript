class VideoJuego{
    constructor(titulo, genero, precio, desarrollador){
        this.titulo = titulo;
        this.titulo = genero;
        this.titulo = precio;
        this.titulo = desarrollador;
        this.lanzamiento = new Date();
        this.valoracion = 0;
    }
}

let super_mario = new VideoJuego('Super Mario', 'Aventura', 100, 'Nintendo');

console.log(super_mario);
