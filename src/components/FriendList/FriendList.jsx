import PropTypes from 'prop-types';
import Item from '../FriendListItem/FriendListItem';
import css from '../FriendList/FriendList.module.css';

export default function FriendList({ friends }) {
  // console.log(friends);
  return (
    <ul className={css.friendList}>
      {friends.map(({id, avatar, name, isOnline}) => (
        <Item key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline} />
    ))}
    
    </ul>
  )
}

FriendList.propType = {
  friends: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
  })).isRequired,
  
}