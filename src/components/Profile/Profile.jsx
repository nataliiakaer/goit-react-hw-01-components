import PropTypes from 'prop-types';
import P from './Profile.module.css';

export const Profile = props => {
  return (
    <section className={P.profile}>
      <div className={P.description}>
        <img src={props.avatar} alt={props.username} className={P.avatar} />
        <p className={P.name}>{props.username}</p>
        <p className={P.tag}>@{props.tag}</p>
        <p className={P.location}>{props.location}</p>
      </div>

      <ul className={P.stats}>
        <li className={P.statsItem}>
          <span className={P.label}>Followers</span>
          <span className={P.quantity}>{props.stats.followers}</span>
        </li>
        <li className={P.statsItem}>
          <span className={P.label}>Views</span>
          <span className={P.quantity}>{props.stats.views}</span>
        </li>
        <li className={P.statsItem}>
          <span className={P.label}>Likes</span>
          <span className={P.quantity}>{props.stats.likes}</span>
        </li>
      </ul>
    </section>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
