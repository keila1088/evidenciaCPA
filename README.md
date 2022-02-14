#ejercicio sobre scope y events:

###PARTE 1
1. Obtener el formulario, el botón y ambos inputs y guardarlos en variables.
2. Agregar un event listener para el evento submit del formulario.
3. Prevenir el comportamiento por default del evento submit.
4. Mostrar en consola el mensaje guardado en la variable FORM_ON_SUBMIT_MSG.
 
###PARTE 2
1. Crear una función en el scope global para validar que el password tenga como mínimo 6 caracteres de largo.
2. Si el password es inválido, mostrar en consola el mensaje guardado en la variable PASSWORD_INVALID_MSG, y salir de la ejecución de la función.
3. Si el password es válido, mostrar en consola el mensaje guardado en la variable PASSWORD_VALID_MSG.
 
###PARTE 3
1. Obtener el div padre del formulario y guardarlo en una variable.
2. Agregar un event listener para el evento click en el div padre y mostrar en consola el mensaje PARENT_ON_CLICK_MSG.
3. Agregar un event listener para el evento click en el botón y mostrar en console el mensaje BTN_ON_CLICK_MSG.
4. Lograr que el listener en el div padre se ejecute antes que el listener en el elemento target (el botón) usando capture phase.

#resumen de binding:

[link de miro a mapa conceptual: ](https://miro.com/app/board/uXjVOQ1oImg=/)

#ejercicio basic functional JS: 

1. exportar usuarios del módulo data.js
2. importar usuarios del módulo data.js al módulo index.js
3. crear un nuevo array, agregándole la propiedad email a cada usuario. Para esto, usar el nombre y el apellido del usuario, en minúsculas y separados por un guión bajo, seguidos del dominio example.io
4. crear un nuevo array solo con los usuarios mayores de 18 años
5. obtener promedio de edad de los usuarios mayores de 18 años