import usersActions from './usersActions';
import axios from 'axios';
// import Media from "react-media"

axios.defaults.baseURL =
  'https://frontend-test-assignment-api.abz.agency/api/v1';

const fetchUsers = (page = 1) => dispatch => {
  dispatch(usersActions.fetchUsersRequest());
  axios
    .get(`/users?page=${page}&count=3`)
    .then(({ data }) => dispatch(usersActions.fetchUsersSuccess(data)))
    .catch(error => dispatch(usersActions.fetchUsersError(error)));
};

export default {
  fetchUsers,
};
