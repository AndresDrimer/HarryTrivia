let datosCarta = new Vue({
    el: "#datosCarta",
    data: {
        urlTodos: "http://hp-api.herokuapp.com/api/characters",
        
        nombres: [],
        casas: [],
        actores:  [],
        scrImg:""
    },
    methods: {
        async traerCarta() {
        const response = await fetch(this.urlTodos)
        const data = await response.json()
        const {name, actor, image, house,yearOfBirth} = data
        
        this.srcImg=data[0].image
        
        function numeroPosibleAzar () {
            return Math.floor(Math.random() * 401);
            }
        
        numOk= 0 // porque este quiero que sea siempre harry
        numMal1= numeroPosibleAzar()
        console.log("numMal1 es: " + numMal1)
        if (numMal1==numOk){
            return this.numMal1++;
        }

        numMal2= numeroPosibleAzar()
        console.log("numMal2 es: " + numMal2)
        
        if (numMal2==numOk || numMal2==numMal1) {
            return this.numMal2++;
        }

        
        
                
        function chequearNumMal1(x){
            while (data[x].house === "") {
                x++;}
            this.numMal1=x;
            return this.numMal1;    
        }
        
        function chequearNumMal2(x){
            while (data[x].house === "") {
                x++;}
            this.numMal2=x;
            return this.numMal2;   
        }
        
        chequearNumMal1(numMal1)
        
        chequearNumMal2(numMal2)
        console.log("estos son numMal1 y 2 corregidos: " + numMal1, numMal2)
        
        // asignar nombres
        nombreOk=data[numOk].name
        nombreMal1=data[numMal1].name
        nombreMal2=data[numMal2].name
        this.nombres=[]
        this.nombres.push(nombreOk, nombreMal1, nombreMal2)
        this.nombres.sort()
        console.log(this.nombres)
    

        // asignar casas
        casaOk=data[numOk].house
        casaMal1=data[numMal1].house
        casaMal2=data[numMal2].house
        this.casas=[]
        this.casas.push(casaOk, casaMal1, casaMal2)
        this.casas.sort()
        console.log(this.casas)
        
        
        // asignar actores
        actoreOk=data[numOk].actor
        actoreMal1=data[numMal1].actor
        actoreMal2=data[numMal2].actor
        this.actores=[]
        this.actores.push(actoreOk,actoreMal1,actoreMal2)
        this.actores.sort()
        console.log(this.actores)
    
      
        // function asignarTodo(){
            
        //     asignarCasas()
        //     asignarAnios()
        //     asignarActores()
        // }

        // asignarTodo()
        
               
        
        },
    },
})


    // let imgCarta = document.getElementById("fotoCarta")
    // let fotitoCarta = document.createElement("fotitoCartita")
    // fotitoCarta.setAttribute("src", imagen)
    // imgCarta.appendChild(fotitoCarta) 


datosCarta.traerCarta()



   
    
    