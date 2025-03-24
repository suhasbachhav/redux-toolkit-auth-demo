import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCounter: true
};

const counterSlice  = createSlice({
  name : 'counter',
  initialState,
  reducers:{
    counterHandler(state, action){
      console.log(action)
      state.counter = state.counter + action.payload;
    },
    toggleCounterHandler(state){
      state.showCounter = !state.showCounter;
    },
    resetHandler(state){
      state.counter = 0;
    }
  }
});

const store = configureStore({
  reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;