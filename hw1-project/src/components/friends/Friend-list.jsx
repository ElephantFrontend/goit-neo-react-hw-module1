import css from "./Friend-list.module.css"
import FriendItem from "./Friend-item.jsx";

function FriendList({friends}) {

  return (
      <>
          <ul className={css["friend-list"]}>
              {friends.map((friend, index) => (
                  <li key={index}>
                      <FriendItem
                          avatar={friend.avatar}
                          name={friend.name}
                          isOnline={friend.isOnline}
                      />
                  </li>
              ))}
          </ul>
      </>
  )
}

export default FriendList
