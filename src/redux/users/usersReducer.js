import { createReducer } from '@reduxjs/toolkit';
import usersActions from './usersActions';

const loading = createReducer(false, {
  [usersActions.fetchUsersRequest]: () => true,
  [usersActions.fetchUsersSuccess]: () => false,
  [usersActions.fetchUsersError]: () => false,
});

const nextFetch = createReducer(true, {
  [usersActions.fetchUsersSuccess]: () => true,
  [usersActions.fetchUsersError]: () => false,
});

const users = createReducer([], {
  [usersActions.fetchUsersSuccess]: (state, action) => {
    return [...state, ...action.payload.users];
  },
});

const positions = createReducer([], {
  [usersActions.fetchPositionsSuccess]: (state, action) => {
    return action.payload.positions;
  },
});

const token = createReducer('', {
  [usersActions.fetchTokenSuccess]: (state, action) => {
    return action.payload.token;
  },
});

export default {
  loading,
  users,
  nextFetch,
  positions,
  token,
};

// const users = createReducer([], {
//   [usersActions.fetchUsersSuccess]: (state, action) => ({
//     ...state,
//     users: {
//       ...state.users,
//       users: { ...state.users.users, ...action.payload },
//     },
//   }),
// });
