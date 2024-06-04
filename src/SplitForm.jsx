import Button from "./Button";
import { useState } from "react";
export default function SplitForm({
  // billVal,
  // setBillVal,
  // yourExpense,
  // setYourExpense,
  // whoPay,
  // setWhoPay,
  // friendExpense,
  friend,
  handleBalance,
}) {
  const [billVal, setBillVal] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [whoPay, setWhoPay] = useState("user");
  const friendExpense = billVal - yourExpense;
  const handleSplit = (evt) => {
    evt.preventDefault();
    if (!billVal || !yourExpense) return;
    else {
      let bal;
      if (whoPay === "user") bal = friend.balance + friendExpense;
      if (whoPay === friend.name) bal = friend.balance - friendExpense;
      console.log(bal);
      handleBalance(friend.id, bal);
      setBillVal("");
      setYourExpense("");
      setWhoPay("user");
    }
  };
  return (
    <form className="form-split-bill">
      <h2>Split the bill with {friend.name}</h2>
      <label htmlFor="biilValue">💰Bill Value</label>
      <input
        type="text"
        id="biilValue"
        name="billVal"
        value={billVal}
        onChange={(e) => setBillVal(Number(e.target.value))}
      />

      <label htmlFor="yourExpense">🧍‍♀️Your Expense</label>
      <input
        type="text"
        id="yourExpense"
        name="yourExpense"
        value={yourExpense}
        onChange={(e) =>
          setYourExpense(
            Number(e.target.value) > billVal
              ? yourExpense
              : Number(e.target.value)
          )
        }
      />

      <label htmlFor="friendExpense">🧍‍♀️{friend.name} Expense</label>
      <input type="text" id="friendExpense" value={friendExpense} disabled />

      <label htmlFor="whoPay">🤑Who is paying ?</label>
      <select
        name="whoPay"
        id="whoPay"
        value={whoPay}
        onChange={(e) => setWhoPay(e.target.value)}
      >
        <option value="user">You</option>
        <option value={friend.name}>{friend.name}</option>
      </select>
      <Button onClick={handleSplit}>Split Bill</Button>
    </form>
  );
}
