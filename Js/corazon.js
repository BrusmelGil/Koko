/*corazon de favoritos*/
const corazon = document.querySelector(".corazon");

document.addEventListener("click", (event) => {
  const clickedElement = event.target;
  
  if (!clickedElement.matches('.corazon')) {
    return;
  }
  
  
  confirm("Se ha agregado a favoritos");
});



function myFunction() {
  document.getElementById("favorito").innerHTML = faActived;
}

