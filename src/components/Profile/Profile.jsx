import css from './Profile.module.css';

export default function Profile({
  username,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div className={css.info_container}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stats_item}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.stats_item}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.stats_item}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
