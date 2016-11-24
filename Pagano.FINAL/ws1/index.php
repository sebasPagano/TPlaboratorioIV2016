<?php

/**
 * Step 1: Require the Slim Framework using Composer's autoloader
 *
 * If you are not using Composer, you need to load Slim Framework with your own
 * PSR-4 autoloader.
 */
require 'vendor/autoload.php';
require '../PHP/AccesoDatos.php';
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
});
/* POST: Para crear recursos */
$app->post('/usuario/{user}', function ($request, $response, $args) {

    
    $usuario = json_decode($args["user"]);


    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
    $consulta =$objetoAccesoDato->RetornarConsulta("INSERT INTO misusuarios (correo, nombre, clave, tipo)
                VALUES (:correo, :nombre, :clave, :tipo)");
    $consulta->bindValue(":nombre", $usuario->nombre, PDO::PARAM_STR);
    $consulta->bindValue(":correo", $usuario->correo, PDO::PARAM_STR);
    $consulta->bindValue(":clave", $usuario->clave, PDO::PARAM_STR);
    $consulta->bindValue(":tipo", $usuario->tipo, PDO::PARAM_STR);
    $consulta->execute();

    return $objetoAccesoDato->RetornarUltimoIdInsertado();

});

// /* PUT: Para editar recursos */
$app->put('/usuario/{objeto}', function ($request, $response, $args) {
    
    $usuario = json_decode($args["objeto"]);

            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
            $consulta = $objetoAccesoDato->RetornarConsulta("UPDATE misusuarios
                SET correo = :correo, nombre = :nombre, clave = :clave, tipo = :tipo
                WHERE id = :id");
            $consulta->bindValue(":nombre", $usuario->nombre, PDO::PARAM_STR);
            $consulta->bindValue(":correo", $usuario->correo, PDO::PARAM_STR);
            $consulta->bindValue(":clave", $usuario->clave, PDO::PARAM_STR);
            $consulta->bindValue(":tipo", $usuario->tipo, PDO::PARAM_STR);
            $consulta->bindValue(":id", $usuario->id, PDO::PARAM_INT);
            return $consulta->execute();

     

});

// /* DELETE: Para eliminar recursos */
$app->delete('/usuario/{id}', function ($request, $response, $args) {

    $id = $args["id"];
    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
    $consulta =$objetoAccesoDato->RetornarConsulta("DELETE  FROM misusuarios WHERE id = :id ");
    $consulta->bindValue(':id',$id, PDO::PARAM_STR);
    $consulta->execute();

    return $consulta->rowCount();
    
});

$app->get('/users', function ($request, $response, $args) {

    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
    $consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM misusuarios ");
    $consulta->execute();
    $arrVotos = json_encode($consulta->fetchAll());
    return $arrVotos; 

    
});

//PRODUCTOS

$app->get('/productos', function ($request, $response, $args) {

    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
    $consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM misproductos ");
    $consulta->execute();
    $arrVotos = json_encode($consulta->fetchAll());
    return $arrVotos; 

    
});
//agregar producto
$app->post('/producto/{prod}', function ($request, $response, $args) {

    
    $producto = json_decode($args["prod"]);


    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
    $consulta =$objetoAccesoDato->RetornarConsulta("INSERT INTO misproductos (nombre, precio)
                VALUES (:nombre, :precio)");
    $consulta->bindValue(":nombre", $producto->nombre, PDO::PARAM_STR);
    $consulta->bindValue(":precio", $producto->precio, PDO::PARAM_STR);
    $consulta->execute();

    return $objetoAccesoDato->RetornarUltimoIdInsertado();

});

//modificar producto

$app->put('/producto/{objeto}', function ($request, $response, $args) {
    
    $producto = json_decode($args["objeto"]);

    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
    $consulta = $objetoAccesoDato->RetornarConsulta("UPDATE misproductos
        SET nombre = :nombre, precio = :precio WHERE id = :id");
    $consulta->bindValue(":nombre", $producto->nombre, PDO::PARAM_STR);
    $consulta->bindValue(":precio", $producto->precio, PDO::PARAM_STR);
    $consulta->bindValue(":id", $producto->id, PDO::PARAM_INT);
    return $consulta->execute();

     

});

//Borrar productos

$app->delete('/producto/{id}', function ($request, $response, $args) {

    $id = $args["id"];
    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
    $consulta =$objetoAccesoDato->RetornarConsulta("DELETE  FROM misproductos WHERE id = :id ");
    $consulta->bindValue(':id',$id, PDO::PARAM_STR);
    $consulta->execute();

    return $consulta->rowCount();
    
});
/**
 * Step 4: Run the Slim application
 *
 * This method should be called last. This executes the Slim application
 * and returns the HTTP response to the HTTP client.
 */
$app->run();
