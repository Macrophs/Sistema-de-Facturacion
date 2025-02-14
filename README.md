# Sistema-de-Facturacion-SDBS  
[@Macrophs](https://github.com/Macrophs) Santiago Anselmi

[@GabrielVilla10](https://github.com/GabrielVilla10) Gabriel Villanueva 

Repositorio con nuestro primer sistema de facturación hecho con Next.js

Se trabajará mediante el uso de 2 ramas, Main y Develop. en Develop irán los cambios progresivos del proyecto, Mientras que en Main las versiones finales, Usuarios Administradores: Santi o Gabriel, Empleados: Santi2 o cualquier nombre de empleado
  
 Un sistema de facturación es aquel que permite llevar un control del proceso de generación y emisión de facturas en un negocio, el objetivo de este tipo de sistema es automatizar y simplificar el proceso de facturación

### Configuración
para migrar la base de datos que se encuentra en la carpeta database, se ejecuta el siguiente comando: 
```bash
psql -h localhost -p 5432 -U postgres -f db_sdbs.sql mi_db
```
además es obligatorio el crear un archivo .env en la raiz del proyecto, donde se indiquen los datos para la conexion a la base de datos, teniendo como ejemplo el .env.example.

`DB_NAME`

`DB_HOST`

`DB_USER`

`DB_PASSWORD`

`DB_PORT` 