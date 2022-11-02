import {configureStore} from '@reduxjs/toolkit';
import siteReducer from '../redux/Slice';
import {persistReducer} from 'redux-persist';
import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userStateReducer from '../redux/userStateSlice';
import userIdReducer from '../redux/userIdSlice';
import userCountReducer from '../redux/userCountSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const reducer = combineReducers({
  site: siteReducer,
  userState: userStateReducer,
  userId: userIdReducer,
  userCount: userCountReducer,
});

const persistRed = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: persistRed,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
