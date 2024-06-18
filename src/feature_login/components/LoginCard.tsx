import { LoginCardUiState as LoginCardUiState } from "../state/LoginUiState"
import { UiEvent } from "../../dsl/UiEventDLS";
import { SetName, SetPassword, ClickSubmit } from "../events/LoginEvents";
import './index.css'
import reactLogo from '../../assets/react.svg'

export const LoginCard = ({
    state,
    onEvent
}: {
    state: LoginCardUiState;
    onEvent: (event: UiEvent) => void;
}
) => {
    const { username, password } = state

    return <div className="loginCard">
        <img src={reactLogo}></img>
        <input type="text" value={username} onChange={e => onEvent(new SetName(e.target.value))} />
        <input type="password" value={password} onChange={e => onEvent(new SetPassword(e.target.value))} />
        <input type="submit" onClick={_ => {
            onEvent(new ClickSubmit)
        }} />
    </div>
}