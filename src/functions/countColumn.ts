export const countColumn = (data: any[], lastColumn?: number) => {
  const columnObj: any = {};

  data.forEach((el) => {
    el.forEach((el1: any, index: number) => {
      if (columnObj[index] === undefined) {
        columnObj[index] = el1.amount;
      } else {
        columnObj[index] = columnObj[index] + el1.amount;
      }
    });
  });

  const result: any = [];

  Object.keys(columnObj).forEach((el: any) => {
    result.push({
      id: `${lastColumn != undefined ? lastColumn + 1 : data.length}${el}`,
      amount: columnObj[el]
    });
  });

  return result;
};
