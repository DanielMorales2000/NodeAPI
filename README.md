# NodeAPI
 Prueba tecnica para TIUI. API de personas.

## Descarga e inicialización

Al descargar el proyecto se deben también descargar las dependencias haciendo uso de *npm i*.

## Ejecución

Usar el comando *npm run dev*

## Uso de API REST

En los metodos que llevan *idPerson* como parametro se debe colocar el id de la persona a obtener, sin ningun extra (comillas, parentesis o corchetes).

En los metodos para CREAR, ELIMINAR y ACTUALIZAR, se debe agregar a los encabezados el token generado en el servicio de autenticación, servicio que se describe a continuación.

### Autenticación

Usando el metodo *POST*, ejecutar la siguiente URL:
http://localhost:3000/api/v1/people/auth

y agregar el siguiente cuerpo en la petición:

```json
{
    "userName":"root",
    "password":"root"
}
```
#### Respuesta

```json
{
    "message": "Usuario autenticado",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJvb3QiLCJpYXQiOjE2Nzc0ODczNjgsImV4cCI6MTY3NzQ4NzY2OH0.qntB913bvHslPl2uSmDu1wZ7YzocdUD-S_CG1kpnfug"
}
```
### Listar personas

Usando el metodo *GET*, ejecutar la siguiente URL:
http://localhost:3000/api/v1/people

#### Respuesta
``` json
{
"status": "OK",
"data": [
{
"idPerson": "1",
"name": "Yerson Daniel",
"lastName": "Morales Arevalo",
"gender": "Masculino",
"Age": "22",
"profession": "Ingeniero de Sistemas",
"creationDate": "2023-02-24"
},
{
"idPerson": "485542a2-4990-4599-b0e1-573040e84a69",
"name": "Carlos Andrés",
"lastName": "Rosales Rodríguez",
"gender": "Masculino",
"Age": "30",
"profession": "Contador",
"creationDate": "2023-02-25"
},
{
"idPerson": "783542a2-4990-4599-b0e1-573040e84b49",
"name": "Karen Dahiana",
"lastName": "Quintero Medina",
"gender": "Femenino",
"Age": "21",
"profession": "Diseñadora",
"creationDate": "2023-02-26"
},
{
"idPerson": "916542a2-4990-4599-b0e1-573040e84c40",
"name": "Mariana",
"lastName": "Gomez Gonzales",
"gender": "Femenino",
"Age": "27",
"profession": "Streamer",
"creationDate": "2023-02-23"
}
]
}
```
### Obtener una persona

Usando el metodo *GET*, ejecutar la siguiente URL:
http://localhost:3000/api/v1/people/idPerson

#### Respuesta
http://localhost:3000/api/v1/people/916542a2-4990-4599-b0e1-573040e84c40

``` json
{
    "status": "OK",
    "data": {
        "idPerson": "916542a2-4990-4599-b0e1-573040e84c40",
        "name": "Maria Alejandra",
        "lastName": "Gomez Gonzales",
        "gender": "Femenino",
        "Age": "27",
        "profession": "Streamer",
        "creationDate": "2023-02-23"
    }
}
```

### Crear una persona

Usando el metodo *POST*, ejecutar la siguiente URL:
http://localhost:3000/api/v1/people

En el cuerpo se debe colocar un JSON como el del ejemplo siguiente:

```json
{
"name": "Maria Camila",
"lastName": "Rosales Mora",
"gender": "Femenino",
"age": "25",
"profession": "Administradora"
}
```
##### Respuesta

```json
{
    "status": "OK",
    "data": {
        "name": "Maria Camila",
        "lastName": "Rosales Mora",
        "gender": "Femenino",
        "age": "25",
        "profession": "Administradora",
        "idPerson": "bee169cc-46db-436d-b41f-e1281a57e3bf",
        "creationDate": "2/27/2023, 5:18:49 AM"
    }
}
```

### Actualizar una persona

Usando el metodo *PATCH*, ejecutar la siguiente URL:
http://localhost:3000/api/v1/people/idPerson

En el cuerpo se debe colocar un JSON como el del ejemplo siguiente:

```json
{
"name": "Maria Camila",
"lastName": "Rosales Mora",
"gender": "Femenino",
"age": "25",
"profession": "Administradora"
}
```

Los campos que no se deseen actualizar se pueden omitir, quedando por ejemplo:

```json
{
"name": "Dayana Alejandra"
}
```
#### Ejemplo

##### Solicitud
http://localhost:3000/api/v1/people/916542a2-4990-4599-b0e1-573040e84c40

Body:
``` json
{
"name": "Dayana Alejandra"
}
```
##### Respuesta
``` json
{
    "status": "OK",
    "data": {
        "idPerson": "916542a2-4990-4599-b0e1-573040e84c40",
        "name": "Dayana Alejandra",
        "lastName": "Gomez Gonzales",
        "gender": "Femenino",
        "Age": "27",
        "profession": "Streamer",
        "creationDate": "2023-02-23"
    }
}
```

### Eliminar una persona

Usando el metodo *DELETE*, ejecutar la siguiente URL:
http://localhost:3000/api/v1/people/idPerson

#### Solicitud

http://localhost:3000/api/v1/people/916542a2-4990-4599-b0e1-573040e84c40

La respuesta en este caso es un *status 200*