export default null; // Force module mode

//  Какой тип выведет TypeScript для каждого из этих значений?
let a = 1042;

let b = 'apples and oranges';

const c = 'pineapples';

let d = [true, true, false];

let e = { type: 'ficus' };

let f = [1, false];

const g = [3];

let h = null;

// Почему каждый из этих примеров выдает ошибку?

let i: 3 = 3;
// i = 4;

let j = [1, 2, 3];
j.push(4);
// j.push('5');

// let k: never = 4;

let l: unknown = 4;
// let m = l * 2;
