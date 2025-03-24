import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
    counter: 0,
    showCounter: true
};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        counterHandler(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounterHandler(state) {
            state.showCounter = !state.showCounter;
        },
        resetHandler(state) {
            state.counter = 0;
        }
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;