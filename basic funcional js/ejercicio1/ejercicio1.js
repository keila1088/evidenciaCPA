/**
 * Filter Users
 * 1. exportar usuarios del módulo data.js
 * 2. importar usuarios del módulo data.js al módulo index.js
 * 3. crear un nuevo array, agregándole la propiedad email a cada usuario. Para esto, usar el nombre y el apellido del usuario, en minúsculas y separados por un guión bajo, seguidos del dominio example.io
 * 4. crear un nuevo array solo con los usuarios mayores de 18 años
 * 5. obtener promedio de edad de los usuarios mayores de 18 años
 */
const { users } = require ('./data.js');

console.log(users);
