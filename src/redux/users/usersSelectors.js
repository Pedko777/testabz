const getLoading = state => state.usersRoot.loading;
const getUsers = state => state.users.users;
// const getUsers = state => console.log(state);

export default {
  getUsers,
  getLoading,
};
