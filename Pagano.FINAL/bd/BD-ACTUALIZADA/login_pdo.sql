-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-12-2016 a las 01:42:44
-- Versión del servidor: 10.1.13-MariaDB
-- Versión de PHP: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `login_pdo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `misencuestas`
--

CREATE TABLE `misencuestas` (
  `id` int(4) UNSIGNED NOT NULL,
  `descripcion` varchar(25) CHARACTER SET utf8 NOT NULL,
  `tiempo` varchar(25) CHARACTER SET utf8 NOT NULL,
  `estado` varchar(10) CHARACTER SET utf8 NOT NULL,
  `comentarios` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Volcado de datos para la tabla `misencuestas`
--

INSERT INTO `misencuestas` (`id`, `descripcion`, `tiempo`, `estado`, `comentarios`) VALUES
(1, 'Provolone', 'Ninguno', 'Excelente', 'Muy buen local.'),
(2, 'Cheddar Y Panceta', '20 minutos', 'Bueno', 'Se solicita menos tiempo'),
(3, 'Fugazzetta', 'Ninguno', 'Bueno', 'Muy buen local');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mislocales`
--

CREATE TABLE `mislocales` (
  `id_Local` int(4) UNSIGNED NOT NULL,
  `localidad` varchar(25) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `latitud` varchar(20) NOT NULL,
  `longitud` varchar(20) NOT NULL,
  `foto1` varchar(25) NOT NULL,
  `foto2` varchar(25) NOT NULL,
  `foto3` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `mislocales`
--

INSERT INTO `mislocales` (`id_Local`, `localidad`, `direccion`, `latitud`, `longitud`, `foto1`, `foto2`, `foto3`) VALUES
(1, 'Wilde', 'LAS FLORES ESQ. M. MORENO', '-34.7030157', '-58.3185284', 'Wilde1.jpg', 'Wilde2.jpg', 'Wilde3.jpg'),
(2, 'Lanus Oeste', 'Del Valle Iberlucea 2750', '-34.7031507', '-58.3947823', 'Lanus1.jpg', 'Lanus2.JPG', 'Lanus3.jpg'),
(3, 'Banfield', 'ALSINA Y CHACABUCO ', '-34.7455505', '-58.3955656', 'Banfield1.jpg', 'Banfield2.jpg', 'Banfield3.jpg'),
(4, 'Alsina', 'J. D. PERÓN 3062', '-34.6724936', '-58.4112895', 'alsina1.jpg', 'alsina2.jpg', 'alsina3.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `misofertas`
--

CREATE TABLE `misofertas` (
  `id_oferta` int(4) UNSIGNED NOT NULL,
  `nombre` varchar(60) CHARACTER SET utf8 NOT NULL,
  `costo` int(4) UNSIGNED NOT NULL,
  `fecha` date NOT NULL,
  `id_Local` int(4) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Volcado de datos para la tabla `misofertas`
--

INSERT INTO `misofertas` (`id_oferta`, `nombre`, `costo`, `fecha`, `id_Local`) VALUES
(5, 'Dos Provolone Con Dos Coca Cola', 300, '2017-01-12', 4),
(6, 'Tres Muzzarella con Dos Stella Artois', 350, '2017-01-21', 1),
(7, 'Tres Muzzarella con Dos Stella Artois', 350, '2017-01-21', 2),
(8, 'Tres Muzzarella con Dos Stella Artois', 350, '2017-01-21', 3),
(9, 'Tres Muzzarella con Dos Stella Artois', 350, '2017-01-21', 4),
(12, 'Fugazzeta Con Coca', 160, '2017-01-06', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mispedidos`
--

CREATE TABLE `mispedidos` (
  `id_pedido` int(4) UNSIGNED NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `precio` int(4) UNSIGNED NOT NULL,
  `cantidad` int(4) UNSIGNED NOT NULL,
  `fecha` date NOT NULL,
  `estado` varchar(25) NOT NULL,
  `id` int(4) UNSIGNED NOT NULL,
  `id_producto` int(4) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `mispedidos`
--

INSERT INTO `mispedidos` (`id_pedido`, `descripcion`, `precio`, `cantidad`, `fecha`, `estado`, `id`, `id_producto`) VALUES
(1, 'Fugazzetta', 280, 2, '2016-11-30', 'cerrado', 2, 1),
(2, 'Cheddar Y Panceta', 900, 5, '2016-12-15', 'pendiente', 2, 10),
(3, 'Provolone', 280, 2, '2016-11-11', 'cerrado', 1, 7),
(4, 'Cheddar Y Panceta', 360, 2, '2016-11-02', 'cerrado', 1, 10),
(5, 'Fugazzetta', 280, 2, '2016-12-09', 'cerrado', 1, 3),
(6, 'Provolone', 420, 3, '2016-12-18', 'pendiente', 1, 7),
(7, 'Napolitana', 280, 2, '2016-12-24', 'pendiente', 1, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `misproductos`
--

CREATE TABLE `misproductos` (
  `id_producto` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `precio` int(4) UNSIGNED NOT NULL,
  `foto` varchar(40) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `misproductos`
--

INSERT INTO `misproductos` (`id_producto`, `nombre`, `precio`, `foto`) VALUES
(1, 'Muzzarella', 120, 'Muzarella.jpg'),
(2, 'Muzzarella Jamon y Morrones', 140, 'MuzzarellaJamonYMorrones.jpg'),
(3, 'Fugazzetta', 140, 'Fugazzetta.jpg'),
(4, 'Fugazzetta Rellena', 220, 'FugazzettaRellena.jpg'),
(5, 'Napolitana', 140, 'Napolitana.jpg'),
(6, 'Anchoas', 160, 'Anchoas.jpg'),
(7, 'Provolone', 140, 'Provolone.jpg'),
(8, 'Roquefort', 160, 'Roquefort.jpg'),
(9, 'Cuatro Quesos', 180, 'Cuatroquesos.jpg'),
(10, 'Cheddar Y Panceta', 180, 'CheddarYPanceta.jpg'),
(11, 'Verdura', 140, 'Verdura.jpg'),
(12, 'Palmito', 160, 'Palmito.jpg'),
(13, 'Rucula y Parmesano', 160, 'RuculaYParmesano.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `misusuarios`
--

CREATE TABLE `misusuarios` (
  `id` int(11) NOT NULL,
  `correo` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `clave` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `tipo` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `estado` varchar(50) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `misusuarios`
--

INSERT INTO `misusuarios` (`id`, `correo`, `nombre`, `clave`, `tipo`, `estado`) VALUES
(1, 'cliente@cliente.com', 'cliente', '123', 'Cliente', 'desbloqueado'),
(2, 'admin@admin.com', 'admin', '321', 'Administrador', 'desbloqueado'),
(3, 'encargado@encargado.com', 'encargado', '321', 'Encargado', 'desbloqueado'),
(4, 'empleado@empleado.com', 'empleado', '123', 'Empleado', 'desbloqueado'),
(8, 'cliente2@cliente.com', 'Natsu Dragneel', 'asd', 'Cliente', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `misencuestas`
--
ALTER TABLE `misencuestas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mislocales`
--
ALTER TABLE `mislocales`
  ADD PRIMARY KEY (`id_Local`);

--
-- Indices de la tabla `misofertas`
--
ALTER TABLE `misofertas`
  ADD PRIMARY KEY (`id_oferta`),
  ADD KEY `id_Local` (`id_Local`);

--
-- Indices de la tabla `mispedidos`
--
ALTER TABLE `mispedidos`
  ADD PRIMARY KEY (`id_pedido`),
  ADD KEY `id` (`id`),
  ADD KEY `id_producto` (`id_producto`);

--
-- Indices de la tabla `misproductos`
--
ALTER TABLE `misproductos`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `misusuarios`
--
ALTER TABLE `misusuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `misencuestas`
--
ALTER TABLE `misencuestas`
  MODIFY `id` int(4) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `mislocales`
--
ALTER TABLE `mislocales`
  MODIFY `id_Local` int(4) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `misofertas`
--
ALTER TABLE `misofertas`
  MODIFY `id_oferta` int(4) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT de la tabla `mispedidos`
--
ALTER TABLE `mispedidos`
  MODIFY `id_pedido` int(4) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT de la tabla `misproductos`
--
ALTER TABLE `misproductos`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT de la tabla `misusuarios`
--
ALTER TABLE `misusuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
