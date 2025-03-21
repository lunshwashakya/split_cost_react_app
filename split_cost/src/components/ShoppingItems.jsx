export default function ShoppingItems({ shoppingItems }) {
    return (
        <div id="shopping_items">
            {
                shoppingItems.map((shoppingItem, index) => (
                    <div key={`item_${index}`} className={
                        shoppingItem.isSettled ? 'settled' : ''
                    }>
                        <div><h3>{shoppingItem.title}</h3>
                            <time>{shoppingItem.date.toDateString()}</time>
                        </div>
                        <div>${shoppingItem.amount}</div>
                    </div>
                ))
            }
        </div>
    );
}