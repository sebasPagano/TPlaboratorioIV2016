<?php 
//require 'AccesoDatos.php';
class Usuario{
	//ATRIBUTOS
	public $id;
	public $nombre;
	public $email;
	public $perfil;
	public $password;
	//CONSTRUCTOR
	public function __construct($id = NULL)
	{
		if($id != NULL){
			$usuario = self::TraerUnUsuarioPorId($id);
			$this->id = $usuario->id;
			$this->nombre = $usuario->nombre;
			$this->email = $usuario->email;
			$this->perfil = $usuario->perfil;
		}
	}
	//MÉTODOS
	public static function TraerUnUsuarioPorId($id){
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
	public static function TraerTodosLosUsuarios(){
	    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
	    $consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM misusuarios ");
	    $consulta->execute();
	    $arrUser = json_encode($consulta->fetchAll());
	    return $arrUser; 
	}

			public static function TraerUsuarioLogueado2($usuario){
		$conexion = self::CrearConexion();
		$sql = "SELECT U.id,  U.correo,U.nombre, U.tipo
				FROM misusuarios U
				WHERE U.correo = :correo AND U.clave = :clave AND U.nombre =:nombre";
		$consulta = $conexion->prepare($sql);
		$consulta->bindValue(":correo", $usuario->usuario, PDO::PARAM_STR);
		$consulta->bindValue(":clave", $usuario->clave, PDO::PARAM_STR);
		$consulta->bindValue(":nombre", $usuario->nombre, PDO::PARAM_STR);
		$consulta->execute();
		$usuarioLogueado = $consulta->fetchObject('Usuario');
		return $usuarioLogueado;
	}



	public static function Agregar($usuario){

	 $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
    $consulta = $objetoAccesoDato->RetornarConsulta("INSERT INTO misusuarios (correo, nombre, clave, tipo)
                VALUES (:correo, :nombre, :clave, :tipo)");
  
    $consulta->bindValue(":nombre", $usuario["nombre"], PDO::PARAM_STR);
    $consulta->bindValue(":correo", $usuario["correo"], PDO::PARAM_STR);
    $consulta->bindValue(":clave", $usuario["clave"], PDO::PARAM_STR);
    $consulta->bindValue(":tipo", $usuario["tipo"], PDO::PARAM_STR);
    $consulta->execute();
    return $objetoAccesoDato->RetornarUltimoIdInsertado();

	}



	public static function Modificar($usuario){
	    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
    $consulta = $objetoAccesoDato->RetornarConsulta("UPDATE misusuarios
        SET correo = :correo, nombre = :nombre, clave = :clave, tipo = :tipo
        WHERE id = :id");
    $consulta->bindValue(":nombre", $usuario["nombre"], PDO::PARAM_STR);
    $consulta->bindValue(":correo", $usuario["correo"], PDO::PARAM_STR);
    $consulta->bindValue(":clave", $usuario["clave"], PDO::PARAM_STR);
    $consulta->bindValue(":tipo", $usuario["tipo"], PDO::PARAM_STR);
    $consulta->bindValue(":id", $usuario["id"], PDO::PARAM_INT);
    return $consulta->execute();


	}

	public static function Eliminar($id){

    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
    $consulta =$objetoAccesoDato->RetornarConsulta("DELETE  FROM misusuarios WHERE id = :id ");
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