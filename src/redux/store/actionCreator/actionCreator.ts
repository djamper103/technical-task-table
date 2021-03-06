import { countColumn } from '../../../functions/countColumn';
import { editItemFunc } from '../../../functions/editItem';
import { nearestElementFunc } from '../../../functions/nearestElement';
import { percentOfTheNumbersFunc } from '../../../functions/percentOfTheNumbers';
import { setArrayFunc } from '../../../functions/setArray';
import { ArrayDataSlice } from '../reducers/arrayDataSlice';
import { NearestDataSlice } from '../reducers/nearestDataSlice';
import { AppDispatch } from '../store';

export const setArray = (data: any) => (dispatch: AppDispatch) => {
  dispatch(ArrayDataSlice.actions.setArrayData(data));
};

export const setNewArray =
  (lineIndex?: number, column?: number) => (dispatch: AppDispatch) => {
    let setData: any = setArrayFunc(lineIndex && lineIndex, column && column);

    const columnAverage = countColumn(setData);

    setData = [...setData, columnAverage];

    dispatch(ArrayDataSlice.actions.setArrayData({ data: setData }));
  };

export const addLine =
  (data: any, columnIndex: number) => (dispatch: AppDispatch) => {
    const lastColumn =
      columnIndex != undefined
        ? columnIndex === 0
          ? data.length - 1
          : columnIndex + 1
        : columnIndex;

    const setData: any = setArrayFunc(data[0].length - 1, 1, lastColumn);

    const addNewLine = [...data.slice(0, data.length - 1), ...setData];

    const columnAverage = countColumn(addNewLine, lastColumn);

    dispatch(
      ArrayDataSlice.actions.setArrayData({
        data: [...addNewLine, columnAverage],
        lastColumn
      })
    );
  };

export const deleteLine =
  (data: any, lineIndex: any, columnIndex: number, isModalFunc?: () => void) =>
  (dispatch: AppDispatch) => {
    if (lineIndex !== data.length - 1) {
      const arrayFilter = data.filter(
        (el: any, index: number) =>
          index != lineIndex && index != data.length - 1
      );
      const columnAverage = countColumn(arrayFilter, columnIndex);

      arrayFilter.length === 0 && isModalFunc();

      dispatch(
        ArrayDataSlice.actions.setArrayData({
          data: arrayFilter.length > 0 ? [...arrayFilter, columnAverage] : []
        })
      );
    }
  };

export const editItem =
  (data: any, item: any, lineIndex: number) => (dispatch: AppDispatch) => {
    const arrayPlusItem = editItemFunc(data, item, lineIndex);

    const columnAverage = countColumn(arrayPlusItem);

    dispatch(
      ArrayDataSlice.actions.setArrayData({
        data: [...arrayPlusItem, columnAverage]
      })
    );
  };

export const percentOfTheNumbers =
  (data?: any, lineIndex?: number) => (dispatch: AppDispatch) => {
    if (data.length > 0) {
      const result = percentOfTheNumbersFunc(data, lineIndex);
      dispatch(
        ArrayDataSlice.actions.setArrayData({ type: 'percent', data: result })
      );
    } else {
      dispatch(
        ArrayDataSlice.actions.setArrayData({ type: 'percent', data: [] })
      );
    }
  };

export const nearestElement =
  (data?: any, lineIndex?: any, el?: any, nearestLimit?: number) =>
  (dispatch: AppDispatch) => {
    let result: any = [];
    if (data.length > 0) {
      result = nearestElementFunc({
        data: data.slice(0, data.length - 1),
        lineIndex,
        el,
        nearestLimit
      });
    }

    dispatch(NearestDataSlice.actions.setNearestData(result));
  };
