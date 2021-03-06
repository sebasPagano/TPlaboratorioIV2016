angular
  .module('proyecto')
  .factory('FactoryPedido', function (ServicioPizzeria) {

    var objeto = {};
    objeto.Listado = Listado;
    objeto.Guardar = Guardar;
    objeto.Editar = Editar;

    return objeto;

    function Listado() {
      return ServicioPizzeria.Listado("http://localhost:8080/Pagano.FINAL/ws1/pedidos");
    }
    function Guardar(pedido){
        return ServicioPizzeria.Guardar("http://localhost:8080/Pagano.FINAL/ws1/pedido",pedido);
    }
    function Editar(pedido){
        return ServicioPizzeria.Editar("http://localhost:8080/Pagano.FINAL/ws1/pedidoM",pedido);
    }



})