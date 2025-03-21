import { useState } from "react";
import Friends from "./components/Friends";
import NewForm from "./components/NewForm";
import SettleNowHeader from "./components/SettleNowHeader";
import ShoppingItems from "./components/ShoppingItems";
import shoppingItems from "./data/shoppingItems";

function App() {
  const [items, setItems] = useState(shoppingItems);

  return (
    <section>
      <h1>Split Cost</h1>
      <SettleNowHeader items={items} />
      <Friends />
      <NewForm items={items} setItems={setItems} />
      <ShoppingItems shoppingItems={items} />
    </section>
  )
}

export default App