angular
  .module('proyecto')
  .factory('FactorySucursal', function (ServicioPizzeria) {

    var objeto = {};
    objeto.Listado = Listado;
    objeto.Guardar = Guardar;
    objeto.Editar = Editar;

    return objeto;

    function Listado() {
      return ServicioPizzeria.Listado("http://localhost:8080/Pagano.FINAL/ws1/sucursales");
    }
    function Guardar(sucursal){
        return ServicioPizzeria.Guardar("http://localhost:8080/Pagano.FINAL/ws1/sucursal",sucursal);
    }
    function Editar(sucursal){
        return ServicioPizzeria.Editar("http://localhost:8080/Pagano.FINAL/ws1/sucursalM",sucursal);
    }



})