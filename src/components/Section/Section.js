import PropTypes from 'prop-types';
import css from '../Section/Section.module.css';
import User from "../User/User";

export default function Section({items:{username, tag, location, avatar, stats}}){
  return (
    <div className={css.profile}>
        <User key={tag}
          userName={username}
          tagName={tag}
          location={location}
          avatarUrl={avatar}
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}></User>
    </div>
  );
};

Section.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
}
