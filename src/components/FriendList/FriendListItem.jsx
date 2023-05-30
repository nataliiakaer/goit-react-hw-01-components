
export const FriendListItem = props => {
  return (
    <li className="item">
      <span className="status">{props.isOnline}</span>
      <img className="avatar" src={props.avatar} alt={props.name} width="48" />
      <p className="name">{props.name}</p>
    </li>
  );
};