import Button from "./Button";

export default function Friend({ friend, handleSelectFriend, selectFriend }) {
  const isSelected = selectFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt="avatar_profile" />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You ow {friend.name} Rs.{Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} ows you Rs.{friend.balance}
        </p>
      )}
      {friend.balance === 0 && (
        <p className="">You and {friend.name} are even</p>
      )}
      <Button onClick={() => handleSelectFriend(friend)}>
        {isSelected ? "close" : "Select"}
      </Button>
    </li>
  );
}
