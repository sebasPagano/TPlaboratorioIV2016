angular
  .module('proyecto')
  .factory('FactoryUsuario', function (ServicioPizzeria) {

    var objeto = {};
    objeto.Listado = Listado;
    objeto.Guardar = Guardar;
    objeto.Borrar = Borrar;
    objeto.Editar = Editar;
    objeto.BuscarPor = BuscarPor;

    return objeto;

    function Listado() {
      return ServicioPizzeria.Listado("http://localhost:8080/Pagano.FINAL/ws1/users");
 

    }
    function Guardar(usuario){
        return ServicioPizzeria.Guardar("http://localhost:8080/Pagano.FINAL/ws1/usuario",usuario);
    }
    function Borrar(id){
        return ServicioPizzeria.Borrar("http://localhost:8080/Pagano.FINAL/ws1/usuario/"+id);

    }
    function Editar(usuario){
        return ServicioPizzeria.Editar("http://localhost:8080/Pagano.FINAL/ws1/usuarioM",usuario);
    }
    function BuscarPor(perfil){
        return ServicioPizzeria.BuscarPor("http://localhost:8080/Pagano.FINAL/ws1/users/"+perfil);
    }



})