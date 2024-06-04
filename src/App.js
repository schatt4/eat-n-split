// import './App.css';
import { useState } from "react";
import Button from "./Button";
import AddFriendForm from "./AddFriendForm";
import FriendList from "./FriendList";
import SplitForm from "./SplitForm";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [friendList, setFriendList] = useState(initialFriends);
  const [isClicked, setIsClicked] = useState(false);
  const [selectFriend, setSelectFriend] = useState(null);

  const handleFriend = (newfr) => {
    setFriendList((f) => [...f, newfr]);
    setIsClicked(false);
  };

  const handleAdd = () => {
    setIsClicked((c) => !c);
  };
  const handleSelectFriend = (friend) => {
    // setSelectFriend(friend);
    setSelectFriend((cur) => (cur?.id !== friend.id ? friend : null));
    setIsClicked(false);
  };
  const handleBalance = (id, bal) => {
    setFriendList((fr) =>
      fr.map((f) => (f.id === id ? { ...f, balance: bal } : f))
    );
    setSelectFriend(null);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friendList={friendList}
          handleSelectFriend={handleSelectFriend}
          selectFriend={selectFriend}
        />
        {isClicked && <AddFriendForm handleFriend={handleFriend} />}
        <Button onClick={handleAdd}>
          {isClicked ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectFriend && (
        <SplitForm friend={selectFriend} handleBalance={handleBalance} />
      )}
      {/* {selectFriend !== null && (
        <SplitForm
          billVal={billVal}
          setBillVal={setBillVal}
          yourExpense={yourExpense}
          setYourExpense={setYourExpense}
          whoPay={whoPay}
          setWhoPay={setWhoPay}
          friendExpense={friendExpense}
          friend={selectFriend}
        />
      )} */}
    </div>
  );
}

export default App;
