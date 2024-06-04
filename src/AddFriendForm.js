import { useState } from "react";
import Button from "./Button";
import { v4 as uuid } from "uuid";
export default function AddFriendForm({ handleFriend }) {
  const [friendName, setFriendName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const handleChange = (e) => {
    setFriendName(e.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const id = uuid();
    if (!friendName) return;
    const newFr = {
      id: id,
      name: friendName,
      image: `${image}?=${id}`,
      balance: 0,
    };
    handleFriend(newFr);
    setFriendName("");
    setImage("https://i.pravatar.cc/48");
  };
  return (
    <form className="form-add-friend">
      <label htmlFor="friendName">🧑‍🤝‍🧑Friend name</label>
      <input
        type="text"
        id="friendName"
        value={friendName}
        onChange={handleChange}
      />
      <label htmlFor="image">📷Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button onClick={handleSubmit}>Add</Button>
    </form>
  );
}
