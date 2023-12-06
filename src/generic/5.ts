/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

// Приклад використання інтерфейсу KeyValuePair
const pair1: KeyValuePair<number, string> = { key: 1, value: "One" };
const pair2: KeyValuePair<string, boolean> = { key: "Two", value: true };

console.log(pair1);
console.log(pair2);

export {};
