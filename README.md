# SeguimientoPedidosWeb

 Este proyecto es una aplicación de seguimiento de pedidos que permite a los usuarios consultar información detallada sobre sus pedidos. Proporciona la capacidad de buscar pedidos por código, tipo de documento y documento del cliente. Además, muestra información detallada sobre los pedidos, incluyendo los productos, cantidades, precios y el estado de entrega estimado. La aplicación está dividida en un backend y un frontend, con el backend manejando las solicitudes y la base de datos, y el frontend proporcionando la interfaz de usuario.
Desarrollada en React y NodeJs

![image](https://github.com/SuarezSebastian2/SeguimientoPedidosWeb/assets/78248849/6b44087c-206c-4fad-8fc1-5d20df9751a2)

![image](https://github.com/SuarezSebastian2/SeguimientoPedidosWeb/assets/78248849/fbd99a09-a06c-4b42-915a-53cce0f2ba3b)

![image](https://github.com/SuarezSebastian2/SeguimientoPedidosWeb/assets/78248849/24863cf6-afa9-4591-a829-cfefdf12f32e)

![image](https://github.com/SuarezSebastian2/SeguimientoPedidosWeb/assets/78248849/ec3a805d-efff-4682-8789-67eaba881a8c)

![image](https://github.com/SuarezSebastian2/SeguimientoPedidosWeb/assets/78248849/0d17ea1a-f449-4c05-aaed-0428cc6509f7)

![image](https://github.com/SuarezSebastian2/SeguimientoPedidosWeb/assets/78248849/9ecda110-fb87-4764-9017-5c492d68deb6)

![image](https://github.com/SuarezSebastian2/SeguimientoPedidosWeb/assets/78248849/87f71d92-98e4-46b8-9b7e-821c1540ed3f)

## Configuración Inicial

Siga estos pasos para configurar el proyecto en su entorno local:

### 1. Clonar el Repositorio

Clone este repositorio en su máquina local utilizando Git:


git clone https://github.com/SuarezSebastian2/SeguimientoPedidosWeb.git

###2. Instalar Dependencias
Asegúrese de tener Node.js y npm instalados en su sistema. Luego, navegue a la carpeta del frontend y del backend y ejecute el siguiente comando en cada una para instalar las dependencias:

cd frontend
npm install
@mui/material
@mui/icons-material


cd ../backend
npm install
express
sequelize
mysql2
cors

###3. Configurar la Base de Datos
Asegúrese de tener un servidor de base de datos MySQL en funcionamiento. Cree una base de datos llamada pedidos y configure las credenciales en el archivo sequelize.js en la carpeta config del backend.

###4. Iniciar el Servidor
Ejecute el servidor backend y frontend por separado utilizando los siguientes comandos:

Para el backend:
cd backend
node app.js

Para el frontend:
cd frontend
npm start

###5. Acceder a la Aplicación
Abra su navegador web y vaya a http://localhost:3000 para acceder a la aplicación.

Versión 1.1.0 
