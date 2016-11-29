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
	public static function TraerProductoPorId($id){
		$conexion = self::CrearConexion();
		$sql = "SELECT U.id, U.nombre, U.email, U.perfil
				FROM usuarios U
				WHERE U.id = :id";
		$consulta = $conexion->prepare($sql);
		$consulta->bindValue(":id", $id, PDO::PARAM_INT);
		$consulta->execute();
		$usuario = $consulta->fetchObject('Usuario');
		return $usuario;
	}
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
	    $consulta->bindValue(":precio", $producto["precio"], PDO::PARAM_STR);
	    $consulta->bindValue(":foto", $producto["foto"], PDO::PARAM_STR);
	    $consulta->execute();

	    return $objetoAccesoDato->RetornarUltimoIdInsertado();
	}

	public static function Modificar($producto){
	    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	    $consulta = $objetoAccesoDato->RetornarConsulta("UPDATE misproductos
	        SET nombre = :nombre, precio = :precio, foto = :foto WHERE id = :id");
	    $consulta->bindValue(":nombre", $producto["nombre"], PDO::PARAM_STR);
	    $consulta->bindValue(":precio", $producto["precio"], PDO::PARAM_STR);
	    $consulta->bindValue(":foto", $producto["foto"], PDO::PARAM_STR);
	    $consulta->bindValue(":id", $producto["id"], PDO::PARAM_INT);
	    return $consulta->execute();
	}

	public static function Eliminar($id){
	    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	    $consulta =$objetoAccesoDato->RetornarConsulta("DELETE  FROM misproductos WHERE id = :id ");
	    $consulta->bindValue(':id',$id, PDO::PARAM_STR);
	    $consulta->execute();

	    return $consulta->rowCount();
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