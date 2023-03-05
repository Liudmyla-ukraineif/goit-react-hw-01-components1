import PropTypes from 'prop-types';
import css from '../FriendListItem/FriendListItem.module.css';

export default function Item({ avatar, name, isOnline }) {
  return (
  <li className={css.item}>
    <span className={ `${css.status} ${isOnline ? css.isOnline : css.ofLine}`}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
  </li>
  )
  
}

Item.propType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
}
