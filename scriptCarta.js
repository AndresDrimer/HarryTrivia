// CARTA promise

const urlTodos=
"http://hp-api.herokuapp.com/api/characters"

async function traerCarta(){
    const response = await fetch(urlTodos)
    const data = await response.json()
    const {name, actor, image, house,yearOfBirth} = data
    
    var img = document.createElement('img');
    img.src = data[0].image
    document.getElementById('fotoCarta').appendChild('img');
    console.log(name)
    }