import { createAction } from '@reduxjs/toolkit';

const fetchUsersRequest = createAction('users/FETCH_REQUEST');
const fetchUsersSuccess = createAction('users/FETCH_SUCCESS');
const fetchUsersError = createAction('users/FETCH_ERROR');

const fetchPositionsRequest = createAction('positions/FETCH_REQUEST');
const fetchPositionsSuccess = createAction('positions/FETCH_SUCCESS');
const fetchPositionsError = createAction('positions/FETCH_ERROR');

const fetchTokenRequest = createAction('token/FETCH_REQUEST');
const fetchTokenSuccess = createAction('token/FETCH_SUCCESS');
const fetchTokenError = createAction('token/FETCH_ERROR');

const postDataRequest = createAction('postData/FETCH_REQUEST');
const postDataSuccess = createAction('postData/FETCH_SUCCESS');
const postDataError = createAction('postData/FETCH_ERROR');

export default {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersError,

  fetchPositionsRequest,
  fetchPositionsSuccess,
  fetchPositionsError,

  fetchTokenRequest,
  fetchTokenSuccess,
  fetchTokenError,

  postDataRequest,
  postDataSuccess,
  postDataError,
};
