import './App.css';
// Components import
import Profile from './componnents/Profile/Profile';
import FriendList from './componnents/FriendList/FriendList';
import TransactionHistory from './componnents/TransactionHistory/TransactionHistory';

// Data import
import userData from './userData.json';
import friends from './friends.json';
import transactions from './transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
