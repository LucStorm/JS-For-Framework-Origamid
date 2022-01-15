import numeroAleatorio from "./numeroAleatorio.js"

function area(raio){
  return Math.PI * raio * raio
}
function circunferencia(raio){
  return 2 * raio * Math.PI
}
function aleatorio(raio){
  return numeroAleatorio()
}

const Circulo = {
  area, circunferencia, aleatorio
}

export default Circulo;