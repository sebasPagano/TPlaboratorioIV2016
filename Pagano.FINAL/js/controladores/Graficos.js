angular
  .module('proyecto')
  .controller('GraficosCtrl',function($scope,$http,$auth,$state){

  	// $scope.chartConfig.series[0].data = [1, 2, 3];

  		/*$http.get("http://localhost:8080/Pagano.FINAL/ws1/sucursales")
	    .then(function (respuesta){

	        $scope.listado = respuesta.data;
	        console.info("Listado: ", $scope.listado);
	        $scope.chartConfig.series[0].data = [$scope.listado[0].id, 2, 3];

	    },function(error){

	        console.info("Error: ", error);

	    });

  	$scope.chartConfig = {

  options: {
      //This is the Main Highcharts chart config. Any Highchart options are valid here.
      //will be overriden by values specified below.
      chart: {
          type: 'line'
      },
      tooltip: {
          style: {
              padding: 10,
              fontWeight: 'bold'
          }
      }
  },
  //The below properties are watched separately for changes.

  //Series object (optional) - a list of series using normal Highcharts series options.
  series: [{
     name: 'Ventas por local',
     data: [0, 0, 0]
  }],
  //Title configuration (optional)
  title: {
     text: ''
  },
  //Boolean to control showing loading status on chart (optional)
  //Could be a string if you want to show specific loading text.
  loading: false,
  //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
  //properties currentMin and currentMax provided 2-way binding to the chart's maximum and minimum
  xAxis: {
          title: {
            text: 'Sucursales'
          },
          categories: ['Sucursal 1', 'Sucursal 2', 'Sucursal 3']
        },
  yAxis: {
          // Pongo el título para el eje de las 'Y'
          title: {
            text: 'N° de ventas'
          }
        },
  //Whether to use Highstocks instead of Highcharts (optional). Defaults to false.
  useHighStocks: false,
  
  //function (optional)
  func: function (chart) {
   //setup some logic for the chart
  }
};*/

})