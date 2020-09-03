const getLoading = state => state.usersRoot.loading;
const getUsers = state => state.users;
const getCurrentPage = state => state.users.page;
const getCountCards = state => state.users.count;
const getLastFetch = state => state.nextFetch;
const getPositons = state => state.positions;
const getToken = state => state.token;

export default {
  getUsers,
  getLoading,
  getLastFetch,
  getCurrentPage,
  getCountCards,
  getPositons,
  getToken,
};
