import {createSlice} from '@reduxjs/toolkit';

var initialState = 1;

export const userCountSlice = createSlice({
  name: 'userCount',
  initialState: {
    value: initialState,
  },
  reducers: {
    incrementUserCount: (state, action) => {
      state.value = state.value + 1;
    },
  },
});

export const {incrementUserCount} = userCountSlice.actions;

export default userCountSlice.reducer;
