
const queryString=location.search
console.log(queryString)
const _id=new URLSearchParams(queryString).get('_id')


const evento=data.events.find(event=>event._id==_id)
console.log(evento)

let contDetails =document.getElementById('contDetails');
console.log(contDetails)

contDetails.innerHTML=""
contDetails.innerHTML += `

<div id="contDetails" class="container-fluid">
<div class="d-flex p-3 justify-content-center">
  <div class="card mb-3" style="width:45rem;border:rgba(176, 47, 116, 0.988) solid;">
    <div class="row">
      <div class="col-md-5">
        <img src= ${evento.image}class="img-fluid start h-100" alt="">
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
            <li>Price:   </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
 `



