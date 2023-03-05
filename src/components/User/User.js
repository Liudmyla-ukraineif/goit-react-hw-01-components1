import PropTypes from 'prop-types';
import css from '../User/Users.module.css';

export default function User({userName, tagName, location, avatarUrl, followers, views, likes}) {
  return (
    <div className={css.profile}>
      <div className={css.description} >
        <img
          src={avatarUrl}
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>{userName}</p>
        <p className={css.tag}>{tagName}</p>
        <p className={css.location}>{location}</p>
      </div>

    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{likes}</span>
      </li>
    </ul>
    
  </div>);
}
  
  
User.propTypes = {
  userName: PropTypes.string.isRequired,
  tagName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired
}