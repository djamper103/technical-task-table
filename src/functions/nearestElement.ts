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
  const result: any = {};
  data.forEach((item: any) => {
    if (
      el.id !== item.id &&
      el.amount - nearestLimit < item.amount &&
      el.amount + nearestLimit > item.amount
    ) {
      if (result[lineIndex] === undefined) {
        result[lineIndex] = [item];
      } else {
        result[lineIndex] = [...result[lineIndex], item];
      }
    }
  });

  return result[lineIndex] !== undefined && result[lineIndex].length > 4
    ? { lineIndex: result[lineIndex].slice(0, nearestCount) }
    : result;
};
