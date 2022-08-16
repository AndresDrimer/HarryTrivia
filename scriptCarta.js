let datosCarta = new Vue({
    el: "#datosCarta",
    data: {
        urlTodos: "http://hp-api.herokuapp.com/api/characters",
        
        imagen: "",
        nombres: [],
        casas: [],
        anios:  [],
        actores:  [],
        scrImg:""
        

    },
    methods: {
        async traerCarta() {
        const response = await fetch(this.urlTodos)
        const data = await response.json()
        const {name, actor, image, house,yearOfBirth} = data
        
        this.srcImg=data[0].image
        console.log(this.srcImg)
        // this.$refs."#fotocarta".style.backgroundImage =url(this.srcImg);
        


        function numeroPosibleAzar () {
            return Math.floor(Math.random() * 401);
            }
        
        numOk= 0 // porque este quiero que sea siempre harry
        numMal1= parseInt(numeroPosibleAzar())
        console.log(numMal1)
        if (numMal1==numOk){
            return numMal1++;
        }
        numMal2= parseInt(numeroPosibleAzar())
        if (numMal2==numOk || numMal2==numMal1) {
            return numMal2++;
        }
        console.log(numMal1, numMal2)
        

        function chequearNum(x){
            while (data[x].house === "") {
                x++;}
            numMal1=x;
            return numMal1;    
        }
        
        
        chequearNum(numMal1)
        console.log(numMal1)
        chequearNum(numMal2)
        console.log(numMal2)
        
        // asignar nombres
        nombreOk=data[numOk].name
        nombreMal1=data[numMal1].name
        nombreMal2=data[numMal2].name
        this.nombres=[]
        this.nombres.push(nombreOk)
        this.nombres.push(nombreMal1)
        this.nombres.push(nombreMal2)
        this.nombres.sort()
        console.log(this.nombres)
    

        // asignar casas
        casaOk=data[numOk].house
        casaMal1=data[numMal1].house
        casaMal2=data[numMal2].house
        this.casas=[]
        this.casas.push(casaOk)
        this.casas.push(casaMal1)
        this.casas.push(casaMal2)
        this.casas.sort()
        console.log(this.casas)
        
        
        // asignar anios
        anioOk=data[numOk].yearOfBirth
        if (anioOk==""){
            anioOk="desconocido"}
        anioMal1=data[numMal1].yearOfBirth
        if (anioMal1==""){
            anioMal1="desconocido"}
        anioMal2=data[numMal2].yearOfBirth
        if (anioMal2==""){
        anioMal2="desconocido"}
        this.anios=[]
        this.anios.push(anioOk)
        this.anios.push(anioMal1)
        this.anios.push(anioMal2)
        this.anios.sort()
        console.log(this.anios)
        
        
        // asignar actores
        actoreOk=data[numOk].actor
        actoreMal1=data[numMal1].actor
        actoreMal2=data[numMal2].actor
        this.actores=[]
        this.actores.push(actoreOk)
        this.actores.push(actoreMal1)
        this.actores.push(actoreMal2)
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



   
    
    