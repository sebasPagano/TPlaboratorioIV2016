<?php

/**
 * Step 1: Require the Slim Framework using Composer's autoloader
 *
 * If you are not using Composer, you need to load Slim Framework with your own
 * PSR-4 autoloader.
 */
require 'vendor/autoload.php';
require '../PHP/AccesoDatos.php';
require '../PHP/Usuario.php';
require '../PHP/Producto.php';
//require '../AccesoDatos.php';

/**
 * Step 2: Instantiate a Slim application
 *
 * This example instantiates a Slim application using
 * its default settings. However, you will usually configure
 * your Slim application now by passing an associative array
 * of setting names and values into the application constructor.
 */
$app = new Slim\App();

/**
 * Step 3: Define the Slim application routes
 *
 * Here we define several Slim application routes that respond
 * to appropriate HTTP request methods. In this example, the second
 * argument for `Slim::get`, `Slim::post`, `Slim::put`, `Slim::patch`, and `Slim::delete`
 * is an anonymous function.
 */
/**
* GET: Para consultar y leer recursos
* POST: Para crear recursos
* PUT: Para editar recursos
* DELETE: Para eliminar recursos
*
*  GET: Para consultar y leer recursos */
/*
$app->post('/usuarios/foto', function ($request, $response, $args) {
    
    
    
});

$app->get('/usuarios[/]', function ($request, $response, $args) {
    $response->write("Lista de usuarios");
    
    return $response;
});

$app->get('/usuario[/{id}[/{name}]]', function ($request, $response, $args) {
    $response->write("Datos usuario ");
    var_dump($args);
    return $response;
});*/
/* POST: Para crear recursos */
$app->post('/usuario', function ($request, $response, $args){

    //var_dump($request->getParsedBody());
    $array = [];
   
    $usuario = $request->getParsedBody();
    $array["rta"]= Usuario::Agregar($usuario);

  

    return  $response->write($array["rta"]);

});

// /* PUT: Para editar recursos */
$app->put('/usuarioM', function ($request, $response, $args) {
    
 
    $array = [];
    $usuario = $request->getParsedBody();
    $array["rta"]= Usuario::Modificar($usuario);

    return  $response->write($array["rta"]+"xd");
     

});

// /* DELETE: Para eliminar recursos */
$app->delete('/usuario/{id}', function ($request, $response, $args) {

    $id = $args["id"];
    $array = [];
    $array["rta"]= Usuario::Eliminar($id);

    return  $response->write($array["rta"]);

    
});

$app->get('/users', function ($request, $response, $args) {

    $array=[];
    $array["rta"]= Usuario::TraerTodosLosUsuarios();
    return  $response->write($array["rta"]);

    
});



//PRODUCTOS

$app->get('/productos', function ($request, $response, $args) {

    $array=[];
    $array["rta"]= Producto::TraerTodosLosProductos();
    return  $response->write($array["rta"]);


    
});
//agregar producto
$app->post('/producto', function ($request, $response, $args) {

    $array = [];
    $producto = $request->getParsedBody();
    $array["rta"]= Producto::Agregar($producto);


    return  $response->write($array["rta"]);


});

//modificar producto

$app->put('/productoM', function ($request, $response, $args) {

    $array = [];
    $producto = $request->getParsedBody();
    $array["rta"]= Producto::Modificar($producto);


    return  $response->write($array["rta"]);

     

});

//Borrar productos

$app->delete('/producto/{id}', function ($request, $response, $args) {

    $id = $args["id"];
    $array = [];
    $producto = $request->getParsedBody();
    $array["rta"]= Producto::Eliminar($id);


    return  $response->write($array["rta"]);

});

//Buscar producto por id
$app->get('/productos/{id}', function ($request, $response, $args) {

    $id = $args["id"];
    $array = [];
    $array["rta"]= Producto::TraerProductoPorId($id);
    return  $response->write($array["rta"]);   
});

$app->post('/oferta', function ($request, $response, $args) {

    $array = [];
    $oferta = $request->getParsedBody();

    $array["rta"]= Producto::AgregarOferta($oferta);


    return  $response->write($array["rta"]);


});

$app->get('/ofertas', function ($request, $response, $args) {

    $array=[];
    $array["rta"]= Producto::TraerTodasLasOfertas();
    return  $response->write($array["rta"]);


});

$app->put('/ofertaM', function ($request, $response, $args) {

    $array = [];
    $oferta = $request->getParsedBody();
    $array["rta"]= Producto::ModificarOferta($oferta);


    return  $response->write($array["rta"]);

    
});

$app->delete('/oferta/{id}', function ($request, $response, $args) {

    $id = $args["id"];
    $array = [];
    $producto = $request->getParsedBody();
    $array["rta"]= Producto::EliminarOferta($id);


    return  $response->write($array["rta"]);

});




/**
 * Step 4: Run the Slim application
 *
 * This method should be called last. This executes the Slim application
 * and returns the HTTP response to the HTTP client.
 */
$app->run();
