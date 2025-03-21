import { useState } from "react"

export default function NewForm() {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');

    function handleTitleChange(event) {
        const value = event.target.value;
        setTitle(value);
    }

    function handleAmountChange(event) {
        const value = event.target.value;
        setAmounts(value);
    }

    function handleAddNew(event) {
        event.preventDefault();

        console.log({ title, amount });
    }

    return (
        <form>
            <div>
                <label htmlFor="title">Description</label>
                <input type="text" id="title" name="title" />
            </div>
            <div>
                <label htmlFor="amount">Amount</label>
                <input type="text" id="amount" name="amont" />
            </div>
            <input type="submit" value="Add New" onClick={handleAddNew} />
        </form>
    )
}