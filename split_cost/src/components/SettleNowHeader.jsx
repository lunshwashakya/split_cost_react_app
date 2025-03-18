export default function SettleNowHeader() {
    return (
        <div className="settle-now-header">
            $ <span id="unsettled_amount"></span>
            <button id="settle_now_btn">Settle Now</button>
        </div>
    )
}
