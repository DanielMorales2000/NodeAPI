# NodeAPI
 Prueba tecnica para TIUI. API de personas.

## Descarga e inicialización

Al descargar el proyecto se deben también descargar las dependencias haciendo uso de *npm i*.

## Ejecución

Usar el comando *npm run dev*

## Uso de API REST

En los metodos que llevan*idPerson* como paremtro se debe colocar el id de la persona a obtener, sin ningun extra (comillas, parentesis o corchetes).

### Listar personas

Usando el metodo *GET*, ejecutar la siguiente URL:
http://localhost:3000/api/v1/people

### Obtener una persona

Usando el metodo *GET*, ejecutar la siguiente URL:
http://localhost:3000/api/v1/people/idPerson

### Crear una persona

Usando el metodo *POST*, ejecutar la siguiente URL:
http://localhost:3000/api/v1/people

En el cuerpo se debe colocar un JSON como el del ejemplo siguiente:

{
"name": "Maria Camila",
"lastName": "Rosales Mora",
"gender": "Femenino",
"age": "25",
"profession": "Administradora"
}

### Actualizar una persona

Usando el metodo *POST*, ejecutar la siguiente URL:
http://localhost:3000/api/v1/people/idPerson

En el cuerpo se debe colocar un JSON como el del ejemplo siguiente:

{
"name": "Maria Camila",
"lastName": "Rosales Mora",
"gender": "Femenino",
"age": "25",
"profession": "Administradora"
}

Los campos que no se deseen actualizar se pueden omitir, quedando por ejemplo:

{
"name": "Dayana Alejandra"
}

### Eliminar una persona

Usando el metodo *DELETE*, ejecutar la siguiente URL:
http://localhost:3000/api/v1/people/idPerson
