import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import F from './FriendList.module.css';

export const FriendList = props => {
  return (
    <section className={F.friends}>
      <ul className="friend-list">
        {props.friends.map(({ id, avatar, name, isOnline }) => {
          return (
            <FriendListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          );
        })}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number,
    })
  ),
};
