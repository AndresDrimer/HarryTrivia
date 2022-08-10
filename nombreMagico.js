// mostrar nombre magico
let app = new Vue({
    el:"#app",
    data:{
      nombreIngresado: "",
      nombreInv: "",
      mensaje: "TU NOMBRE MÁGICO ES: ",
      show: true
    },
    methods: {
      mostrarNombreInv: function () {
        this.nombreInv = this.nombreIngresado.split("").reverse().join("")
        this.show = false
      }
   
    },
  });
  