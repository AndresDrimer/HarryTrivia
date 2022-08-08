
// componente header
const headerTemplate = new Vue({
  el: "#headerTemplate",
  data: {
    vista: 'componente'
  },
  components: {
    'componente': {
      template: `<div id="headerTemplate">
                    <div id="headerDesktop"></div>
                    <div id="contenedorLogoHeader">
                        <div id="flexLogoHeader">
                            <img src='img/desktop/signoPregunta.png' class="signoPreguntaLogoHeader">
                            <img src='img/desktop/HARRY logo.png' id="logoHeader">
                            <img src='img/desktop/signoPregunta.png' class="signoPreguntaLogoHeader">
                        </div>
                    </div>
                </div>`
    }
  }
});


    
