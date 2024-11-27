/*
Crean una funcion que recibe un correo y una contraseña , un objeto que tenga una lista 
de id numerico correos y contraseñas y valida que un si el 
correo y la contraseña son validos y retorna con el id 
*/

// agrega los sigientes datos al objeto
/**
 * Cedula
Nombre
Correo
Telefono
Genero
fecha de contratacion
 */



const users = [
    { id: 1, correo: 'uptaebxavier@gmail.com', password: 'hola123', nombre: 'Xavier', apellido: 'Upta', cedula: '12345678', telefono: '12345678', genero: 'Masculino', creado: '2022-01-01' },
    { id: 2, correo: 'aguilarvzla2@gmail.com', password: 'hola123', nombre: 'Luis', apellido: 'Upta', cedula: '12345678', telefono: '12345678', genero: 'Masculino', creado: '2023-02-02' },
    { id: 3, correo: 'enpanadaspol@gmail.com', password: 'hola123', nombre: 'pedro', apellido: 'Upta', cedula: '12345678', telefono: '12345678', genero: 'Masculino', creado: '2022-01-01' }, 
    { id: 4, correo: 'polloycarnes@gmail.com', password: 'hola123', nombre: 'pepe', apellido: 'Upta', cedula: '12345678', telefono: '12345678', genero: 'Masculino', creado: '2022-01-01' }
];

const falseloginresponse = (email, password) => {
  var resp={};
    const user = users.find(user => user.correo === email && user.password === password);
    if (user) {
        resp = {data: {resultado: "singing"}, headers:{"user": user.id}}
    }
    else {
        resp = {data: {resultado: "Error", mensaje: "Credenciales incorrectas"}};
    }
    return resp;
}

const falseperfilresponse = (id) => {
  var resp={};
    const user = users.find(user => user.id === id);
    if (user) {
        resp = {data: {resultado: "get_user", mensaje: user}};
    }
    else {
        resp = {data: {resultado: "Error", mensaje: "Credenciales incorrectas"}};
    }
    return resp;
}

export {falseloginresponse, falseperfilresponse};