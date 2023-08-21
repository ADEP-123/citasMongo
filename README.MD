# Ejercicio Bodegas_Mongo

## Descripcion

---

Ejercicio practico para aprendizaje de mongo, se creo una base de datos simulando el manejo de bodegas, teniendo el cuenta el siguiente diagrama:

![Diagrama en el que se fundamento la base de datos](./imgs/database.png)

---

## Modo de uso:

---

### Si desea consultar directamente sin el uso de la API:

1. Clonar el repositorio en su dispositivo
2. Es necesario de tener Mongo instalado en su computadora en caso de no ser asi le recomiendo visitar el siguiente link: https://www.youtube.com/watch?v=2cWZ0lFbJoY
3. Tambien es recomentable tener la extension `MongoDB for Vs Code`, en caso de no tenerla instalela, o utilize alguna otra plataforma que le permita ejecutar el archivo query para la creacion de las colecciones de la base de datos:
4. Para utilizar la extension haga lo siguiente:

- 4.1. Abra la extension desde el panel izquierdo de visual studio code, en el simbolo de la hoja
- 4.2. En conexiones abra el panel de nueva conexion
- 4.3. Si tiene una conexion configurada desde Athlas copie el string de la conexion con los datos de usuario y contraseña del perfil creado, si va a utilizar la conexion de la base de datos actual use el siguiente link `mongodb+srv://admin:admin123456@cluster0.y7pgxmx.mongodb.net/`
- 4.3. Si no tiene una conexion configurada y desea hacerlo de manera local selecciona la opcion avanzada y luego presione conectar para hacerlo de manera local o configure los datos de la conexion.

5. **SOLO Si** va a utilizar una conexion diferente a la de el proyecto Ejecutar el archivo query.mongodb que se encuentra dentro del directorio backend/db/scripts.
6. Para ejecutar las consultas haga lo siguiente:

- 6.1. Abra el archivo consultas.mongodb que se encuentra dentro del directorio backend/db/scripts.
- 6.2. Subraye la consulta a realizar incluyendo el comando `use("citas_mongo");` y ejecutela con el simbolo de la parte superior derecha

### Si desea hacer uso de la API:

1. Si desea crear la base de datos local siga los pases del apartado anterior hasta el paso 4.
2. Revise que las configuraciones del archivo .env coincidan con las de su ordenador, si no es el caso cambielas.
3. Abra un nuevo bloque de comandos desde el archivo del repositorio, si esta usando visual estudio puede hacerlo desde la pestaña terminal > new terminal.
4. Con el comando "cd backend" ingrese a la carpeta backend.
5. Ejecute el comando `npm install`.
6. Ejecute el comando `npm run dev`.
7. La consola le mostrara la direccion http donde esta corriendo el servidor, la cual de manera predeterminada es `http://127.10.10.10:5010`
8. Para interactuar con los enpoints es recomendable usar una extension como Thunder Client, para ello siga los siguientes pasos:

- 8.1. Descarge la extension Thunder Client desde visual studio code
- 8.2. En el panel izquierdo seleccione la extension Thunder Client y posteriormente en new request
- 8.3. Coloque la url en el panel de direccion de Thunder Client con el endpoint especifico
- 8.4. Seleccione el metodo de la peticion segun corresponda
- 8.5. Si es un metodo POST envie un objeto en formato JSON con la informacion requerida en la pestaña body de Thunder Client

---

## Consultas

---

**Antes de poder realizar cualquier consulta tenga en cuenta lo siguiente:** Esta aplicacion cuenta con un sistema de autorizaciones por token, para obtener una autorizacion para acceder a los endpoint, por cada coleccion el sistema debe validar que el token enviado corresponda a la coleccion a la cual se desea hacer la peticion, por lo tanto usted debe hacer lo siguiente:

1. Acceda al siguiente endpoint para generar el token deseado:

- UrlDefault: http://127.10.10.10:5010/campus/login/:Coleccion
- Descripcion: Debe cambiar el campo `:Coleccion` de la url por cualquiera de los siguientes segun lo requiera:
  - Usuarios
  - Cita
  - Medicos
- Ej: http://127.10.10.10:5010/campus/login/Usuarios

2. Copie el token que sera devuelto como mensaje y envielo dentro del header Authorization

Ahora si podra interactuar con las consultas de la siguiente manera:

1. Obtener todos los pacientes alfabéticamente

   - UrlDefault: http://127.10.10.10:5010/campus/get/usuarios
   - Metodo: get
   - Tipo token esperado: Usuarios
   - Data: NN
   - Descripcion: Endpoint que permite obtener todos los pacientes alfabéticamente

