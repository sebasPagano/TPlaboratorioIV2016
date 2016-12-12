angular
  .module('proyecto')
  .controller('abmAltaProductoCtrl',function($scope,$http,FileUploader,$auth,$state,FactoryProducto){
 
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




  $scope.usuario = $auth.getPayload().usuarioLogueado;
    $scope.alta = {};
 
    $scope.guardar = function(){

       // $scope.nombreF = $scope.item.file.name;
        $scope.alta.foto = $scope.uploader.queue[0].file.name;

       /* $http.post("http://localhost:8080/Pagano.FINAL/ws1/producto",$scope.alta)
            .then(function (respuesta){

            console.info("Exito", respuesta);
        


        },function(error){

            console.info("Error: ", error);

        });*/
        FactoryProducto.Guardar($scope.alta).then(function(respuesta){
        console.log("Exito",respuesta);
      

        },function(error){

            console.info("Error: ", error);

        });
        $state.go('menu.grillaProducto');


    }

})