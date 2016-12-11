angular.module('proyecto')
/*
.directive("utnSaludo",function(){

    return {
        replace:true,
        restrict: "AECM",
        template: "<h1>HOla mundo</h1>"
    }//tipo atributo
})
*/
.directive("mostrarNombre",function(){

    return {
        replace:true,
        restrict: "AECM",
        template: "<div class='p'>Bienvenido {{nombre}}</br> Gracias por iniciar sesion</div>"
    }//tipo atributo
})
/*
.directive("utnTemplate",function(){

    return {
        replace:true, //para que funcione el comentario
        restrict: "AECM",
        templateUrl: "views/Template1.html"
    }//tipo atributo
})

.directive("utnTemplateParametro",function(){

    return {
        replace:true, //para que funcione el comentario
        restrict: "E",
        scope:{miTitulo:'@dato'},
        templateUrl: "views/Template1.html"
    }//tipo atributo
})

.directive("utnBandera",function(){

    return {
        replace:true, //para que funcione el comentario
        restrict: "E",
        scope:{pais:'@pais',
                url:'@url'},
        template:"<h1>{{pais}}<img src={{url}}></img> </h1>"
    }//tipo atributo
})
.directive("miBandera",function(){

    return {
        replace:true, //para que funcione el comentario
        restrict: "E",
        scope:{miBandera:'@bandera'},
        template:"<h1><img src={{miBandera}}></img> </h1>"
    }//tipo atributo
})
.directive("miPais",function(){

    return {
        replace:true, //para que funcione el comentario
        restrict: "E",
        scope:{miPais:'@pais'},
        template:"<h1>{{miPais}}</h1>"
    }//tipo atributo
})
*/

;//finalizacion de referencia al modulo