import { Buddy } from "../../state/BuddyUiState"
import { UiEvent } from "../../../dsl/UiEventDLS";
import { OnClickBuddy } from "../../events/BuddyEvents";
import './index.css'

export const BuddyItem = ({
    state,
    onEvent
}: {
    state: Buddy;
    onEvent: (event: UiEvent) => void;
}
) => {
    const { LC, CrewmemberID, Name } = state

    return (
        <div className="buddyRow" onClick={() => onEvent(new OnClickBuddy(CrewmemberID))}>
            <span className="buddyData">{CrewmemberID}</span>
            <span className="buddyData">{LC}</span>
            <span className="buddyData">{Name}</span>
        </div>
    );
}