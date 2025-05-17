import css from "./App.module.css";
import Profile from "./components/profile/Profile.jsx";
import FriendList from "./components/friends/Friend-list.jsx";
import TransactionHistory from "./components/transaction-history/Transaction-history.jsx";
import userData from "./utils/userData";
import friends from "./utils/friendsListData";
import transactions from "./utils/transactionHistoryData";

const App = () => {
    return (
        <>
            <div className={css.container}>
                <Profile
                    name={userData.username}
                    tag={userData.tag}
                    location={userData.location}
                    image={userData.avatar}
                    stats={userData.stats}
                />

                <FriendList friends={friends} />

                <TransactionHistory items={transactions} />
            </div>
        </>
    );
};

export default App