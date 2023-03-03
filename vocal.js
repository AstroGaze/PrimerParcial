
let char = prompt("Ingresa el caracter");

function esVocal(char) {
    // Convertir el carácter a minúscula para compararlo con las vocales
    char = char.toLowerCase();

    // Verificar si el carácter es una vocal
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;
    } else {
        return false;
    }
}

esVocal(char);
