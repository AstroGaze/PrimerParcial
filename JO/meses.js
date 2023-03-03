const mes = parseInt(prompt("Introduce el número del mes (1 al 12):"));

if (mes >= 1 && mes <= 12) {
  if (mes === 2) {
    console.log("El mes de Febrero tiene 28 o 29 días");
  } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    console.log(`El mes ${mes} tiene 30 días`);
  } else {
    console.log(`El mes ${mes} tiene 31 días`);
  }
} else {
  console.log("El número del mes debe estar entre 1 y 12");
}