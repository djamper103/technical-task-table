import React, { FC } from 'react';
import { ArrayType } from '../../types/array';
import { Table } from '../table';

interface StartPageProps {
  data?: any;
  nearestData: [];
  onMouseEnter: (
    data: any,
    indexItem: number,
    isMouse: boolean,
    el: ArrayType,
    lineIndex: number
  ) => void;
  addLine: (value: any) => void;
  deleteLine: (value: any, index: number) => void;
}

export const StartPage: FC<StartPageProps> = ({
  data,
  nearestData,
  onMouseEnter,
  addLine,
  deleteLine
}) => {
  const onAddLine = () => {
    addLine(data);
  };

  const onDelete = (index: number) => {
    deleteLine(data, index);
  };

  return (
    <div>
      <Table
        data={data}
        nearestData={nearestData}
        onMouseEnter={onMouseEnter}
        onDelete={onDelete}
        addLine={onAddLine}
      />
    </div>
  );
};
