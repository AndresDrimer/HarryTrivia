let datosCarta = new Vue({
    el: "#datosCarta",
    data: {
        urlTodos: "http://hp-api.herokuapp.com/api/characters",
        
        nombreOk: "",
        nombreMal1: "",
        nombreMal2: "",
        casaOk: "",
        casaMal1: "",
        casaMal2: "",
        actoreOK:"",
        actoreMal1:"",
        actoreMal2: "",
        nombres: [],
        casas: [],
        actores:  [],
        scrImg:"", 
        selectedName: "",
        selectedHouse: "",
        selectedActore: "",
        puntaje: 0    
    },
    methods: {
        async traerCarta() {
        const response = await fetch(this.urlTodos)
        const data = await response.json()
        const {name, actor, image, house,yearOfBirth} = data
        
        this.srcImg=data[0].image
        
        function numeroPosibleAzar () {
            return Math.floor(Math.random() * 25);
            }
        
        numOk= numeroPosibleAzar() // Harry es el cero
        
        numMal1= numeroPosibleAzar()
        if (numMal1==numOk){
            return this.numMal1++;
        }

        numMal2= numeroPosibleAzar()
        
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
        
        // asignar imagen
        this.srcImg=data[numOk].image
        // asignar nombres
        nombreOk=data[numOk].name
        this.nombreOk=nombreOk 
        nombreMal1=data[numMal1].name
        this.nombreMal1=nombreMal1
        nombreMal2=data[numMal2].name
        this.nombreMal2=nombreMal2
        this.nombres.push(nombreOk, nombreMal1, nombreMal2)
        this.nombres.sort()
        
        
    

        // asignar casas
        casaOk=data[numOk].house
        this.casaOk=casaOk
        casaMal1=data[numMal1].house
        this.casaMal1=casaMal1
        casaMal2=data[numMal2].house
        this.casaMal2=casaMal2 
        this.casas.push(casaOk, casaMal1, casaMal2)
        this.casas.sort()
       
        
        
        // asignar actores
        actoreOk=data[numOk].actor
        this.actoreOk=actoreOk
        actoreMal1=data[numMal1].actor
        this.actoreMal1=actoreMal1
        actoreMal2=data[numMal2].actor
        this.actoreMal2=actoreMal2
        this.actores.push(actoreOk,actoreMal1,actoreMal2)
        this.actores.sort()
       
        },
        
        puntuar() {
            console.log(this.selectedName, this.selectedHouse,this.selectedActore)
            console.log(this.nombreOk, this.casaOk, this.actoreOk )
            let contador = 0
            
            if (this.selectedName==this.nombreOk){
                contador += 20
            }
            console.log(contador)
            if (this.selectedHouse==this.casaOk){
                contador += 30
            }   
            console.log(contador)    
            if (this.selectedActore==this.actoreOk){
                contador += 50
            } 
            console.log(contador) 
            this.puntaje += contador  
            console.log("puntaje: " + this.puntaje) 

            // sostener memoria
            localStorage.setItem("puntos", this.puntaje);
            const puntajeAcumulado = localStorage.getItem("puntos");
            console.log("aca " + puntajeAcumulado)

                       
        },
     

    },

})





datosCarta.traerCarta()



const seccionPuntajes = new Vue({
    el: '#seccionPuntajes',
    data: {
        records: {
            TROMLOV: 2000,
            RETTOPYRRAH: 1620,
            ENOIAMREH: 950,
            NombreInv

        }
        
    }

})

