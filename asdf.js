function numeroMayor(a, b, c) {
    if (a != b || b != c || c != a) {
        console.log('El número mayor es:', Math.max(a, b, c))
    } else {
        (a == b && a == c && b == c)
        return console.log('Son iguales.')
    }
}

numeroMayor(29, 29, 29);