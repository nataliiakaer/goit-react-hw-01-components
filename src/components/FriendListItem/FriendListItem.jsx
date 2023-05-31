import F from './FriendListItem.module.css';

export const FriendListItem = props => {
  return (
    <li className={F.item}>
      <span className={props.isOnline ? F.green : F.red}></span>
      <img className="avatar" src={props.avatar} alt={props.name} width="48" />
      <p className="name">{props.name}</p>
    </li>
  );
};
