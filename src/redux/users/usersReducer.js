import { createReducer } from '@reduxjs/toolkit';
import usersActions from './usersActions';

const loading = createReducer(false, {
  [usersActions.fetchUsersRequest]: () => true,
  [usersActions.fetchUsersSuccess]: () => false,
  [usersActions.fetchUsersError]: () => false,
});

const users = createReducer([], {
  [usersActions.fetchUsersSuccess]: (state, action) => action.payload,
});

export default {
  loading,
  users,
};
