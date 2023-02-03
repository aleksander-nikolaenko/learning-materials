// 1. Для каких частей сигнатуры типа функции TypeScript делает вывод:
// параметры, возвращаемый тип или и то и другое?

// то и другое

// 2. Является ли JavaScript-объект arguments типобезопасным? Если нет,
// то что вместо него можно использовать?

// оператор spread ...arg

// 3. Как забронировать отпуск, который начнется сразу? Обновите перегруженную функцию reserve из этой главы (см. подраздел «Типы
// перегруженных функций» на с. 83), добавив третью сигнатуру вызова,
// которая получает только место назначения без явной даты отправки.
// Обновите реализацию функции reserve, чтобы она поддерживала
// новую перегруженную сигнатуру

type Reservation = unknown;

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation;
  (from: Date, destination: string): Reservation;
  (destination: string): Reservation;
};

let reserve: Reserve = (
  fromOrDestination: Date | string,
  toOrDestination?: Date | string,
  destination?: string
) => {
  if (
    fromOrDestination instanceof Date &&
    toOrDestination instanceof Date &&
    destination !== undefined
  ) {
    // Book a one-way trip
  } else if (
    fromOrDestination instanceof Date &&
    typeof toOrDestination === 'string'
  ) {
    // Book a round trip
  } else if (typeof fromOrDestination === 'string') {
    // Book a trip right away
  }
};
// 4. (Сложно.) Обновите реализацию call из этой главы (см. подраздел
// «Использование ограниченного полиморфизма для моделирования
// арности» на с. 105), чтобы она работала только для функций, чей второй
// аргумент является string. Для остальных функций реализация должна
// проваливаться при компиляции

// function call(f: (...args: unknown[]) => unknown, ...args: unknown[]): unknown {
//   return f(...args);
// }
// function fill(length: number, value: string): string[] {
//   return Array.from({ length }, () => value);
// }
// call(fill, 10, 'a'); // вычисляется как массив 10и 'a'

function call<T extends [unknown, string, ...unknown[]], R>(
  f: (...args: T) => R,
  ...args: T
): R {
  return f(...args);
}

function fill(length: number, value: string): string[] {
  return Array.from({ length }, () => value);
}

call(fill, 10, 'a'); // string[]

// 5. Реализуйте небольшую типобезопасную библиотеку для проверки
// утверждений — is. Начните с типов. По завершении вы должны иметь
// возможность использовать ее следующим образом:
// // Сравнить string и string
// is('string', 'otherstring') // false
// // Сравнить boolean и boolean
// is(true, false) // false
// // Сравнить number и number
// is(42, 42) // true
// // Сравнение двух различных типов должно выдавать ошибку
// // при компиляции
// is(10, 'foo') // Ошибка TS2345: аргумент типа '"foo"' не может
//  // быть присвоен параметру типа 'number'.
// // (Сложно.) Нужно иметь возможность передать любое число аргументов
// is([1], [1, 2], [1, 2, 3]) // false

function is<T>(a: T, ...b: [T, ...T[]]): boolean {
  return b.every(_ => _ === a);
}

is([1], [1, 2], [1, 2, 3]);

is(42, 42);

// is(10, 'foo');
