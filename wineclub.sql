-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 21-11-2021 a las 12:09:34
-- Versión del servidor: 5.7.34
-- Versión de PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `wineclub`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE `novedades` (
  `id` int(11) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `img_id` varchar(300) DEFAULT NULL,
  `cuerpo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `img_id`, `cuerpo`) VALUES
(3, 'Llegó el Yellow Tail a Wine Club', 'El famoso vino australiano se suma a nuestra carta', 'yvbvumuluwhsdpnjlh8g', 'Este mes hemos sumado un vino exquisito de origen australiano. Esta marca se distingue por lograr una gran calidad, con vinos suaves y amigables para todos los gustos, sin requerir una gran inversión. En esta oportunidad les presentamos su Cabernet Sauvignon, al que seguirán nuevas varietales en un futuro.'),
(14, 'Juguemos', 'Sumamos juegos de mesa a nuestros paquetes!', 'r4zkhubltnpecfk7k0wq', 'Porque nuestra idea es proveerte de todo lo que necesitas para pasar un hermoso rato con tus seres queridos, seguimos pensando que mas podemos sumar para hacer de tu experiencia, la mejor posible. En esta oportunidad sumamos juegos de mesa. Podes elegir entre: Monopoly, el Erudito, Twister, Pictionary, Digalo con mímica. '),
(17, 'Veranos rosados', 'Ampliamos nuestra oferta de rosados', 'wdsy4k99hi4rbcpxcndz', 'Con los primeros calores llega la temporada de tomar al aire libre, y que mejor para tus juntadas de tarde de verano que nuestra fabulosa selección de vinos rosados. Para disfrutar a temperatura fresca. Saben tan ricos como se ven!'),
(18, 'Promo Felices Fiestas', '15% de descuentos para festejar este fin de año!', 'kd8wneuif2ealicn2azn', 'Desde hoy, 20 de noviembre y por dos semanas, accede a un 15% de descuento para empezar a planificar tu fin de año. Podes comprar ahora y reservar fecha de entrega para lo que resta del año. Nos complace que nos incluyan en sus momentos especiales y esta es nuestra forma de agradecérselos. ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(20) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `varietal` varchar(200) NOT NULL,
  `imagen_id` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `varietal`, `imagen_id`) VALUES
(8, 'Yellow Tail', 'Cabernet Sauvignon', 'k0tmmqxpusjli9crh5b2'),
(10, 'Jacobs Creek', 'Pinot Noir', 'm1aon4xpula7dsmr6mfc'),
(11, 'Yellow Tail', 'Shiraz', 'eoanqxcoivrdpt1hygzm'),
(12, 'Vistamar', 'Cabernet Sauvignon', 'obg0ylgt73b6pwrgafwe'),
(13, 'Cono Sur', 'Pinot Noir', 'mvf3mrgr8vv7pabg4xux'),
(14, 'Oyster Bay', 'Merlot', 'qv6h6nezbrlijuvklunv'),
(15, 'Brancott Estate', 'Pinot Noir', 'dc4kbd5d4pkctlci74hf');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(60) NOT NULL,
  `password` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'noelia', '81dc9bdb52d04dc20036dbd8313ed055'),
(4, 'juan', '674f3c2c1a8a6f90461e8a66fb5550ba');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `novedades`
--
ALTER TABLE `novedades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
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
-- AUTO_INCREMENT de la tabla `novedades`
--
ALTER TABLE `novedades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
