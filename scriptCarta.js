// CARTA promise




    // console.log(imagen)  
    // document.getElementById("fotoCarta").style.backgroundImage = "url(imagen)"
    
    // var names = document.querySelector('#selectName');
    // names.innerHTML = '' + 
    //   '<option value="nombre">'nombre'</option>'
      
//     function random(min, max) {
//         return Math.floor((Math.random() * (max - min + 1)) + min);
//     }


let datosCarta = new Vue({
    el: "#selectName",
    data: {
        urlTodos: "http://hp-api.herokuapp.com/api/characters" ,
        nombre: "",
        actore: "",
        casa: "",
        anio: "",
        imagen: ""

    },
    methods: {
        async traerCarta() {
        const response = await fetch(this.urlTodos)
        const data = await response.json()
        const {name, actor, image, house,yearOfBirth} = data
        console.log(data[0].name)
//    aca no hay azar, siemrpe es la de harry
        this.nombre=data[0].name
        this.casa = data[0].house
        this.anio = data[0].yearOfBirth
        this.imagen = data[0].image
        this.actore=data[0].actor
        console.log(this.anio)
        },
    },
})


    // let imgCarta = document.getElementById("fotoCarta")
    // let fotitoCarta = document.createElement("fotitoCartita")
    // fotitoCarta.setAttribute("src", imagen)
    // imgCarta.appendChild(fotitoCarta) 


datosCarta.traerCarta()


   
    
    