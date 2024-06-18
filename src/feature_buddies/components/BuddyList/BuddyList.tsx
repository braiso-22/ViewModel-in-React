import { Buddy } from "../../state/BuddyUiState"
import { BuddyItem } from "../BuddyItem/BuddyItem"
import { UiEvent } from "../../../dsl/UiEventDLS";
import './index.css'


export const BuddyList = ({
    state,
    onEvent
}: {
    state: Buddy[];
    onEvent: (event: UiEvent) => void;
}
) => {
    return (<div className="buddyList">
        <h3>Title</h3>
        {state.map(
            buddy => {
                return <BuddyItem state={buddy} onEvent={onEvent} />
            }
        )
        }
    </div>);
}
