import { UserProps } from "../types/user";
import { Link } from 'react-router-dom';

import { MdLocationPin } from 'react-icons/md';
import classes from './User.module.css';

const User = ({avatar_url, login, location, followers, following}: UserProps) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login}/>
      <h2>{login}</h2>
      { location && (
        <p className={classes.location}>
          <MdLocationPin/>
          <span>{location}</span>
        </p>
      )}
      <div className={classes.followField}>
        <div className={classes.follow}>
          <p className={classes.followTitle}>Followers:</p>
          <p>{followers}</p>
        </div>
        <div className={classes.follow}>
          <p className={classes.followTitle}>Following:</p>
          <p>{following}</p>
        </div>
      </div>

      {/* Resolve - Redirect Error */}
      {/* <Link to={`/repos/${login}`} className={classes.button}>See more projects</Link> */}
      <a target='_blank' href={`https://github.com/${login}`} className={classes.button}>See more projects</a>
    </div>
  )
}

export default User