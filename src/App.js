import Container from './components/Container/Container';

import Profile from './components/social-profile/SocialProfile';
import user from './Data/user.json';

import FriendList from './components/friend-list/FriendList';
import friends from './Data/friends.json';

import Statistics from './components/statistics/Statistics';
import statisticalData from './Data/statistical-data.json';

import TransactionHistory from './components/transaction-history/TransactionHistory';
import transactions from './Data/transactions.json';

export default function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <FriendList friends={friends} />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <TransactionHistory items={transactions} />
    </Container>
  );
}
