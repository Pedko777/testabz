import { createAction } from '@reduxjs/toolkit';

const fetchUsersRequest = createAction('users/FETCH_REQUEST');
const fetchUsersSuccess = createAction('users/FETCH_SUCCESS');
const fetchUsersError = createAction('users/FETCH_ERROR');

export default {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersError,
};
