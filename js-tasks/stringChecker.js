/*
чи можна сформувати заданий рядок S з двох інших рядків: P1 і P2, так, щоб не залишилось зайвих символів.

Умова в тому, що символи в P1 і P2 мають бути в тому самому порядку, що й у S.

  const s = 'radency';
  const p1 = 'rdnc';
  const p2 = 'aey';

  stringChecker(S, P1, P2) // return true
*/

export const stringChecker = () => {
  // function stringChecker(s, p1, p2) {
  //   let sIndex = 0;
  //   let p1Index = 0;
  //   let p2Index = 0;
  //   let lastMatch = 0;

  //   while (sIndex < s.length) {
  //     // check part last match
  //     if (lastMatch === 0) {
  //       // Check symbol s in part p1
  //       if (s[sIndex] === p1[p1Index]) {
  //         sIndex++;
  //         p1Index++;
  //         lastMatch = 0;
  //       }
  //       // Check symbol s in part p2
  //       else if (s[sIndex] === p2[p2Index]) {
  //         sIndex++;
  //         p2Index++;
  //         lastMatch = 1;
  //       } else {
  //         // symbol s does not include either p1 or p2
  //         return false;
  //       }
  //     } else {
  //       // Check symbol s in part p2
  //       if (s[sIndex] === p2[p2Index]) {
  //         sIndex++;
  //         p2Index++;
  //         lastMatch = 1;
  //       }
  //       // Check symbol s in part p1
  //       else if (s[sIndex] === p1[p1Index]) {
  //         sIndex++;
  //         p1Index++;
  //         lastMatch = 0;
  //       } else {
  //         // symbol s does not include either p1 or p2
  //         return false;
  //       }
  //     }
  //   }
  //   // check other symbol in p1 and p2
  //   return p1Index === p1.length && p2Index === p2.length;
  // }

  function stringChecker(S, P1, P2, sIndex = 0, p1Index = 0, p2Index = 0) {
    if (sIndex === S.length) {
      // Досягли кінця рядка S, перевіряємо, чи досягли кінця P1 та P2
      return p1Index === P1.length && p2Index === P2.length;
    }

    // Спроба зібрати S починаючи з рядка P1
    if (p1Index < P1.length && S[sIndex] === P1[p1Index]) {
      if (stringChecker(S, P1, P2, sIndex + 1, p1Index + 1, p2Index)) {
        return true;
      }
    }

    // Спроба зібрати S починаючи з рядка P2
    if (p2Index < P2.length && S[sIndex] === P2[p2Index]) {
      if (stringChecker(S, P1, P2, sIndex + 1, p1Index, p2Index + 1)) {
        return true;
      }
    }

    return false;
  }

  // const s = 'radency';
  // const p1 = 'rdnc';
  // const p2 = 'aey';

  // const S = 't d P4pjdjV cB2tL1e';
  // const P1 = ' PVcBL1';
  // const P2 = 't d4pjdj 2te';

  const S = 'w27y7';
  const P1 = '27';
  const P2 = 'w7y';

  console.log(stringChecker(S, P1, P2));
};
