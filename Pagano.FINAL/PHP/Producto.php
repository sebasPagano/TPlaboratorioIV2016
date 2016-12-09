<?php 
class Producto{
	//ATRIBUTOS
	public $id;
	public $nombre;
	public $precio;

	//CONSTRUCTOR
	public function __construct($id = NULL)
	{
		if($id != NULL){
			$producto = self::TraerUnUsuarioPorId($id);
			$this->id = $producto->id;
			$this->nombre = $producto->nombre;
			$this->nombre = $producto->nombre;

		}
	}
	//MÉTODOS

	public static function TraerTodosLosProductos(){
	    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	    $consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM misproductos ");
	    $consulta->execute();
	    $arrProductos = json_encode($consulta->fetchAll());
	    return $arrProductos; 
	}


	public static function Agregar($producto){

	    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	    $consulta =$objetoAccesoDato->RetornarConsulta("INSERT INTO misproductos (nombre, precio,foto)
	                VALUES (:nombre, :precio,:foto)");
	    $consulta->bindValue(":nombre", $producto["nombre"], PDO::PARAM_STR);
	    $consulta->bindValue(":precio", $producto["precio"], PDO::PARAM_INT);
	    $consulta->bindValue(":foto", $producto["foto"], PDO::PARAM_STR);
	    $consulta->execute();

	    return $objetoAccesoDato->RetornarUltimoIdInsertado();
	}

	public static function Modificar($producto){
	    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	    $consulta = $objetoAccesoDato->RetornarConsulta("UPDATE misproductos
	        SET nombre = :nombre, precio = :precio, foto = :foto WHERE id_producto = :id");
	    $consulta->bindValue(":nombre", $producto["nombre"], PDO::PARAM_STR);
	    $consulta->bindValue(":precio", $producto["precio"], PDO::PARAM_INT);
	    $consulta->bindValue(":foto", $producto["foto"], PDO::PARAM_STR);
	    $consulta->bindValue(":id", $producto["id_producto"], PDO::PARAM_INT);
	    return $consulta->execute();
	}


	public static function Eliminar($id){
	    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	    $consulta =$objetoAccesoDato->RetornarConsulta("DELETE  FROM misproductos WHERE id_producto = :id ");
	    $consulta->bindValue(':id',$id, PDO::PARAM_STR);
	    $consulta->execute();

	    return $consulta->rowCount();
	}

		public static function TraerProductoPorId($id){
	    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	    $consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM misproductos WHERE id_producto= :id");
	    $consulta->bindValue(":id", $id, PDO::PARAM_STR);
	    $consulta->execute();
	   // $arrProductos = json_encode($consulta->fetchAll());
	   // return $arrProductos; 
	    $producto = json_encode($consulta->fetchObject('Producto'));
		return $producto;
	}

		public static function AgregarOferta($oferta){

	    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	    $consulta =$objetoAccesoDato->RetornarConsulta("INSERT INTO misofertas (nombre, costo,fecha,id_Local)
	                VALUES (:nombre, :costo,:fecha,:id_Local)");
	    $consulta->bindValue(":nombre", $oferta["nombre"], PDO::PARAM_STR);
	    $consulta->bindValue(":costo", $oferta["costo"], PDO::PARAM_INT);
	    $consulta->bindValue(":fecha", $oferta["fecha"], PDO::PARAM_STR);
	    $consulta->bindValue(":id_Local", $oferta["id_Local"], PDO::PARAM_INT);
	   // $consulta->bindValue(":id", $producto["id_producto"], PDO::PARAM_STR);
	    $consulta->execute();

	    return $objetoAccesoDato->RetornarUltimoIdInsertado();
	}

		public static function TraerTodasLasOfertas(){
	    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	    $consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM misofertas ");
	    $consulta->execute();
	    $arrProductos = json_encode($consulta->fetchAll());
	    return $arrProductos; 
	}

		public static function ModificarOferta($oferta){
	    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	    $consulta = $objetoAccesoDato->RetornarConsulta("UPDATE misofertas
	        SET nombre = :nombre, costo = :costo, fecha = :fecha, id_Local = :id_Local WHERE id_oferta = :id");
	    $consulta->bindValue(":nombre", $oferta["nombre"], PDO::PARAM_STR);
	    $consulta->bindValue(":costo", $oferta["costo"], PDO::PARAM_INT);
	    $consulta->bindValue(":fecha", $oferta["fecha"], PDO::PARAM_STR);
	    $consulta->bindValue(":id", $oferta["id_oferta"], PDO::PARAM_INT);
	    $consulta->bindValue(":id_Local", $oferta["id_Local"], PDO::PARAM_INT);
	    return $consulta->execute();
	}

		public static function EliminarOferta($id){
	    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	    $consulta =$objetoAccesoDato->RetornarConsulta("DELETE  FROM misofertas WHERE id_oferta = :id ");
	    $consulta->bindValue(':id',$id, PDO::PARAM_STR);
	    $consulta->execute();

	    return $consulta->rowCount();
	}

		public static function AgregarPedido($pedido){

	    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	    $consulta =$objetoAccesoDato->RetornarConsulta("INSERT INTO mispedidos (descripcion, precio ,cantidad, fecha, estado,id, id_producto)
	                VALUES (:descripcion,:precio,:cantidad,:fecha,:estado ,:id,:id_producto)");
	    $consulta->bindValue(":descripcion", $pedido["descripcion"], PDO::PARAM_STR);
	    $consulta->bindValue(":precio", $pedido["precio"], PDO::PARAM_INT);
	    $consulta->bindValue(":fecha", $pedido["fecha"], PDO::PARAM_STR);
	    $consulta->bindValue(":estado", $pedido["estado"], PDO::PARAM_STR);
	    $consulta->bindValue(":id_producto", $pedido["id_producto"], PDO::PARAM_INT);
	    $consulta->bindValue(":id", $pedido["id"], PDO::PARAM_INT);
	   	$consulta->bindValue(":cantidad", $pedido["cantidad"], PDO::PARAM_INT);
	    $consulta->execute();

	    return $objetoAccesoDato->RetornarUltimoIdInsertado();
	}

	public static function ModificarPedido($pedido){
	    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	    $consulta = $objetoAccesoDato->RetornarConsulta("UPDATE mispedidos
	        SET descripcion = :descripcion, precio = :precio, cantidad = :cantidad,fecha = :fecha,estado = :estado,id=:id,id_producto = :id_producto WHERE id_pedido = :id_pedido");
	    $consulta->bindValue(":descripcion", $pedido["descripcion"], PDO::PARAM_STR);
	    $consulta->bindValue(":precio", $pedido["precio"], PDO::PARAM_INT);
	    $consulta->bindValue(":fecha", $pedido["fecha"], PDO::PARAM_STR);
	     $consulta->bindValue(":estado", $pedido["estado"], PDO::PARAM_STR);
	    $consulta->bindValue(":id_producto", $pedido["id_producto"], PDO::PARAM_INT);
	    $consulta->bindValue(":id", $pedido["id"], PDO::PARAM_INT);
	    $consulta->bindValue(":id_pedido", $pedido["id_pedido"], PDO::PARAM_INT);
	   	$consulta->bindValue(":cantidad", $pedido["cantidad"], PDO::PARAM_INT);
	    return $consulta->execute();
	}

	public static function TraerTodosLosPedidos(){
	    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	    $consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM mispedidos ");
	    $consulta->execute();
	    $arrProductos = json_encode($consulta->fetchAll());
	    return $arrProductos; 
	}

	public static function TraerTodosLosLocales(){
	    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	    $consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM mislocales ");
	    $consulta->execute();
	    $arrProductos = json_encode($consulta->fetchAll());
	    return $arrProductos; 
	}

	public static function AgregarLocal($Local){

	    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	    $consulta =$objetoAccesoDato->RetornarConsulta("INSERT INTO mislocales (localidad, direccion , latitud, longitud,foto1,foto2,foto3)
	                VALUES (:localidad, :direccion , :latitud, :longitud,:foto1,:foto2,:foto3)");
	    $consulta->bindValue(":localidad", $Local["localidad"], PDO::PARAM_STR);
	    $consulta->bindValue(":direccion", $Local["direccion"], PDO::PARAM_STR);
	    $consulta->bindValue(":latitud", $Local["latitud"], PDO::PARAM_STR);
	    $consulta->bindValue(":longitud", $Local["longitud"], PDO::PARAM_STR);
	    $consulta->bindValue(":foto1", $Local["foto1"], PDO::PARAM_STR);
	    $consulta->bindValue(":foto2", $Local["foto2"], PDO::PARAM_STR);
	    $consulta->bindValue(":foto3", $Local["foto3"], PDO::PARAM_STR);
	    $consulta->execute();

	    return $objetoAccesoDato->RetornarUltimoIdInsertado();
	}

		public static function AgregarEncuesta($Encuesta){

	    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	    $consulta =$objetoAccesoDato->RetornarConsulta("INSERT INTO misencuestas (descripcion,tiempo, estado,comentarios)
	                VALUES (:descripcion,:tiempo, :estado, :comentarios)");
	    $consulta->bindValue(":tiempo", $Encuesta["tiempo"], PDO::PARAM_STR);
	    $consulta->bindValue(":estado", $Encuesta["estado"], PDO::PARAM_STR);
	    $consulta->bindValue(":comentarios", $Encuesta["comentarios"], PDO::PARAM_STR);
	    $consulta->bindValue(":descripcion", $Encuesta["descripcion"], PDO::PARAM_STR);

	    $consulta->execute();

	    return $objetoAccesoDato->RetornarUltimoIdInsertado();
	}

	public static function CrearConexion(){
		try
		{
			$conexion = new PDO("mysql:host=localhost;dbname=login_pdo;charset=utf8;",'root','');
			return $conexion;
		}
		catch (Exception $e) {
			print_r("Error: " . $e->GetMessage());
			die();
			return;
		}
	}
}
 ?>