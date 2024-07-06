function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
  }
  
  // Here we get reference of moverandom button :- 
  const moveRandom = document.querySelector("#move-random");
  
  // Here we are use mouseenter event on moveRandom ok 
  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });