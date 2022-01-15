const menu = {
  class: ".principal",
  ativar(){
  const menuElement =  document.querySelector(this.class);
                        //Pode ser lido como menu.class
                        //can be read as menu.class
                       //this aponta para o menu
  console.log(menuElement)
  }
}
menu.ativar();
