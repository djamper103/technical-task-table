export const countLine = (data: any) => {
  const result = data.reduce((sum: number, el: any) => {
    return sum + el.amount;
  }, 0);
  return result;
};
