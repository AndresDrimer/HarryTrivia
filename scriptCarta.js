let datosCarta = new Vue({
    el: "#datosCarta",
    data: {
        urlTodos: "http://hp-api.herokuapp.com/api/characters",
        nombre: "",
        actore: "",
        casa: "",
        anio: "",
        imagen: "",
        nombres: [],
        casas: [],
        anios:  [],
        actores:  []
        

    },
    methods: {
        async traerCarta() {
        const response = await fetch(this.urlTodos)
        const data = await response.json()
        const {name, actor, image, house,yearOfBirth} = data
        
//    aca no hay azar, siemrpe es la de harry
        this.nombre=data[0].name
        this.casa = data[0].house
        this.anio = data[0].yearOfBirth
        this.imagen = data[0].image
        this.actore=data[0].actor
       
        

        function numeroAzar (min, max) {
            return Math.floor((Math.random() * (max - min + 1)) + min);
            }
        

        function asignarListas () {
            this.nombres=[data[0].name, data[1].name, data[2].name]
            this.casas= [data[0].house, data[1].house, data[2].house]
            this.anios=[data[0].yearOfBirth, data[1].yearOfBirth, data[2].yearOfBirth]
            this.actores=[data[0].actor, data[1].actor, data[2].actor]     
            }


        asignarListas()
            console.log(nombres)
        },
    },
})


    // let imgCarta = document.getElementById("fotoCarta")
    // let fotitoCarta = document.createElement("fotitoCartita")
    // fotitoCarta.setAttribute("src", imagen)
    // imgCarta.appendChild(fotitoCarta) 


datosCarta.traerCarta()



   
    
    