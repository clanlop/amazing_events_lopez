const queryString=location.search
 console.log(queryString)
 const _id=new URLSearchParams(queryString).get('_id')


let datos;
const obtenerDatos=async()=>{
try{
 const respuesta=await fetch('https://mindhub-xj03.onrender.com/api/amazing')
 datos=await respuesta.json()
 console.log(datos);
 mostrarDetails(datos.events)
}
catch(error){
console.log(error);
  alert('Error');
 }

}

 obtenerDatos();

 
 let contDetails =document.getElementById('contDetails');
 console.log(contDetails)

function mostrarDetails(){ 
  const evento=datos.events.find(event=>event._id==_id)
  console.log(evento)

 
contDetails.innerHTML=""
contDetails.innerHTML += `

<div id="contDetails" class="container-fluid">
<div class="d-flex p-3 justify-content-center">
  <div class="card mb-3" style="width:45rem;border:rgba(176, 47, 116, 0.988) solid;">
    <div class="row">
      <div class="col-md-5">
        <img id="imgDet" src= ${evento.image}class="img-fluid start h-100  alt="">
      </div>
      <div class="col-md-7">
        <div class="card-body ">
          <h2 class="card-title">Data</h2>
          <p class="card-text">Every event contains the following data.</p>
          <ul>
            <li>Name: ${evento.name} </li>
            <li>Date: ${evento.date}</li>
            <li>Description: ${evento.description}  </li>
            <li>Category: ${evento.category}  </li>
            <li>Place: ${evento.place} </li>
            <li>Capacity: ${evento.capacity} </li>
            <li>Assistance or estimate: ${evento.assistance} </li>
            <li>Price: $${evento.price}   </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
 `
} 



