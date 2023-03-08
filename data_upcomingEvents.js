const tarjeta= document.getElementById ('card')

let tarjetas='';

for (let event of data.events){
    if(event.date >= data.currentDate)
  tarjetas += `<div class="card" style="width:17rem ">
  <img src= ${event.image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${event.name}</h5>
    <p class="card-text">${event.description}</p>
    <p class="card-text">Price: $ ${event.price}</p>
    <p class="card-text"> ${event.date}</p>
    <a href="./details.html" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>` 

}
 console.log(tarjetas);
 tarjeta.innerHTML = tarjetas;




 