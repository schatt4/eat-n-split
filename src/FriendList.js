import Friend from "./Friend";

export default function FriendList({
  friendList,
  handleSelectFriend,
  selectFriend,
}) {
  return (
    <ul>
      {friendList.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          handleSelectFriend={handleSelectFriend}
          selectFriend={selectFriend}
        />
      ))}
    </ul>
  );
}
