angular
  .module('proyecto')
  .controller('SucursalGrillaCtrl',function($scope,$http,$auth,$state,NgMap,FactorySucursal,FactoryOferta,FactoryUsuario,FileUploader){

  	    $scope.mapa = {};
  	    $scope.SucursalVer = 0;
  	     $scope.VerOfertas = 0;
  	     $scope.VerFotos = 0;
   		 $scope.latitud = "-34.662189";
   		 $scope.longitud = "-58.364643";

       $scope.Conectado=$auth.isAuthenticated();
     if($scope.Conectado == true)
     {
        $scope.usuario = $auth.getPayload().usuarioLogueado;

        console.log($scope.usuario.id_Local)

    }

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
/*
	   	$http.get("http://localhost:8080/Pagano.FINAL/ws1/sucursales")
	    .then(function (respuesta){

	        $scope.listado = respuesta.data;
	        console.info("Listado: ", $scope.listado);


	    },function(error){

	        console.info("Error: ", error);

	    });*/

  

	    FactorySucursal.Listado().then(function(respuesta){
        console.log("Listado con factory: ",respuesta.data);
        $scope.listado = respuesta.data;

      },function(error){

        console.info("Error: ", error);

    });

     /*   FactoryUsuario.Listado().then(function(respuesta){
        console.log("Listado con factory: ",respuesta.data);
        $scope.listadoUsuarios = respuesta.data;

      },function(error){

        console.info("Error: ", error);

    });
        $scope.ModificaLocal= false;
      for(var i =0; i<$scope.listadoUsuarios.length; i++)
      {
        if($scope.listadoUsuarios[i].id_Local == $scope.listado[i].id_Local)
        {
          $scope.ModificaLocal =true;
        }

      }*/

	    $scope.GPS = function(latitud,longitud,id)
	    {
	    $scope.SucursalVer = 1;
	    $scope.latitud = latitud;
   		$scope.longitud = longitud;
   		$scope.SucursalId = id;

	    }
	    $scope.OCULTAR = function()
	    {
	    $scope.SucursalVer = 0;
	    }

	   	$scope.OcultarOFERTA = function()
	    {
	     $scope.VerOfertas = 0;
	    }
	    $scope.Ofertas = function(id)
	    {
	    $scope.VerOfertas = 1;
	    $scope.IDLOCAL = id;
/*
	    $http.get("http://localhost:8080/Pagano.FINAL/ws1/ofertas").then(function (respuesta){

	        $scope.listadoOferta = respuesta.data;
	        
	      

	    },function(error){

	        console.info("Error: ", error);

	    });*/
      FactoryOferta.Listado().then(function(respuesta){
        console.log("Listado con factory: ",respuesta.data);
        $scope.listadoOferta = respuesta.data;

      },function(error){

        console.info("Error: ", error);

    });


	    }
	    $scope.Fotos = function(id)
	    {
	    	$scope.VerFotos = 1;
	    	$scope.SucursalIdFoto = id;
	    }
	    $scope.OcultarFotos = function()
	    {
	     $scope.VerFotos = 0;
	    }

	    $scope.desplegarMod = function (sucursal){

        $scope.modificar = sucursal;  
        $scope.modificar.localidad = sucursal.localidad;
        $scope.modificar.latitud = sucursal.latitud;
        $scope.modificar.longitud = sucursal.longitud;
        $scope.modificar.direccion = sucursal.direccion;
       
        $scope.modo = true;


    }

    $scope.actualizar = function(){

        //$objetoUsuario = JSON.stringify($scope.modificar);
        
        $scope.modificar.foto1 = $scope.uploader.queue[0].file.name;
        $scope.modificar.foto2= $scope.uploader.queue[1].file.name;
        $scope.modificar.foto3= $scope.uploader.queue[2].file.name;
        /*
        $http.put("http://localhost:8080/Pagano.FINAL/ws1/productoM",$scope.modificar)
            .then(function (respuesta){

                console.info("Modificado: ", respuesta.data);
                $scope.modo = false;


            },function(error){

                console.info("Error: ", error);

        });*/
       FactorySucursal.Editar($scope.modificar).then(function(respuesta){
        console.info("Modificado: ", respuesta);
        $scope.modo = false;
      

        },function(error){

            console.info("Error: ", error);

        });

    }      


})