import React, { Component } from 'react';
import usersOperations from '../../redux/users/usersOperations';
import usersSelectors from '../../redux/users/usersSelectors';
import { connect } from 'react-redux';

import UserCard from '../userCard/UserCard';
import styles from './usersCardList.module.scss';

class UsersCardList extends Component {
  componentDidMount() {
    this.props.onFetchCurrentUsers();
  }

  render() {
    const { users } = this.props;

    return (
      <ul className={styles.cardsList}>
        {users &&
          users.map(user => (
            <li key={user.id} className={styles.userCardWrapper}>
              <UserCard user={user} />
            </li>
          ))}
      </ul>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: usersSelectors.getUsers(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onFetchCurrentUsers: () => dispatch(usersOperations.fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersCardList);
