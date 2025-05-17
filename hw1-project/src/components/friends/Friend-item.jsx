import css from "./Friend-item.module.css"

function FriendItem({avatar, name, isOnline}) {
  return (
      <>
          <div className={css["friend-item"]}>
              <img src={avatar} alt="Avatar" width="48"/>
              <p>{name}</p>
              <p className={isOnline ? css.online : css.offline}>{isOnline ? 'Online' : 'Offline'}</p>
          </div>
      </>
  )
}

export default FriendItem
