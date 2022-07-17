import { combineReducers, configureStore } from '@reduxjs/toolkit';
import arrayDataReducer from './reducers/arrayDataSlice';
import nearestDataReducer from './reducers/nearestDataSlice';

const rootReducer = combineReducers({
  arrayDataReducer,
  nearestDataReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
