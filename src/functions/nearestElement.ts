export const nearestElementFunc = ({
  data,
  lineIndex,
  el,
  nearestCount = 4,
  nearestLimit = 200
}: {
  data: any;
  lineIndex: number;
  el: any;
  nearestCount?: number;
  nearestLimit?: number;
}) => {
  const container: any = {};
  data.forEach((item: any) => {
    if (
      el.id !== item.id &&
      el.amount - nearestLimit < item.amount &&
      el.amount + nearestLimit > item.amount
    ) {
      if (container[lineIndex] === undefined) {
        container[lineIndex] = [item];
      } else {
        container[lineIndex] = [...container[lineIndex], item];
      }
    }
  });

  const result = {};
  result[lineIndex] =
    container[lineIndex] !== undefined &&
    container[lineIndex].length > 4 &&
    container[lineIndex].slice(0, nearestCount);

  return container[lineIndex] !== undefined && container[lineIndex].length > 4
    ? result
    : container;
};
