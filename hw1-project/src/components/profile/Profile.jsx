import css from "./Profile.module.css";

function Profile({name, tag, location, stats, image}) {
    return (
        <>
            <div className={css.profile}>
                <div className={css['profile-card']}>
                    <img className={css["profile-card--image"]} src={image} alt="User avatar"/>
                    <p className={css["profile-card--name"]}>{name}</p>
                    <p className={css["profile-card--tag"]}>@{tag}</p>
                    <p className={css["profile-card--location"]}>{location}l</p>
                </div>

                <ul className={css["profile-stats--list"]}>
                    <li className={css["profile-stats--item"]}>
                        <span className={css["profile-stats--title"]}>Followers</span>
                        <span className={css["profile-stats--value"]}>{stats?.followers}</span>
                    </li>

                    <li className={css["profile-stats--item"]}>
                        <span className={css["profile-stats--title"]}>Views</span>
                        <span className={css["profile-stats--value"]}>{stats?.views}</span>
                    </li>

                    <li className={css["profile-stats--item"]}>
                        <span className={css["profile-stats--title"]}>Likes</span>
                        <span className={css["profile-stats--value"]}>{stats?.likes}</span>
                    </li>
                </ul>
            </div>
    </>
  )
}

export default Profile
