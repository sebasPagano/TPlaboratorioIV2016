angular
  .module('proyecto')
  .controller('SucursalAltaCtrl',function($scope,$http,FileUploader,$auth,$state,FactorySucursal){

  	$scope.alta = {};

    $scope.uploader = new FileUploader({url: 'PHP/upload.php'});
    $scope.uploader.queueLimit = 10;

    $scope.cargar = function(){
          /** llamo a la funcion uploadAll para cargar toda la cola de archivos **/
          $scope.uploader.uploadAll();
          /** agrego mi funcionalidad **/
      }

            $scope.uploader.onErrorItem = function(fileItem, response, status, headers) {
          console.info('onErrorItem', fileItem, response, status, headers);
      };

      $scope.uploader.onCompleteAll = function() {
          console.info('Se cargo con exito');
      };


    $scope.guardar = function(){

       /* var objetoUsuario = JSON.stringify($scope.alta);
        console.info(objetoUsuario);
        */
        $scope.alta.foto1 = $scope.uploader.queue[0].file.name;
        $scope.alta.foto2= $scope.uploader.queue[1].file.name;
        $scope.alta.foto3= $scope.uploader.queue[2].file.name;
/*
        $http.post("http://localhost:8080/Pagano.FINAL/ws1/sucursal" ,$scope.alta)
            .then(function (respuesta){

            console.info("Exito", respuesta);


        },function(error){

            console.info("Error: ", error);

        });*/
        FactorySucursal.Guardar($scope.alta).then(function(respuesta){
        console.log("Exito",respuesta);
      

        },function(error){

            console.info("Error: ", error);

        });


    }

})