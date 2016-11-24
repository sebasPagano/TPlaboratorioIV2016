-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-11-2016 a las 23:35:51
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
-- Estructura de tabla para la tabla `misproductos`
--

CREATE TABLE `misproductos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `precio` varchar(50) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `misproductos`
--

INSERT INTO `misproductos` (`id`, `nombre`, `precio`) VALUES
(1, 'muzarella', '33'),
(2, 'fugazetta', '60'),
(3, 'morrones', '25'),
(5, 'rucula y parmesano', '123');

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
  `foto` varchar(50) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `misusuarios`
--

INSERT INTO `misusuarios` (`id`, `correo`, `nombre`, `clave`, `tipo`, `foto`) VALUES
(1, 'cliente@cliente.com', 'cliente', '123', 'Cliente', 'sin foto'),
(2, 'admin@admin.com', 'admin', '321', 'Administrador', 'sin foto'),
(3, 'encargado@encargado.com', 'encargado', '321', 'Encargado', 'sin foto'),
(5, 'empleado@empleado.com', 'empleado', '123', 'Empleado', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(25) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  `email` varchar(50) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  `password` varchar(16) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  `perfil` varchar(20) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `password`, `perfil`) VALUES
(1, 'juan', 'admin@admin.com', '123456', 'administrador'),
(2, 'pedro', 'user@user.com', '123456', 'comprador'),
(3, 'invitado', 'invitado@guest.com', '123456', 'vendedor'),
(5, 'asd', 'seba@seba.com', '123456', 'admin'),
(6, 'xdxd', 'jarra@jarra.com', 'asddddd', 'comprador'),
(8, 'sesega', 'seba@jojo.com', '653123', 'vendedor');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `misproductos`
--
ALTER TABLE `misproductos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `misusuarios`
--
ALTER TABLE `misusuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `misproductos`
--
ALTER TABLE `misproductos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `misusuarios`
--
ALTER TABLE `misusuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
