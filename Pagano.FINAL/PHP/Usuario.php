<?php 
//require 'AccesoDatos.php';
class Usuario{
	//ATRIBUTOS
	public $id;
	public $nombre;
	public $id_Local;
	//CONSTRUCTOR
	public function __construct($id = NULL)
	{
		if($id != NULL){
			$usuario = self::TraerUnUsuarioPorId($id);
			$this->id = $usuario->id;
			$this->nombre = $usuario->nombre;
			$this->id_Local = $usuario->id_Local;
		}
	}
	//MÉTODOS
	public static function TraerUnUsuarioPorId($id){
		$conexion = self::CrearConexion();
		$sql = "SELECT U.id, U.nombre, U.email, U.id_Local
				FROM usuarios U
				WHERE U.id = :id";
		$consulta = $conexion->prepare($sql);
		$consulta->bindValue(":id", $id, PDO::PARAM_INT);

		$consulta->execute();
		    $arrUser = json_encode($consulta->fetchAll());
	    return $arrUser; 
	}

		public static function BuscarPorPerfil($perfil){
		
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT *
				FROM misusuarios 
				WHERE tipo = :tipo");
		$consulta->bindValue(":tipo", $perfil, PDO::PARAM_STR);
		$consulta->execute();
	    $arrUser = json_encode($consulta->fetchAll());
	    return $arrUser; 
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
		$sql = "SELECT U.id,  U.correo,U.nombre, U.tipo, U.id_Local
				FROM misusuarios U
				WHERE U.correo = :correo AND U.clave = :clave AND U.nombre =:nombre";
		$consulta = $conexion->prepare($sql);
		$consulta->bindValue(":correo", $usuario->usuario, PDO::PARAM_STR);
		$consulta->bindValue(":clave", $usuario->clave, PDO::PARAM_STR);
		$consulta->bindValue(":nombre", $usuario->nombre, PDO::PARAM_STR);
		//$consulta->bindValue(":id_Local", $usuario->id_Local, PDO::PARAM_INT);
		$consulta->execute();
		$usuarioLogueado = $consulta->fetchObject('Usuario');
		return $usuarioLogueado;
	}



	public static function Agregar($usuario){

	 $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
    $consulta = $objetoAccesoDato->RetornarConsulta("INSERT INTO misusuarios (correo, nombre, clave, tipo,estado,id_Local)
                VALUES (:correo, :nombre, :clave, :tipo,:estado,:id_Local)");
  
    $consulta->bindValue(":nombre", $usuario["nombre"], PDO::PARAM_STR);
    $consulta->bindValue(":correo", $usuario["correo"], PDO::PARAM_STR);
    $consulta->bindValue(":clave", $usuario["clave"], PDO::PARAM_STR);
    $consulta->bindValue(":tipo", $usuario["tipo"], PDO::PARAM_STR);
    $consulta->bindValue(":id_Local", $usuario["id_Local"], PDO::PARAM_INT);
    $consulta->bindValue(":estado", $usuario["estado"], PDO::PARAM_STR);
    $consulta->execute();
    return $objetoAccesoDato->RetornarUltimoIdInsertado();

	}



	public static function Modificar($usuario){
	    $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
    $consulta = $objetoAccesoDato->RetornarConsulta("UPDATE misusuarios
        SET correo = :correo, nombre = :nombre, clave = :clave, tipo = :tipo, estado = :estado, id_Local = :id_Local
        WHERE id = :id");
    $consulta->bindValue(":nombre", $usuario["nombre"], PDO::PARAM_STR);
    $consulta->bindValue(":correo", $usuario["correo"], PDO::PARAM_STR);
    $consulta->bindValue(":clave", $usuario["clave"], PDO::PARAM_STR);
    $consulta->bindValue(":tipo", $usuario["tipo"], PDO::PARAM_STR);
    $consulta->bindValue(":id", $usuario["id"], PDO::PARAM_INT);
    $consulta->bindValue(":id_Local", $usuario["id_Local"], PDO::PARAM_INT);
    $consulta->bindValue(":estado", $usuario["estado"], PDO::PARAM_STR);
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