/**
 * Filter Users
 * 1. exportar usuarios del módulo data.js
 * 2. importar usuarios del módulo data.js al módulo index.js
 * 3. crear un nuevo array, agregándole la propiedad email a cada usuario. Para esto, usar el nombre y el apellido del usuario, en minúsculas y separados por un guión bajo, seguidos del dominio example.io
 * 4. crear un nuevo array solo con los usuarios mayores de 18 años
 * 5. obtener promedio de edad de los usuarios mayores de 18 años
 */
const { users } = require ('./data.js');

const usersWithMail = users.map( user => {
    user.email = user.name.replace(' ', '_') + '@example.io';
    return user;
})
console.log('array nuevo con mails: ', usersWithMail, '\n-------------------------------------');


const usersOver18 = usersWithMail.filter(user => {
    return user.age > 18;
})

console.log('array con usuarios mayores de 18 años: ', usersOver18, '\n--------------------------------------');


const onlyAges = users.map(user => {
    return user.age;
})

const totalAges = onlyAges.reduce((prev, current) => {
    return prev + current;
});

console.log('el promedio de edad entre los mayores de 18 años es: ' + totalAges / usersOver18.length);



