angular
  .module('proyecto')
  .factory('FactoryOferta', function (ServicioPizzeria) {

    var objeto = {};
    objeto.Listado = Listado;
    objeto.Guardar = Guardar;
    objeto.Borrar = Borrar;
    objeto.Editar = Editar;

    return objeto;

    function Listado() {
      return ServicioPizzeria.Listado("http://localhost:8080/Pagano.FINAL/ws1/ofertas");
    }
    function Guardar(oferta){
        return ServicioPizzeria.Guardar("http://localhost:8080/Pagano.FINAL/ws1/oferta",oferta);
    }
    function Borrar(id){
        return ServicioPizzeria.Borrar("http://localhost:8080/Pagano.FINAL/ws1/oferta/"+id);

    }
    function Editar(oferta){
        return ServicioPizzeria.Editar("http://localhost:8080/Pagano.FINAL/ws1/ofertaM",oferta);
    }



})