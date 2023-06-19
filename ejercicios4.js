function func(arregloNumeros) {
    let suma = 0;
    let longitud = arregloNumeros.length;

    for (let i = 0; i < arregloNumeros.length; i++) {
        suma = suma + arregloNumeros[i];
    }
    return suma + longitud;
}

console.log(func([5, 6, 5, 4, 5]));

