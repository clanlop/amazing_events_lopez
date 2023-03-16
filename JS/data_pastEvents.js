
// buscador por categorias y nombre de evento
const input=document.querySelector('input')
console.log(input)
const check= document.getElementById('check')
console.log(check)

//cuando selecciono
input.addEventListener('input',superFiltro)
 check.addEventListener('change',superFiltro)

function superFiltro(){
  let primerFiltro=filtrarPorTexto(eventspast,input.value)
  let segundoFiltro=filtrarPorCat(primerFiltro)
  mostrarCards(segundoFiltro)
}

const tarjeta= document.getElementById ('card')
let eventspast=data.events.filter((event)=>
  event.date < data.currentDate)
console.log(eventspast)

function mostrarCards(eventspast){
  let tarjetas='';
  if (eventspast.length==0){
    tarjeta.innerHTML=`<h4 class=display-1  fw-bolder text-color:red >No hay cincidencias posibles </h4>`;
    return ;
    }
  tarjeta.innerHTML=""
  eventspast.forEach(event => {
  tarjetas += `
      <div class="card" style="width:17rem ">
      <img src= ${event.image} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <p class="card-text">Price: $ ${event.price}</p>
        <p class="card-text"> ${event.date}</p>
        <a href="./details.html?_id=${event._id}" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>` 
      
    })
    tarjeta.innerHTML = tarjetas
  };

  mostrarCards(eventspast)

  function filtrarPorTexto (array,texto) {
    let arrayFiltrado= array.filter(elemento =>
    elemento.name.toLowerCase().includes(texto.toLowerCase()))
   return arrayFiltrado
    }
  
    function filtrarPorCat(array){
      let checkbox=document.querySelectorAll("input[type='checkbox']")
      let arraychecks=Array.from(checkbox)
      let arraycheckchecked=arraychecks.filter(chek=>chek.checked)
      console.log(arraycheckchecked);
      let arraycheckcheckedValues=arraycheckchecked.map(checkchecked=>checkchecked.value)
      console.log(arraycheckcheckedValues);
      let arrayFiltrado=array.filter(elemento=>arraycheckcheckedValues.includes(elemento.category))
      console.log(arrayFiltrado);
      if (arraycheckchecked.length > 0){
        return arrayFiltrado
      }
      return array
    }
    

  //categorias

let categorias=data.events.map((event)=>event.category )
console.log(categorias)

//filtre las que se repiten
const catfil = categorias.filter((event, indice) => {
  return categorias.indexOf(event) === indice;
}
);
console.log(catfil)

let categories='';

function pegarcategory(catfil){
check.innerHTML=""
catfil.forEach(event => {
  categories+=`<label class="checkbox-inline p-2">
  <input type="checkbox" id="${event}" value="${event}"> ${event}
</label>`
})
check.innerHTML=categories
};
pegarcategory(catfil)