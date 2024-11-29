// Crea una función que saluda a un usuario
function greetUser(user) {
    return "Hola, ".concat(user.name, "! Bienvenido a TypeScript.");
}
// Crear un objeto de usuario
var user = {
    id: 1,
    name: "Juan",
    email: "juan@example.com"
};
// Llamar a la función y mostrar el mensaje
console.log(greetUser(user));
function wait(ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); }
while (true) {
    console.log('Hola');
    await wait(1000);
}
