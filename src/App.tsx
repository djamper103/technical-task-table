import React, { useState } from 'react';
import { LoaderScreen } from './common/loader';
import { PortalContainer } from './common/portalContainer/index';
import { StartPage } from './components/startPage';
import { StartValues } from './components/startValues';
import { TextPlusButton } from './components/textPlusButton';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import {
  percentOfTheNumbers,
  setNewArray,
  nearestElement,
  deleteLine,
  addLine
} from './redux/store/actionCreator/actionCreator';
import { ArrayType } from './types/array';

function App() {
  const { arrayData, arrayPercent, lastColumn } = useAppSelector(
    (reducer) => reducer.arrayDataReducer
  );

  const { nearestData } = useAppSelector(
    (reducer) => reducer.nearestDataReducer
  );

  const [isModal, setIsModal] = useState(true);
  const [isTable, setIsTable] = useState(false);

  const dispatch = useAppDispatch();

  const setStartArray = (value?: any) => {
    if (value !== undefined) {
      if (value.line == 0 || value.column == 0) {
        setIsTable(true);
      } else {
        dispatch(setNewArray(value.line, value.column));
      }
    } else {
      dispatch(setNewArray());
    }
    setIsModal(false);
  };

  const onMouseEnter = (
    data: any,
    indexItem: number,
    isMouse: boolean,
    el: ArrayType,
    lineIndex: number
  ) => {
    if (indexItem === data.length - 1) {
      if (isMouse) {
        dispatch(percentOfTheNumbers(arrayData, lineIndex));
      } else {
        dispatch(percentOfTheNumbers([]));
      }
    } else {
      if (isMouse) {
        dispatch(nearestElement(data, lineIndex, el));
      } else {
        dispatch(nearestElement([]));
      }
    }
  };

  const tableIsNull = () => {
    setIsModal(true);
    setIsTable(false);
  };

  const onAddLine = (data: any) => {
    dispatch(addLine(data, lastColumn));
  };

  const onDelete = (data: any, index: number) => {
    dispatch(deleteLine(data, index, lastColumn));
  };

  return (
    <div>
      {isModal ? (
        <PortalContainer>
          <StartValues setStartArray={setStartArray} />
        </PortalContainer>
      ) : isTable ? (
        <TextPlusButton
          onClick={tableIsNull}
          text={`You can of course enter line = 0, column = 0 or line , column = 0,
           but we won't be able to build a table of this dimension, try values from 1 to 100`}
          buttonText={'Try one more time'}
        />
      ) : arrayData.length > 0 ? (
        <StartPage
          data={arrayPercent.length > 0 ? arrayPercent : arrayData}
          nearestData={nearestData}
          onMouseEnter={onMouseEnter}
          addLine={onAddLine}
          deleteLine={onDelete}
        />
      ) : (
        <LoaderScreen />
      )}
    </div>
  );
}

export default App;
