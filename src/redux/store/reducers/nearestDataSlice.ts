import { createSlice } from '@reduxjs/toolkit';
import { ArrayType } from '../../../types/array';

interface ArrayDataSliceState {
  nearestData: [];
  lastItem: ArrayType | null;
}

const initialState: ArrayDataSliceState = {
  nearestData: [],
  lastItem: null
};

export const NearestDataSlice = createSlice({
  name: 'nearestData',
  initialState: initialState,
  reducers: {
    setNearestData(state, action) {
      state.nearestData = action.payload;
    }
  }
});

export default NearestDataSlice.reducer;