2. Obtener todas las citas alfabéticamente

   - UrlDefault: http://127.10.10.10:5010/campus/get/citas
   - Metodo: get
   - Tipo token esperado: Cita
   - Data: NN
   - Descripcion: Endpoint que permite obtener todas las citas alfabéticamente

3. Obtener todos los médicos de una especialidad específica (por ejemplo, **'Cardiología'**):

   - UrlDefault: http://127.10.10.10:5010/campus/get/medicos
   - Metodo: get
   - Tipo token esperado: Medicos
   - Data: query
   - Descripcion: Endpoint que permite obtener todos los médicos de una especialidad específica.
   - Ejemplo: http://127.10.10.10:5010/campus/get/medicos?especialidad=Urologo

4. Encontrar la próxima cita para un paciente específico (por ejemplo, el paciente con **usu_id 1**):

- UrlDefault: http://127.10.10.10:5010/campus/get/citaSiguente
- Metodo: get
- Tipo token esperado: Cita
- Data: query
- Descripcion: Endpoint que permite encontrar la próxima cita para un paciente específico, Tenga en cuenta que la api calcula las citas superiores a la fecha actual por lo cual si la prueba debe corroborar que en el query las fechas de las citas default en la base de datos sea superior a la actual para encotrar algun resultado.
- Ejemplo: http://127.10.10.10:5010/campus/get/citaSiguente?idUsuario=2087654321

5.  Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con **\_id 1098817776**)

    - UrlDefault: http://127.10.10.10:5010/campus/get/getPatients
    - Metodo: get
    - Tipo token esperado: Cita
    - Data: query
    - Descripcion: Endpoint que permite encontrar todos los pacientes que tienen citas con un médico específico.
    - Ejemplo: http://127.10.10.10:5010/campus/get/getPatients?idMedico=1098817776

6.  Obtener las consultorías para un paciente específico (por ejemplo, paciente **con usu_id 1**)

    - UrlDefault: http://127.10.10.10:5010/campus/get/citasPorPaciente
    - Metodo: get
    - Tipo token esperado: Cita
    - Data: query
    - Descripcion: Endpoint que permite obtener las consultorías para un paciente específico.
    - Ejemplo: http://127.10.10.10:5010/campus/get/citasPorPaciente?idUsuario=2087654321

7.  Encontrar todas las citas para un día específico (por ejemplo, **'2023-07-12'**)

    - UrlDefault: http://127.10.10.10:5010/campus/get/citasPorFecha
    - Metodo: get
    - Tipo token esperado: Cita
    - Data: query
    - Descripcion: Endpoint que permite encontrar todas las citas para un día específico.
    - Ejemplo: http://127.10.10.10:5010/campus/get/citasPorFecha?fecha=2023-08-27

8.  Obtener los médicos y sus consultorios

    - UrlDefault: http://127.10.10.10:5010/campus/get/medicosConsultorios
    - Metodo: get
    - Tipo token esperado: Medicos
    - Data: query
    - Descripcion: Endpoint que permite obtener los médicos y sus consultorios.
    - Ejemplo: http://127.10.10.10:5010/campus/get/medicosConsultorios

9.  Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con **med_nroMatriculaProsional 1 en '2023-07-12'**)

    - UrlDefault: http://127.10.10.10:5010/campus/get/cantidadCitas
    - Metodo: get
    - Tipo token esperado: Cita
    - Data: query
    - Descripcion: Endpoint que permite contar el número de citas que un médico tiene en un día específico.
    - Ejemplo: http://127.10.10.10:5010/campus/get/cantidadCitas?fecha=2023-08-25&idMedico=2098817568

10. Obtener los consultorio donde se aplicó las citas de un paciente

    - UrlDefault: http://127.10.10.10:5010/campus/get/consultoriosUsuario
    - Metodo: get
    - Tipo token esperado: Cita
    - Data: query
    - Descripcion: Endpoint que permite obtener los consultorio donde se aplicó las citas de un paciente.
    - Ejemplo: http://127.10.10.10:5010/campus/get/consultoriosUsuario?idUsuario=2087654321

11. Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue realizada

    - UrlDefault: http://127.10.10.10:5010/campus/get/citasPorGenero
    - Metodo: get
    - Tipo token esperado: Cita
    - Data: query
    - Descripcion: Endpoint que permite obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue realizada.
    - Ejemplo: http://127.10.10.10:5010/campus/get/citasPorGenero?genero=4

# Creador:

## Andrès David ELizalde Peralta

---
