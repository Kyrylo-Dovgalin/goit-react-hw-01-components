import { Profile } from './Profile';
import user from '../back-end-data/user.json';

export const App = () => {
  return (
    <>
    <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      </>
  );
};
