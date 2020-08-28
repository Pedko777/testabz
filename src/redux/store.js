import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import usersReducer from './users/usersReducer';

const store = configureStore({
  reducer: usersReducer,
  middleware: [thunk],
});

export default store;
