import React, { FC } from 'react';
import { CLOSE_ICON, PLUS_ICON } from '../../../../constants/images';
import { useAppDispatch } from '../../../../hooks/redux';
import { editItem } from '../../../../redux/store/actionCreator/actionCreator';
import { ArrayType } from '../../../../types/array';
import { TableItemTd } from '../tableItemTd';
import style from './index.module.css';

interface TableItemProps {
  data: any;
  defaultData: any;
  nearestData: [];
  lineIndex: any;
  containerStyle?: any;
  onMouseEnter: (
    data: any,
    indexItem: number,
    isMouse: boolean,
    el: ArrayType,
    lineIndex: number
  ) => void;
  onDelete: (index: number) => void;
  addLine: () => void;
}

export const TableItemTr: FC<TableItemProps> = ({
  data,
  defaultData,
  nearestData,
  lineIndex,
  onMouseEnter,
  onDelete,
  addLine
}) => {
  const dispatch = useAppDispatch();

  const onClick = (value: ArrayType, index: number) => {
    index !== data.length - 1 &&
      dispatch(editItem(defaultData, value, lineIndex));
  };

  const deleteLine = () => {
    onDelete(lineIndex);
  };

  const onMouseMove = (el: ArrayType, index: number, isMove: boolean) => {
    onMouseEnter(data, index, isMove, el, lineIndex);
  };

  return (
    <tr>
      {data.map((el: any, index: any) => {
        return (
          <TableItemTd
            key={el.id}
            data={el}
            nearestData={nearestData}
            index={index}
            lineIndex={lineIndex}
            onClick={onClick}
            onMouseEnter={onMouseMove}
          />
        );
      })}
      <td className={style.containerButton}>
        <img src={CLOSE_ICON} onClick={deleteLine} className={style.image} />
        <img src={PLUS_ICON} onClick={addLine} className={style.image} />
      </td>
    </tr>
  );
};
