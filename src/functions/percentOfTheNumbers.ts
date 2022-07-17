export const percentOfTheNumbersFunc = (data: any, lineIndex?: number) => {
  const result = data.map((el: any, index: number) => {
    if (index === lineIndex) {
      return el.map((el1: any) => {
        return {
          id: el1.id,
          amount: `(${el1.amount}/${el[el.length - 1].amount}) * 100 = ${(
            (el1.amount / el[el.length - 1].amount) *
            100
          ).toFixed(2)}%`
        };
      });
    } else {
      return el;
    }
  });
  return result;
};
