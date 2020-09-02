import axios from 'axios';

axios.defaults.baseURL =
  'https://frontend-test-assignment-api.abz.agency/api/v1';

const fetchUsers = (page = 1) => {
  axios.get(`/users?page=${page}&count=3`).then(response => response.data.user);
};

export default { fetchUsers };
