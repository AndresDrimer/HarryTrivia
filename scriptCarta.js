// CARTA promise

const urlTodos=
"http://hp-api.herokuapp.com/api/characters"

async function traerCarta(){
    const response = await fetch(urlTodos)
    const data = await response.json()
    const {name, actor, image, house,yearOfBirth} = data
    
//    aca no hay azar, siemrpe es la de harry
    let nombre=data[0].name
    let actore=data[0].actor
    let casa = data[0].house
    let anio = data[0].yearOfBirth
    let imagen = data[0].image
    // console.log(imagen)  
    // document.getElementById("fotoCarta").style.backgroundImage = "url(imagen)"
    
    var names = document.querySelector('#selectName');
    names.innerHTML = '' + 
      '<option value="nombre">'nombre'</option>'
      
}

traerCarta()
   
    
    