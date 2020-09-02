import usersActions from './usersActions';
import axios from 'axios';
// import Media from "react-media"

axios.defaults.baseURL =
  'https://frontend-test-assignment-api.abz.agency/api/v1';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const fetchUsers = (page = 1, count = 6) => dispatch => {
  dispatch(usersActions.fetchUsersRequest());
  axios
    .get(`/users?page=${page}&count=${count}`)
    .then(({ data }) => dispatch(usersActions.fetchUsersSuccess(data)))
    .catch(error => dispatch(usersActions.fetchUsersError(error)));
};

const fetchPositions = () => dispatch => {
  dispatch(usersActions.fetchPositionsRequest());
  axios
    .get('positions')
    .then(({ data }) => dispatch(usersActions.fetchPositionsSuccess(data)))
    .catch(error => dispatch(usersActions.fetchPositionsError(error)));
};

const fetchToken = () => dispatch => {
  dispatch(usersActions.fetchTokenRequest());
  axios
    .get('/token')
    .then(({ data }) => {
      dispatch(usersActions.fetchTokenSuccess(data));
      token.set(data.token);
      axios.defaults.headers.common['Token'] = data.token;
    })
    .catch(error => dispatch(usersActions.fetchUsersError(error)));
};

const postData = data => dispatch => {
  dispatch(usersActions.postDataRequest());

  console.log(data);
  axios({
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    url: '/users',
    data: data,
  })
    .then(({ data }) => {
      dispatch(usersActions.postDataSuccess(data));
    })
    .catch(error => dispatch(usersActions.postDataError(error)));
  // axios.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  // axios
  //   .post('/users', data)
  //   .then(({ data }) => {
  //     dispatch(usersActions.postDataSuccess(data));
  //   })
  //   .catch(error => dispatch(usersActions.postDataError(error)));
};

export default {
  fetchUsers,
  fetchPositions,
  fetchToken,
  postData,
};
