import { createSlice } from '@reduxjs/toolkit';

interface ArrayDataSliceState {
  arrayData: [];
  arrayPercent: [];
  lastColumn: number;
}

const initialState: ArrayDataSliceState = {
  arrayData: [],
  arrayPercent: [],
  lastColumn: 0
};

export const ArrayDataSlice = createSlice({
  name: 'arrayData',
  initialState: initialState,
  reducers: {
    setArrayData(state, action) {
      if (action.payload.type !== undefined) {
        state.arrayPercent = action.payload.data;
      } else {
        action.payload.lastColumn !== undefined &&
          (state.lastColumn = action.payload.lastColumn);
        state.arrayData = action.payload.data;
      }
    }
  }
});

export default ArrayDataSlice.reducer;
