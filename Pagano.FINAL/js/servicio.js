angular
  .module('proyecto')
  .service('ServicioPizzeria', function ($http) {


    this.Listado = function (ruta) {
    return  $http.get(ruta);
    }
    this.Guardar = function(ruta , objeto){
    	return  $http.post(ruta,objeto);
    }
    this.Borrar = function(ruta){
    	return $http.delete(ruta);
    }
    this.Editar = function(ruta , objeto){
    	return  $http.put(ruta,objeto);
    }



  })