import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';

import user from '../back-end-data/user.json';
import data from '../back-end-data/data.json';
import friends from 'back-end-data/friends'
import transactions from 'back-end-data/transactions'

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

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions} />;
      
      </>
  );
};
