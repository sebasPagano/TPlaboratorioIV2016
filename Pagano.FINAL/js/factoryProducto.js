angular
  .module('proyecto')
  .factory('FactoryProducto', function (ServicioPizzeria) {

    var objeto = {};
    objeto.Listado = Listado;
    objeto.Guardar = Guardar;
    objeto.Borrar = Borrar;
    objeto.Editar = Editar;

    return objeto;

    function Listado() {
      return ServicioPizzeria.Listado("http://localhost:8080/Pagano.FINAL/ws1/productos");
    }
    function Guardar(producto){
        return ServicioPizzeria.Guardar("http://localhost:8080/Pagano.FINAL/ws1/producto",producto);
    }
    function Borrar(id){
        return ServicioPizzeria.Borrar("http://localhost:8080/Pagano.FINAL/ws1/producto/"+id);

    }
    function Editar(producto){
        return ServicioPizzeria.Editar("http://localhost:8080/Pagano.FINAL/ws1/productoM",producto);
    }



})