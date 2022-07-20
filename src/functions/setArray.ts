import { countLine } from './countLine';

export const setArrayFunc = (
  line?: number,
  column?: number,
  lastColumn?: number
) => {
  const defaultRangeLine = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const defaultRangeColumn = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const arrayData = [];

  for (let i = 0; i < (column ? column : defaultRangeColumn); i++) {
    const arrayLine: any = [];

    let currentColumn: number;

    const lastColumnCount =
      lastColumn != undefined && lastColumn > 0 ? lastColumn : i;

    for (let j = 0; j < (line ? line : defaultRangeLine); j++) {
      const currentNumber = Math.floor(Math.random() * (1000 - 100 + 1) + 100);
      arrayLine.push({
        id: `${lastColumnCount}${j}`,
        amount: currentNumber
      });
      currentColumn = j + 1;
    }

    const lineCount = countLine(arrayLine);

    arrayData.push([
      ...arrayLine,
      {
        id: `${lastColumnCount}${currentColumn}`,
        amount: lineCount
      }
    ]);
  }

  return arrayData;
};
