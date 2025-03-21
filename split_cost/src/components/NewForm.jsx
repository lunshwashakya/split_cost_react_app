import { useState } from "react"

export default function NewForm({ items, setItems }) {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');

    function handleTitleChange(event) {
        const value = event.target.value;
        setTitle(value);
    }

    function handleAmountChange(event) {
        const value = event.target.value;
        setAmount(parseFloat(value));
    }

    function handleAddNew(event) {
        event.preventDefault();

        setItems([{
            title,
            amount,
            date: new Date(),
            isSettled: false,
        }, ...items]);
    }
    return (
        <form>
            <div>
                <label htmlFor="title">Description</label>
                <input type="text" onChange={handleTitleChange} id="title" name="title" />
            </div>
            <div>
                <label htmlFor="amount">Amount</label>
                <input type="text" onChange={handleAmountChange} id="amount" name="amont" />
            </div>
            <input type="submit" value="Add New" onClick={handleAddNew} />
        </form>
    )
}