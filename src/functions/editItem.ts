import { ArrayType } from '../types/array';
import { countLine } from './countLine';

export const editItemFunc = (data: any, item: any, lineIndex: number) => {
  const arrayPlusItem = [...data]
    .slice(0, data.length - 1)
    .map((el: any, index: number) => {
      if (index === lineIndex) {
        const newArray: ArrayType[] = [];
        el.forEach((el1: any) => {
          if (el1.id === item.id) {
            newArray.push({ id: el1.id, amount: el1.amount + 1 });
          } else {
            newArray.push(el1);
          }
        });
        const arrayLine = [...newArray].slice(0, newArray.length - 1);
        return [
          ...arrayLine,
          {
            id: `${newArray.length + 1}${lineIndex}`,
            amount: countLine(arrayLine)
          }
        ];
      } else {
        return el;
      }
    });
  return arrayPlusItem;
};
