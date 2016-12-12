angular
  .module('proyecto')
  .controller('OfertasGrillaCtrl',function($scope,$http,FileUploader,$auth,FactoryOferta){

    $scope.usuario = $auth.getPayload().usuarioLogueado;
	var f = new Date();
    var fecha =f.getFullYear() + "-"+(f.getMonth() +1)+"-"+f.getDate();
	$scope.fechaHoy= new Date(f.getFullYear(), f.getMonth(), f.getDate());
 
	$scope.listado = {};
    $scope.modificar = {};
    $scope.modo = false;

    FactoryOferta.Listado().then(function(respuesta){
       
     
        $scope.listado = respuesta.data;
        console.info("Listado: ", $scope.listado);
       for(var i=0;i<$scope.listado.length;i++)
      {
        
        if($scope.listado[i].fecha< fecha)
        {

            FactoryOferta.Borrar($scope.listado[i].id_oferta).then(function(rta){
           
            console.info("Filas restantes: ", rta);

          },function(error){

            console.info("Error: ", error);

          });
        }
       }


      },function(error){

        console.info("Error: ", error);

    });

   /* $http.get("http://localhost:8080/Pagano.FINAL/ws1/ofertas")
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
*/
    

    $scope.desplegarMod = function (oferta){

        $scope.modificar = oferta;
        $scope.modo = true;

        $scope.modificar.nombre = oferta.nombre;
        $scope.modificar.fecha = new Date(oferta.fecha);
        $scope.modificar.id_Local = oferta.id_Local;
        console.info("Modificacionlsitado",$scope.listado);
    }

    $scope.actualizar = function(){

        /*
        $http.put("http://localhost:8080/Pagano.FINAL/ws1/ofertaM",$scope.modificar)
            .then(function (respuesta){

                console.info("Modificado: ", respuesta.data);
                $scope.modo = false;


            },function(error){

                console.info("Error: ", error);

        });*/
       FactoryOferta.Editar($scope.modificar).then(function(rta){
        console.info("Modificado: ", rta);
        $scope.modo = false;
      

        },function(error){

            console.info("Error: ", error);

        });

    }            

    

})