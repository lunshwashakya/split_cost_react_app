import friends from "../data/friends";

export default function Friends() {
    return (
        <div id="friends">
            {
                friends.map((friend, index) => (
                    <div key={`friend_${index}`} title={friend.firstName + " " + friend.lastName}>{friend.firstName[0]}{friend.lastName[0]}</div>
                ))
            }
        </div>
    );
}