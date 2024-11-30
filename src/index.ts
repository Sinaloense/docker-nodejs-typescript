// Define una interfaz para un usuario
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "Sina",
  email: "sina@example.com",
};

function messageUser(user: User): string {
  return `Hola, ${user.name}! Bienvenido a TypeScript.`;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let count = 0;

while (true) {
  count++;
  console.log(`${messageUser(user)} ${count}`);
  await wait(100);
}
