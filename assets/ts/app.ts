import { Command } from "commander";

function printHelloWorld() {
  console.log("Hello, Node.js!");
}

const helloWorldCmd = new Command()
  .action(printHelloWorld)
  .description("Prints 'Hello, Node.js!'")
  .name("hello-world");

export { helloWorldCmd, printHelloWorld };
