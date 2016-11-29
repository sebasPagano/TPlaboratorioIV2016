angular
  .module('proyecto')
  .controller('LoginCtrl',function($scope,$http,$auth,$state){

    $scope.datos = {};

    $scope.datos.correo="admin@admin.com";//modifique
    $scope.datos.nombre="admin";
    $scope.datos.clave="321";
    $scope.login = function (){

        $auth.login({
            nombre: $scope.datos.nombre,
            usuario: $scope.datos.correo,
         clave:$scope.datos.clave
     })
        .then(function(response){
            if($auth.isAuthenticated()){
                //Si se logueó correctamente, isAuthenticated vale true. Entonces muestro por consola y redirijo al ABM.
                console.log("Sesión iniciada!");
                console.info("Info isAuthenticated: ", $auth.isAuthenticated());
                console.info("Info getPayload: ", $auth.getPayload());
                console.info("Info response: ", response);
                $state.go('abm.bienvenido');
            }
            else{
                console.info("Info isAuthenticated: ", $auth.isAuthenticated());
                console.info("info no-login: ", $auth.getPayload());
                console.info("Info response: ", response);
            }
        },
        function(err){
            console.log("Error de conexión", err);
        });

    }
        $scope.Acceso = function(nombre, correo, clave){
        $scope.datos.correo = correo;
        $scope.datos.clave = clave;
        $scope.datos.nombre = nombre;
    }

})