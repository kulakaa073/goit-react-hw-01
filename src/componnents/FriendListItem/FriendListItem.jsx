import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ key, avatar, name, isOnline }) {
  return (
    <li key={key} className={css.container}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.online : css.offline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
}
