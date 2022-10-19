import {configureStore} from '@reduxjs/toolkit';
import siteReducer from "../redux/Slice"

export const Store = configureStore({
  reducer: {
    site:siteReducer,
  },
});