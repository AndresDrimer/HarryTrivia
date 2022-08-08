// mostrar nombre magico
let app = new Vue({
    el:"#app",
    data:{
      NombreIngresado: "",
      NombreInv: "",
      mensaje: "TU NOMBRE MÁGICO ES: ",
    },
    methods: {
      mostrarNombreInv: function () {
        this.NombreInv = this.NombreIngresado.split("").reverse().join("")
      }
   
    },
  });
  