/*
switch(opcion){
    case 1:
        todas las acciones a realizar si el caso es 1;
        break;
    case 2:
        todas las acciones a realizar si el caso es 1;
        break;
    case 'lunes':
        todas las acciones a realizar si el caso es 1;
        break;
    case 'martes':
        todas las acciones a realizar si el caso es 1;
        break;
    default:
        aquí agrego el código cuando no se cumplió nungun case;
}
*/

// pedir al usuario seleccionar una estacion del año y ofrecer un menu con las opciones de plato principal, bebida, postre.

const estacion = prompt('Seleccione su estación preferida: 1-verano, 2-primavera, 3-otoño, 4-invierno');

console.log(estacion);

switch(estacion){
    case '1':
        document.write(`<p class ='subtitulo'>Verano:</p>
        <ul>
            <li>Plato principal: Milanesa con ensalada</li>
            <li>Bebida: CocaCola</li>
            <li>Postre: Helado</li>
        </ul>
        `);
        break;
    case '2':
        document.write(`<p class ='subtitulo'>Primavera:</p>
        <ul>
            <li>Plato Principal: Empanadas</li>
            <li>Bebida: Agua Saborizada</li>
            <li>Postre: Ensalada de fruta</li>
        </ul>
        `);
        break;
    case '3':
        document.write(`<p class ='subtitulo'>Otoño:</p>
        <ul>
            <li>Plato Principal: Lasaña</li>
            <li>Bebida: Copa de vino</li>
            <li>Postre: Volcan de chocolate</li>
        </ul>
        `);
        break;
    case '4':
        document.write(`<p class ='subtitulo'>Invierno:</p>
        <ul>
            <li>Plato Principal: Guiso (fideo moñito)</li>
            <li>Bebida: Coca-Cola</li>
            <li>Postre: Budín de pan</li>
        </ul>
        `);
        break;
        default:
            document.write('Seleccionaste una opción erronea');
    
}