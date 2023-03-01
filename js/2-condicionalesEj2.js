// pedirle al usuario que seleccione un mes y le informamos si el mes seleccionado tiene 31 días, 30 o entre 28 y 29
// 31 días - enero, marzo, mayo, julio, agosto, octubre, diciembre
// 30 días - abril, junio, septiembre, noviembre
// 28 o 29 días - febrero

let mes = parseInt(prompt('Ingrese el número del mes (1 al 12): 1- enero, 2-marzo'))

if(mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12){
    document.write('El mes seleccionado ('+mes +') tiene 31 días<br>');
    document.write(`El mes seleccionado (${mes}) tiene 31 días`);
}else if (mes === 2){
    document.write(`El mes seleccionado (${mes}) tiene 28 0 29 días dependiendo del años`);
}else{
    document.write(`El mes seleccionado (${mes}) tiene 30 días`);
}