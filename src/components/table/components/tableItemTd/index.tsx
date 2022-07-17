import React, { FC, useState } from 'react';
import { useEffect } from 'react';
import { COLORS } from '../../../../constants/colors';
import { ArrayType } from '../../../../types/array';

interface TableItemProps {
  data: ArrayType;
  nearestData: any;
  index: number;
  lineIndex: number;
  onMouseEnter: (el: ArrayType, index: number, isMove: boolean) => void;
  onClick: (el: ArrayType, index: number) => void;
}

interface StyleSheet {
  [key: string]: React.CSSProperties;
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
      style={isNearest ? styles.anotherStyle : null}
    >
      {data.amount}
    </td>
  );
};

const styles: StyleSheet = {
  anotherStyle: {
    backgroundColor: COLORS.SUNGLO
  }
};
