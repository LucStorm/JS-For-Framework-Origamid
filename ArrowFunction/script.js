const upperName = (name) => name.toUpperCase();
const countLetter = (word) => word.length;
 console.log(upperName("luis")) 

class Menu{
  constructor(menu){
    this.menuElement = document.querySelector(menu)
    this.activeClass = "active"  
}
addActiveEvent(){
      //this.menuElement está puxando o html do this.menuElement para conseguirmos adicionar o click
    this.menuElement.addEventListener("click", (event) => {
      event.target.classList.add(this.activeClass)
    })
  }
}
const menu = new Menu(".principal");
menu.addActiveEvent();

