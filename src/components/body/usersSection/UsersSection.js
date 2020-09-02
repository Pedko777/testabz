import React, { useState, useEffect } from 'react';
import styles from './UsersSection.module.scss';
import Button from '../../buttons/Button';
import { useDispatch, useSelector } from 'react-redux';
// import { connect } from 'react-redux';
import usersOperations from '../../../redux/users/usersOperations';
// import usersSelectors from '../../../redux/users/usersSelectors';
import UserCard from '../../userCard/UserCard';
import shortId from 'shortid';

const UsersSection = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(6);

  const dispatch = useDispatch();

  if (window.matchMedia('(max-width: 767px)').matches) {
    if (count !== 3) {
      setCount(3);
    }
  } else {
    if (count !== 6) {
      setCount(6);
    }
  }

  const nextFetch = useSelector(state => state.nextFetch);

  useEffect(() => {
    dispatch(usersOperations.fetchUsers(page, count));
  }, []);

  const fetchNextCards = () => {
    dispatch(usersOperations.fetchUsers(page + 1, 3));
    setPage(page + 1);
  };
  const users = useSelector(state => state.users);

  // console.log(positions);
  // render() {
  // const { users, nextFetch } = this.props;

  return (
    <div className={`${styles.sectionBg} container`}>
      <div className={`${styles.sectionWrapper} wrapper`}>
        <h2 className={styles.sectionTitle}>Our cheerful users</h2>
        <p className={styles.sectionDescription}>
          Attention! Sorting users by registration date
        </p>
        <ul className={styles.cardsList}>
          {users &&
            users.map(user => (
              <li key={shortId.generate()} className={styles.userCardWrapper}>
                <UserCard user={user} />
              </li>
            ))}
        </ul>

        <Button
          disabled={!nextFetch}
          text="Show more"
          onClick={fetchNextCards}
        />
      </div>
    </div>
  );
};

export default UsersSection;
