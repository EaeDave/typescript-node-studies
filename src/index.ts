// 📝 type annotations

// declarando o tipo
const myName: string = 'David';
console.log(myName);

const myAge: number = 23;
console.log(myAge);

const myBoolean: boolean = true;
console.log(myBoolean);

const any1: unknown = 1;
const any2: unknown = 'Test';
const any3: any = false; // Usar em any só em casos muitos específicos, porque tira a segurança do código.

console.log(any1, any2, any3);

const myNull: null = null;
const myUndefined: undefined = undefined;

console.log(myNull, myUndefined);

//                                 return type
function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(5, 5));

//                          parâmetro opcional
function greet(name: string, age?: number): string {
  return `Olá, ${name}. você tem ${age} anos de idade.`;
}

const myGreetings = greet('David', 23);
console.log(myGreetings);
