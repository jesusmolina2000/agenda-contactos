## Despliegue de app

Copiar el repositorio desde jesusmolina2000/agenda-contactos: prueba tecnica para carvajal (github.com)

Tanto la api como el cliente front end están ahí.

Se inicia el git con el comando git init , 
```
git add *agregar las carpetas yb archivos al repositorio*
git commit -m *comits del inicio*
git branch *es el main del proyecto*
git remote add origin  *dirección de repositorio url*
git push -u origin main 
```


para el uso de esta prueba se crea una base de datos en Mysql con el nombre de “directorio”



## Estructura de tabla para la tabla `contactos`
--
```
CREATE TABLE `contactos` (
  `id` int(11) NOT NULL,
  `nombres` varchar(255) DEFAULT NULL,
  `apellidos` varchar(255) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `celular` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `telefono2` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```
## Volcado de datos para la tabla `contactos`
--
```
INSERT INTO `contactos` (`id`, `nombres`, `apellidos`, `correo`, `celular`, `direccion`, `telefono`, `telefono2`, `createdAt`, `updatedAt`) VALUES
(1, 'jesus alberto', 'molina heredia', 'jesus.molinah08@gmail.com', '3183016931', 'barranquilla', '12345', '123', '2022-11-02 15:36:31', '2022-11-02 15:36:31'),
(6, '12', '12', '12', '12', '12', '12', '12', '2022-11-03 16:59:10', '2022-11-03 17:18:57'),
(7, 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', '2022-11-03 17:27:34', '2022-11-03 17:27:34'),
(8, 'prof sergio', 'hernandez', 'sergio@unisimon.edu.co', '1234567', 'barranquilla', '124567', '', '2022-11-03 17:28:49', '2022-11-03 17:28:49');
```
## Indices de la tabla `contactos`
```
ALTER TABLE `contactos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contactos`
--
ALTER TABLE `contactos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;
```
**credenciales para acceder a la base de datos desde la api**
```
User: root
Password: 
¡¡Nota!!: la contraseña o password es la default es decir, un campo vacio.
```