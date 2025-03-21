import friends from "../data/friends";
import shoppingItems from "../data/shoppingItems";
import { getTotalAmount } from "../utils/utility";

export default function SettleNowHeader({ items }) {
    const totalUnsettledAmount = getTotalAmount(items);
    const unsettledAmount = totalUnsettledAmount / friends.length;

    return (<div className="settle-now-header">
        $ <span id="unsettled_amount">{unsettledAmount.toFixed(2)}</span>
        <button id="settle_now_btn">Settle Now</button>
    </div>);
};