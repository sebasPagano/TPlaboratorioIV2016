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
		$conexion = self::CrearConexion();
		$sql = "SELECT U.id, U.nombre, U.email, U.perfil
				FROM usuarios U";
		$consulta = $conexion->prepare($sql);
		$consulta->execute();
		$usuarios = $consulta->fetchall(PDO::FETCH_CLASS, 'Usuario');
		return $usuarios;
	}
	public static function TraerUsuarioLogueado($usuario){
		$conexion = self::CrearConexion();
		$sql = "SELECT U.id, U.nombre, U.email, U.perfil
				FROM usuarios U
				WHERE U.email = :email AND U.password = :pass AND U.nombre =:nombre";
		$consulta = $conexion->prepare($sql);
		$consulta->bindValue(":email", $usuario->usuario, PDO::PARAM_STR);
		$consulta->bindValue(":pass", $usuario->clave, PDO::PARAM_STR);
		$consulta->bindValue(":nombre", $usuario->nombre, PDO::PARAM_STR);
		$consulta->execute();
		$usuarioLogueado = $consulta->fetchObject('Usuario');
		return $usuarioLogueado;
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
		$conexion = self::CrearConexion();
		$sql = "INSERT INTO usuarios (nombre, email, password, perfil)
				VALUES (:nombre, :email, :pass, :perfil)";
		$consulta = $conexion->prepare($sql);
		$consulta->bindValue(":nombre", $usuario->nombre, PDO::PARAM_STR);
		$consulta->bindValue(":email", $usuario->email, PDO::PARAM_STR);
		$consulta->bindValue(":pass", $usuario->pass, PDO::PARAM_STR);
		$consulta->bindValue(":perfil", $usuario->perfil, PDO::PARAM_STR);
		$consulta->execute();
		$idAgregado = $conexion->lastInsertId();
		return $idAgregado;
	}

		public static function Agregar2($usuario){
	//$conexion = self::CrearConexion();
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
		$conexion = self::CrearConexion();
		$sql = "UPDATE usuarios
				SET nombre = :nombre, email = :email, password = :pass, perfil = :perfil
				WHERE id = :id";
		$consulta = $conexion->prepare($sql);
		$consulta->bindValue(":nombre", $usuario->nombre, PDO::PARAM_STR);
		$consulta->bindValue(":email", $usuario->email, PDO::PARAM_STR);
		$consulta->bindValue(":pass", $usuario->pass, PDO::PARAM_STR);
		$consulta->bindValue(":perfil", $usuario->perfil, PDO::PARAM_STR);
		$consulta->bindValue(":id", $usuario->id, PDO::PARAM_INT);
		$consulta->execute();
		$cantidad = $consulta->rowCount();
		return $cantidad;
	}
	public static function Eliminar($id){
		$conexion = self::CrearConexion();
		$sql = "DELETE FROM usuarios
				WHERE id = :id";
		$consulta = $conexion->prepare($sql);
		$consulta->bindValue(":id", $id, PDO::PARAM_INT);
		$consulta->execute();
		$cantidad = $consulta->rowCount();
		return $cantidad;
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