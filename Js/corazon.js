/*corazon de favoritos*/

document.addEventListener("click", (event) => {
  const clickedElement = event.target;
  
  if (!clickedElement.matches('.corazon')) {
    return;
  }
  
  confirm("Se ha agregado a favoritos");
});



