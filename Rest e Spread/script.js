//REST
function showList(empresa, ...clientes){
  console.log(empresa);
  console.log(clientes );
}
showList("Origamid", "Joao", "Lucas", 100)

//SPREAD
const numeros = [1, 2, 4, 29, 32, 2, 10, 6];
console.log(Math.max(...numeros))

const items = document.querySelectorAll("li")



//clonar objetos
const carro = {cor: "vermelho", portas: 9, ano: 2021}
const cloneCarro = {...carro, turbo: true}

class Transporte{
  constructor(){
    this.terrestre = true
  }
}
class  Carro{
  constructor(){
    this.cor = cor
    this.portas = portas
  }
}


const carro = new Carro("vermelho, 4");
const cloneCarro = {...carro}

console.log(carro)
console.log(cloneCarro)