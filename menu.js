function Menu(){

  let menu = document.querySelector(".menu-page");

  let totorial=document.querySelector(".totorial");

  let allsongs=document.querySelector(".all-songs");

  menu.classList.toggle("active");

  totorial.classList.toggle("width");

  allsongs.classList.toggle("width");
  
}

  // theme

  function changeTheme() {

  let menu = document.querySelector(".menu-page");

  let icon = document.querySelector(".material-symbols-outlined");

  let darck = document.querySelector(".all-songs");


  let theme = document.querySelector(".searching");


  theme.classList.toggle("color");

  menu.classList.toggle("black");

  icon.classList.toggle("active");

  document.body.classList.toggle("active");

  darck.classList.toggle("blue");

  document.header.classList.toggle("active");

  


  

}