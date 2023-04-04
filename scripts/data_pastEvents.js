
let datos;
const obtenerDatos=async()=>{
try{
 const respuesta=await fetch('https://mindhub-xj03.onrender.com/api/amazing')
 datos=await respuesta.json()
 console.log(datos);
 arrayEventsPast=eventspast(datos.events,datos.currentDate)
 console.log(arrayEventsPast)
 mostrarCards(arrayEventsPast)
 superFiltro()
 mostrarCat(arrayEventsPast)
}
catch(error){
console.log(error);
  alert('Error');
 }

}
obtenerDatos();

 // buscador por categorias y nombre de evento./scripts/amazing.json
   const input=document.querySelector('input')
   console.log(input)
   const check= document.getElementById('check')
   console.log(check)

   function eventspast(datos,currentDate){
    return datos.filter(event=>event.date < currentDate)
    }


    const tarjeta= document.getElementById ('card')
   function mostrarCards(eventspast){
 let tarjetas='';
  if (eventspast.length==0){
    tarjeta.innerHTML=`<h4 class=display-1  fw-bolder text-color:red > No matches possible!!</h4>`;
    return ;
    }
  tarjeta.innerHTML=""
  eventspast.forEach(event => {
  tarjetas += `
      <div class="card" style="width:17rem ">
      <img src= ${event.image} class="card-img-top" alt="...">
      <div class="card-body card">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.category}</p>
        <p class="card-text">${event.description}</p>
        <p class="card-text">${event.date}</p>
        <p class="card-text">Price: $ ${event.price} </p>
        <a href="./details.html?_id=${event._id}" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>` 
      
    })
    tarjeta.innerHTML = tarjetas
    };
    function filtrarPorTexto (array,texto) {
    let arrayFiltrado= array.filter(elemento =>
    elemento.name.toLowerCase().includes(texto.toLowerCase()))
   return arrayFiltrado
    }
  
    function filtrarPorCat(array){
      let checkbox=document.querySelectorAll("input[type='checkbox']")
      let arraychecks=Array.from(checkbox)
      let arraycheckchecked=arraychecks.filter(chek=>chek.checked)
      let arraycheckcheckedValues=arraycheckchecked.map(checkchecked=>checkchecked.value)
      let arrayFiltrado=array.filter(elemento=>arraycheckcheckedValues.includes(elemento.category))
      if (arraycheckchecked.length > 0){
        return arrayFiltrado
      }
      return array
    }

    function superFiltro(){
      input.addEventListener('input',superFiltro)
      check.addEventListener('change',superFiltro)
      let primerFiltro=filtrarPorTexto(arrayEventsPast,input.value)
      let segundoFiltro=filtrarPorCat(primerFiltro)
      mostrarCards(segundoFiltro)
    }
    //categorias
    function mostrarCat(array){
    let categorias=array.map((event)=>event.category )
    console.log(categorias)
  
  //filtre las que se repiten
  const catfil = categorias.filter((event, indice) => {
    return categorias.indexOf(event) === indice;
    
  })
  console.log(catfil)
  
  let categories=''
 
  check.innerHTML=""
  catfil.forEach(event => {
    categories+=`<label class="checkbox-inline p-2">
    <input type="checkbox" id="${event}" value="${event}"> ${event}
  </label>`
  })
  
  check.innerHTML=categories


}



