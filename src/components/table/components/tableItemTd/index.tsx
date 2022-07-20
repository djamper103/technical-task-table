import React, { FC, useState } from 'react';
import { useEffect } from 'react';
import { ArrayType } from '../../../../types/array';

interface TableItemProps {
  data: ArrayType;
  nearestData: any;
  index: number;
  lineIndex: number;
  onMouseEnter: (el: ArrayType, index: number, isMove: boolean) => void;
  onClick: (el: ArrayType, index: number) => void;
}

export const TableItemTd: FC<TableItemProps> = ({
  data,
  nearestData,
  index,
  lineIndex,
  onMouseEnter,
  onClick
}) => {
  const [isOnMouse, setIsOnMouse] = useState(false);
  const [isNearest, setIsNearest] = useState(false);

  const onClickItem = () => {
    onClick(data, index);
  };
  const onMouse = () => {
    setIsOnMouse(!isOnMouse);
    onMouseEnter(data, index, !isOnMouse);
  };

  useEffect(() => {
    nearestData[lineIndex] != undefined &&
    nearestData[lineIndex].filter((el: ArrayType) => el.id === data.id).length >
      0
      ? setIsNearest(true)
      : setIsNearest(false);
  }, [nearestData]);

  return (
    <td
      key={data.id}
      onClick={onClickItem}
      onMouseEnter={onMouse}
      onMouseLeave={onMouse}
      style={{ backgroundColor: isNearest && '#E66570' }}
    >
      {data.amount}
    </td>
  );
};
