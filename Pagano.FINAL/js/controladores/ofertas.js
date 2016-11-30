angular
  .module('proyecto')
  .controller('OfertasGrillaCtrl',function($scope,$http,FileUploader,$auth){


	var f = new Date();
	var fecha =f.getFullYear() + "-"+(f.getMonth() +1)+"-"+f.getDate();
	console.log(fecha);

	$scope.listado = {};
    $scope.modificar = {};
    $scope.modo = false;


    $http.get("http://localhost:8080/Pagano.FINAL/ws1/ofertas")
    .then(function (respuesta){
    	var fecha =f.getFullYear() + "-"+(f.getMonth() +1)+"-"+f.getDate();
        $scope.listado = respuesta.data;
        console.info("Listado: ", $scope.listado);
       for(var i=0;i<$scope.listado.length;i++)
   	{
    	console.log($scope.listado[i].fecha);

    	if($scope.listado[i].fecha < fecha)
    	{

	      $http.delete("http://localhost:8080/Pagano.FINAL/ws1/oferta/"+ $scope.listado[i].id_oferta)
            .then(function (respuesta){

                console.info("Filas restantes: ", respuesta.data);


            },function(error){

                console.info("Error: ", error);

        });
		}
   	   }



    },function(error){

        console.info("Error: ", error);

    });

    

    $scope.desplegarMod = function (oferta){

        $scope.modificar = oferta;
        $scope.modo = true;

        $scope.modificar.nombre = oferta.nombre;
        $scope.modificar.fecha = oferta.fecha;
        console.info("Modificacionlsitado",$scope.listado);
    }

    $scope.actualizar = function(){

        
        $http.put("http://localhost:8080/Pagano.FINAL/ws1/ofertaM",$scope.modificar)
            .then(function (respuesta){

                console.info("Modificado: ", respuesta.data);
                $scope.modo = false;


            },function(error){

                console.info("Error: ", error);

        });

    }            

    

})