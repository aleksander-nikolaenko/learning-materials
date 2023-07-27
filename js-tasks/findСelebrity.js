/**
 * Потрібно створити функцію яка буде приймати 1 параметр(масив юзерів) і серед них шукати Нарциса і повертати його імя(стрінгою) якщо в масиві немає Нарциса функція повертає пусту стрінгу, умова заключається в тому що НАРЦИС не знає нікого НАРЦИСА знають ВСІ
 */

export const findCelebrity = () => {
  const people1 = [
    {
      name: 'Alex',
      know: ['Alex', 'Jhon'],
    },
    {
      name: 'Jhon',
      know: [],
    },
    {
      name: 'Eva',
      know: ['Alex', 'Jhon'],
    },
    {
      name: 'Ivan',
      know: ['Jhon', 'Eva'],
    },
  ];
  //нарцис  'Jhon'

  const people2 = [
    {
      name: 'Alex',
      know: ['Alex', 'Jhon'],
    },
    {
      name: 'Jhon',
      know: [],
    },
    {
      name: 'Eva',
      know: [],
    },
    {
      name: 'Ivan',
      know: ['Jhon', 'Eva'],
    },
  ];
  //немає нарциса'

  const people3 = [
    {
      name: 'Alex',
      know: ['Alex', 'Eva'],
    },
    {
      name: 'Jhon',
      know: [],
    },
    {
      name: 'Eva',
      know: ['Alex', 'Jhon'],
    },
    {
      name: 'Ivan',
      know: ['Jhon', 'Eva'],
    },
  ];
  //немає нарциса

  const people4 = [
    {
      name: 'Alex',
      know: ['Alex', 'Jhon'],
    },
    {
      name: 'Jhon',
      know: ['Eva'],
    },
    {
      name: 'Eva',
      know: ['Alex', 'Jhon'],
    },
    {
      name: 'Ivan',
      know: ['Jhon', 'Eva'],
    },
  ];
  //немає нарциса'

  // первый вариант решения

  function findNarcissus(arr) {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].know.length === 0) {
        for (let j = 0; j < arr.length; j += 1) {
          if (j === i) continue;
          if (!arr[j].know.includes(arr[i].name)) {
            return 'no Narcissus';
          } else {
            continue;
          }
        }
        return arr[i].name;
      } else {
        continue;
      }
    }
    return 'no Narcissus';
  }

  /// второй вариант решения

  function findNar(arr) {
    const maybeNar = arr.filter((item) => !item.know.length);

    if (maybeNar.length !== 1) {
      return '';
    }

    const name = maybeNar[0].name;
    const response = arr
      .filter((item) => item.know.length)
      .every((item) => item.know.includes(name));

    return response ? name : '';
  }

  // console.log(findNarcissus(people1));
  // console.log(findNarcissus(people2));
  // console.log(findNarcissus(people3));
  // console.log(findNarcissus(people4));

  console.log(findNar(people1));
  console.log(findNar(people2));
  console.log(findNar(people3));
  console.log(findNar(people4));
};
