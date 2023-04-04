let datos;
 const obtenerDatos=async()=>{
try{
  const respuesta=await fetch('https://mindhub-xj03.onrender.com/api/amazing')
  datos=await respuesta.json()
  console.log(datos);
  arrayEventsPast=eventspast(datos.events,datos.currentDate)
  console.log(arrayEventsPast)
  arrayEventsFut=eventsfut(datos.events,datos.currentDate)
  console.log(arrayEventsFut)
  let porcentaje=estadisticaP(arrayEventsPast)
  console.log(porcentaje)
  let capacityMay=eventMayCap(arrayEventsPast)
  console.log(capacityMay)
  mostrarTabla1(resultados(estadisticaP(arrayEventsPast), estadisticaP(arrayEventsPast).reverse(),eventMayCap(arrayEventsPast)),"tabla1")

  mostrarTabla2_3(datosTabla(arrayEventsFut), "tabla2")
  console.log(datosTabla(arrayEventsFut))
  mostrarTabla2_3(datosTabla(arrayEventsPast), "tabla3")
}
catch(error){
console.log(error);
  alert('Error');
 }
}
obtenerDatos();


function eventspast(datos,currentDate){
return datos.filter(event=>event.date < currentDate)
}

function eventsfut(datos,currentDate){
 return datos.filter(event=>event.date >= currentDate)
 }

 //eventos promedio de  asistencia

 function estadisticaP(arrayEventsPast){
  const arrayPorcentaje=arrayEventsPast.map(event=>{
return{
  porcentaje: (event.assistance/event.capacity*100).toFixed(2),
  nameE:event.name
}
})
 //ordeno de mayor a menor
 arrayPorcentaje.sort((x,y)=>y.porcentaje-x.porcentaje);
 console.log(arrayPorcentaje)
 return arrayPorcentaje
}
 
//evento con mayor capacidad

function eventMayCap(arrayEventsPast){
  const arrayMayCap=arrayEventsPast.map(event =>{
    return {
      capacityM: event.capacity,
      nameE: event.name
    }
  }) 
  arrayMayCap.sort((x,y)=>y.capacityM-x.capacityM);
 console.log(arrayMayCap)
 return arrayMayCap
}
function resultados(mayorPorcentaje,menorPorcentaje,mayorCapacity) {
  let primerTabla = {
    mayorPorcentaje: mayorPorcentaje[0].nameE + " " + "( " + mayorPorcentaje[0].porcentaje+" %)" ,
    menorPorcentaje:menorPorcentaje[0].nameE + " "+ "( " + menorPorcentaje[0].porcentaje +" %)",
    mayorCapacity:mayorCapacity[0].nameE + " "  + "( " +(mayorCapacity[0].capacityM)+" )"
  }
  return primerTabla
 }


function mostrarTabla1(resultados, tabla1) {
  const table = document.getElementById('tabla1')
  console.log(tabla1)
  table.innerHTML = `
  <tr >
      <td>${resultados.mayorPorcentaje}</td>
      <td>${resultados.menorPorcentaje}</td>
      <td>${resultados.mayorCapacity}</td>
  </tr>
  `
}

// tablas 2 y 3

function datosTabla(arr) {
  let categories = Array.from(new Set(arr.map(a => a.category)));
  let eventCategories = categories.map(cat => arr.filter(event => event.category == cat))
  let resultado = eventCategories.map(eventCat => {
    let calculo = eventCat.reduce((acc, event) => {
      console.log(event)
      acc.categoria = event.category;
      acc.ganancia += event.price * (event.assistance|| event.estimate);
      acc.asistencia += ((event.assistance|| event.estimate ) * 100) / event.capacity
      return acc
    }, {
      categoria: "",
      ganancia: 0,
      asistencia: 0
    })
    calculo.asistencia = calculo.asistencia / eventCat.length
    return calculo
    
  })
  return resultado;
}
function mostrarTabla2_3(arr, idTag) {
  const eventosTabla = document.getElementById(idTag)
  let html = arr.map(events => {
    return `
      <tr>
              <td>${events.categoria}</td>
              <td>$${events.ganancia}</td>
              <td>${events.asistencia.toFixed(2)}%</td>
          </tr>
      `
  })
  eventosTabla.innerHTML = html.join("")
}






