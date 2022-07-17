import React, { FC } from 'react';
import { ArrayType } from '../../types/array';
import { TableItemTr } from './components/tableItemTr';
import style from './index.module.css';

interface TableProps {
  data: any;
  nearestData: [];
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

export const Table: FC<TableProps> = ({
  data,
  nearestData,
  onMouseEnter,
  onDelete,
  addLine
}) => {
  return (
    <div style={style.home}>
      <table>
        <tbody>
          {data.map((el: any, index: React.Key | null | undefined) => {
            return (
              <TableItemTr
                key={index}
                data={el}
                defaultData={data}
                nearestData={nearestData}
                lineIndex={index}
                onMouseEnter={onMouseEnter}
                onDelete={onDelete}
                addLine={addLine}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
