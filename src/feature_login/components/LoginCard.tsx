import { LoginCardUiState as LoginCardUiState } from "../state/LoginUiState"
import { UiEvent } from "../../dsl/UiEventDLS";
import { SetName, SetPassword, ClickSubmit } from "../events/LoginEvents";
import './index.css'
import reactLogo from '../../assets/react.svg'
import { useRef } from "react";

export const LoginCard = ({
    state,
    onEvent
}: {
    state: LoginCardUiState;
    onEvent: (event: UiEvent) => void;
}
) => {
    const { username, password } = state
    const formulario = useRef<HTMLFormElement>(null)

    return <div className="loginCard">
        <form action="" ref ={formulario}>
            <img src={reactLogo}></img>
            <input type="email" value={username} onChange={e => onEvent(new SetName(e.target.value))} />
            <input type="password" value={password} onChange={e => onEvent(new SetPassword(e.target.value))} />
            <input type="submit" onClick={_ => { 
                if(formulario.current?.checkValidity()){
                    onEvent(new ClickSubmit) 
                }
            }} />
        </form>
    </div>
}