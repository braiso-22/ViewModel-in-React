import { BuddyScreenPresenter } from "./BuddyScreenPresenter"
import { BuddyList } from "./components/BuddyList/BuddyList"
import { OnRefresh, OnSortBuddies, OnUserChange } from "./events/BuddyEvents"
import './index.css'


const BuddyScreen = () => {
    const { state, onEvent } = BuddyScreenPresenter()

    return (
        <div className="buddyScreen">
            <input
                type="text"
                value={state.currentUser}
                onChange={e => onEvent(new OnUserChange(e.target.value))}
            />
            <button onClick={_ => onEvent(new OnSortBuddies())}>Sort By Id</button>
            <button onClick={_ => onEvent(new OnRefresh())}>Refresh</button>
            {
                state.isError
                    ? <div>{state.errorMessage}</div>
                    : <BuddyList state={state.buddies} onEvent={onEvent}/>
            }
        </div>
    );
}

export default BuddyScreen;