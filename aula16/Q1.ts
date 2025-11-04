// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript

const anExampleVariable = "Hello World"
console.log(anExampleVariable)

let teste: String = "Teste 123";

console.log(teste);

interface requestMessage{
    id : Number;
    nome : String;
    email : String;
}

function printMessage(requestMessageobj : requestMessage): void{
    console.log(`id: ${requestMessageobj.id}`);
    console.log(`nome: ${requestMessageobj.nome}`);
    console.log(`email: ${requestMessageobj.email}`);
}

const user: requestMessage = {id:2,nome:'Gustavo',email:'Gustavo_msn_@hotmail'}
printMessage(user);

// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.
  