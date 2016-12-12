angular
  .module('proyecto')
  .controller('GraficosCtrl',function($scope,$http,$auth,$state,FactorySucursal,FactoryPedido){

/*
       FactorySucursal.Listado().then(function(respuesta){
        console.log("Listado con factory: ",respuesta.data);
        $scope.listadoSucursales = respuesta.data;

      },function(error){

        console.info("Error: ", error);

    });*/
        $scope.contador1 = 0;
        $scope.contador2 = 0;
        $scope.contador3 = 0;
        $scope.contador4 = 0;

        $scope.contador1pl = 0;
        $scope.contador2pl = 0;
        $scope.contador3pl = 0;
        $scope.contador4pl = 0;

        $scope.contador1p = 0;
        $scope.contador2p = 0;
        $scope.contador3p = 0;
        $scope.contador4p = 0;
        $scope.contador5p = 0;
        $scope.contador6p = 0;
        $scope.contador7p = 0;
        $scope.contador8p = 0;
        $scope.contador9p = 0;
        $scope.contador10p = 0;
        $scope.contador11p= 0;
        $scope.contador12p = 0;
        $scope.contador13p= 0;

        $scope.listado = [];
        $scope.pieData = [];
        $scope.ver = false;
        $scope.verProducto = false;
        $scope.verPendiente = false;

        FactoryPedido.Listado().then(function(respuesta){
 
        $scope.listado = respuesta.data;
  
       
      },function(error){

        console.info("Error: ", error);

    });

        $scope.VentasPorProducto = function(listado)
        {
        $scope.ver = false;
        $scope.verProducto = true;
        $scope.verPendiente = false;
           console.log("mi lista",listado);

            for(var i=0;i<$scope.listado.length;i++)
        {
          if($scope.listado[i].id_producto == "1" && $scope.listado[i].estado =="cerrado")
          {
            $scope.contador1p++;
          }
          if($scope.listado[i].id_producto == "2" && $scope.listado[i].estado =="cerrado")
          {
            $scope.contador2p++;
          }
          if($scope.listado[i].id_producto == "3" && $scope.listado[i].estado =="cerrado")
          {
            $scope.contador3p++;
          }
          if($scope.listado[i].id_producto == "4" && $scope.listado[i].estado =="cerrado")
          {
            $scope.contador4p++;
          }
          if($scope.listado[i].id_producto == "5" && $scope.listado[i].estado =="cerrado")
          {
            $scope.contador5p++;
          }
          if($scope.listado[i].id_producto == "6" && $scope.listado[i].estado =="cerrado")
          {
            $scope.contador6p++;
          }
          if($scope.listado[i].id_producto == "7" && $scope.listado[i].estado =="cerrado")
          {
            $scope.contador7p++;
          }
          if($scope.listado[i].id_producto == "8" && $scope.listado[i].estado =="cerrado")
          {
            $scope.contador8p++;
          }
          if($scope.listado[i].id_producto == "9" && $scope.listado[i].estado =="cerrado")
          {
            $scope.contador9p++;
          }
          if($scope.listado[i].id_producto == "10" && $scope.listado[i].estado =="cerrado")
          {
            $scope.contador10p++;
          }
          if($scope.listado[i].id_producto == "11" && $scope.listado[i].estado =="cerrado")
          {
            $scope.contador11p++;
          }
          if($scope.listado[i].id_producto == "12" && $scope.listado[i].estado =="cerrado")
          {
            $scope.contador12p++;
          }
            if($scope.listado[i].id_producto == "13" && $scope.listado[i].estado =="cerrado")
          {
            $scope.contador13p++;
          }



        }
$scope.pieData = [
        {
          value: $scope.contador1p,
          color: "#e3e860",
          highlight: "#a9ad47",
          label: "Muzzarela"
        },
        {
          value: $scope.contador2p,
          color: "#eb5d82",
          highlight: "#b74865",
          label: "Muzzarella Jamon y Morrones"
        },
        {
          value: $scope.contador3p,
          color: "#5ae85a",
          highlight: "#42a642",
          label: "Fugazzetta"
        },
        {
          value: $scope.contador4p,
          color: "#e965db",
          highlight: "#a6429b",
          label: "Fugazzetta Rellena"
        },
        {
          value: $scope.contador5p,
          color: "#e3e860",
          highlight: "#a9ad47",
          label: "Napolitana"
        },
        {
          value: $scope.contador6p,
          color: "#eb5d82",
          highlight: "#b74865",
          label: "Anchoas"
        },
        {
          value: $scope.contador7p,
          color: "#5ae85a",
          highlight: "#42a642",
          label: "Provolone"
        },
        {
          value: $scope.contador8p,
          color: "#e965db",
          highlight: "#a6429b",
          label: "Roquefort"
        },
        {
          value: $scope.contador9p,
          color: "#e3e860",
          highlight: "#a9ad47",
          label: "Cuatro Quesos"
        },
        {
          value: $scope.contador10p,
          color: "#eb5d82",
          highlight: "#b74865",
          label: "Cheddar Y Panceta"
        },
        {
          value: $scope.contador11p,
          color: "#5ae85a",
          highlight: "#42a642",
          label: "Verdura"
        },
        {
          value: $scope.contador12p,
          color: "#e965db",
          highlight: "#a6429b",
          label: "Palmito"
        },
         {
          value: $scope.contador13p,
          color: "#e965db",
          highlight: "#a6429b",
          label: "Rucula y Parmesano"
        }
      ];

      var ctx = document.getElementById("chart-area").getContext("2d");
      window.myPie = new Chart(ctx).Pie($scope.pieData); 
}


$scope.VentasPorLocal = function(listado)
{
        $scope.ver = true;
        $scope.verProducto = false;
        $scope.verPendiente = false;

        for(var i=0;i<$scope.listado.length;i++)
        {
          if($scope.listado[i].id_Local == "1" && $scope.listado[i].estado =="cerrado")
          {
            $scope.contador1++;
          }
          if($scope.listado[i].id_Local == "2" && $scope.listado[i].estado =="cerrado")
          {
            $scope.contador2++;
          }
          if($scope.listado[i].id_Local == "3" && $scope.listado[i].estado =="cerrado")
          {
            $scope.contador3++;
          }
          if($scope.listado[i].id_Local == "4" && $scope.listado[i].estado =="cerrado")
          {
            $scope.contador4++;
          }


        }


  var barChartData = {
    labels : ["Wilde","Lanus Oeste","Banfield","Alsina"],
    datasets : [
      {
        fillColor : "#6b9dfa",
        strokeColor : "#ffffff",
        highlightFill: "#1864f2",
        highlightStroke: "#ffffff",
        data : [$scope.contador1,$scope.contador2,$scope.contador3,$scope.contador4]
      }
    ]
   
  }
var ctx3 = document.getElementById("chart-area3").getContext("2d");
   window.myPie = new Chart(ctx3).Bar(barChartData, {responsive:true});
 }

 $scope.PedidosPendientesPorLocal = function(listado)
 {

        $scope.ver = false;
        $scope.verProducto = false;
        $scope.verPendiente = true;

    for(var i=0;i<$scope.listado.length;i++)
        {
          if($scope.listado[i].id_Local == "1" && $scope.listado[i].estado =="pendiente")
          {
            $scope.contador1pl++;
          }
          if($scope.listado[i].id_Local == "2" && $scope.listado[i].estado =="pendiente")
          {
            $scope.contador2pl++;
          }
          if($scope.listado[i].id_Local == "3" && $scope.listado[i].estado =="pendiente")
          {
            $scope.contador3pl++;
          }
          if($scope.listado[i].id_Local == "4" && $scope.listado[i].estado =="pendiente")
          {
            $scope.contador4pl++;
          }
        }

          var pieData = [
        {
          value: $scope.contador1pl,
          color: "#e3e860",
          highlight: "#a9ad47",
          label: "Wilde"
        },
        {
          value: $scope.contador2pl,
          color: "#eb5d82",
          highlight: "#b74865",
          label: "Lanus Oeste"
        },
        {
          value: $scope.contador3pl,
          color: "#5ae85a",
          highlight: "#42a642",
          label: "Banfield"
        },
        {
          value: $scope.contador4pl,
          color: "#e965db",
          highlight: "#a6429b",
          label: "Alsina"
        }
      ];


        
        var ctx2 = document.getElementById("chart-area2").getContext("2d");
        window.myPie = new Chart(ctx2).Doughnut(pieData);   

  }
 
})