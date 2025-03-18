import Friends from "./components/Friends"
import SettleNowHeader from "./components/SettleNowHeader"


function App() {

  return (
    <section>
      <h1>Split Cost</h1>
      <SettleNowHeader />
      <Friends />

      <form>
        <div>
          <label htmlFor="title">Description</label>
          <input type="text" id="title" name="title" />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input type="text" id="amount" name="amont" />
        </div>
        <input type="submit" value="Add New" />
      </form>

      <div id="shopping_items"></div>
    </section>
  )
}

export default App
