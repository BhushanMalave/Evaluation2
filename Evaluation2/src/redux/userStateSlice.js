import {createSlice} from '@reduxjs/toolkit';

const initialState = false;

export const userStateSlice = createSlice({
  name: 'userState',
  initialState: {
    userState: initialState,
  },
  reducers: {
    changeUserState: (state, action) => {
      state.userState = !state.userState;
    },
  },
});

export const {changeUserState} = userStateSlice.actions;

export default userStateSlice.reducer;
