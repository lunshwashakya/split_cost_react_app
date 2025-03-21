import Friends from "./components/Friends"
import NewForm from "./components/NewForm"
import SettleNowHeader from "./components/SettleNowHeader"
import ShoppingItems from "./components/ShoppingItems"
import shoppingItems from "./data/shoppingItems"


function App() {

  return (
    <section>
      <h1>Split Cost</h1>
      <SettleNowHeader />
      <Friends />
      <NewForm />
      <ShoppingItems />
    </section>
  )
}

export default App
