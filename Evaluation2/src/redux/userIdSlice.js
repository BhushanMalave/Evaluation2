import {createSlice} from '@reduxjs/toolkit';

var initialState = 1;

export const userIdSlice = createSlice({
  name: 'userId',
  initialState: {
    userId: initialState,
  },
  reducers: {
    assignUserId: (state, action) => {
      state.userId = action.payload.userId;
    },
  },
});

export const {assignUserId} = userIdSlice.actions;

export default userIdSlice.reducer;
