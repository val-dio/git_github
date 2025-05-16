function Menu(){

  let menu = document.querySelector(".menu-page");
  menu.classList.toggle("active");
  
}

  // theme

  function changeTheme() {

  let menu = document.querySelector(".menu-page");
  let icon = document.querySelector(".material-symbols-outlined");
  let darck = document.querySelector(".all-songs");

  menu.classList.toggle("black");

  icon.classList.toggle("active");

  document.body.classList.toggle("active");

  darck.classList.toggle("blue");

  document.header.classList.toggle("active");


  

}