import { useState } from "react";
import { UiEvent, when } from "../dsl/UiEventDLS";
import { OnRefresh, OnClickBuddy, OnUserChange, OnSortBuddies } from "./events/BuddyEvents";
import { BuddyUiState, Buddy } from "./state/BuddyUiState";

export const BuddyScreenPresenter = () => {
    const [state, setState] = useState<BuddyUiState>({
        currentUser: "",
        buddies: [],
        errorMessage: "",
        isError: false
    })

    const onEvent = (event: UiEvent) => {
        when(event)
            .option(OnClickBuddy).do(event => {
                let buddy = state.buddies.find(value => value.CrewmemberID === event.id)

                if (!buddy) return

                alert(buddy.Name + " es idiota")
            })
            .option(OnRefresh).do(updateBuddies)
            .option(OnUserChange).do(event => {
                setCurrentUser(event.user)
            })
            .option(OnSortBuddies).do(sortBuddiesByCrewmemberID)
    }

    const sortBuddiesByCrewmemberID = () => {
        setState({
            ...state,
            buddies: state.buddies.sort((a, b) => a.CrewmemberID - b.CrewmemberID)
        })
    }


    const updateBuddies = () => {
        fetch(
            "$MyURL?user="
            + state.currentUser
        )
            .then(response => response.json())
            .then((data: Buddy[]) => {
                if (data.length > 0) {
                    setState({
                        ...state,
                        isError: false,
                        buddies: data
                    })
                } else {
                    setState({
                        ...state,
                        isError: true,
                        errorMessage: "No values for this user or bad user"
                    })
                }
            })
            .catch(error => {
                setState({
                    ...state,
                    isError: true,
                    errorMessage: error
                })
            });
    }

    const setCurrentUser = (user: string) => {
        setState({
            ...state,
            currentUser: user
        })
    }

    return {
        state: state,
        onEvent
    }
}