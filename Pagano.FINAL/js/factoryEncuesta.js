angular
  .module('proyecto')
  .factory('FactoryEncuesta', function (ServicioPizzeria) {

    var objeto = {};
    objeto.Guardar = Guardar;


    return objeto;


    function Guardar(pedido){
        return ServicioPizzeria.Guardar("http://localhost:8080/Pagano.FINAL/ws1/encuesta",pedido);
    }



})