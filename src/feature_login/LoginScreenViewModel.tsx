import { useState, useEffect } from "react";
import { UiEvent, when } from "../dsl/UiEventDLS";
import { SetName, SetPassword, ClickSubmit } from "./events/LoginEvents";
import { LoginCardUiState } from "./state/LoginUiState";

export const LoginScreenViewModel = () => {
    const [loginState, setLoginState] = useState<LoginCardUiState>({
        username: "",
        password: "",
    })
    const [result, setResult] = useState("")

    useEffect(() => {
        console.log("LoginScreenViewModel created")
    }, []);

    const onEvent = (event: UiEvent) => {
        when(event)
            .option(SetName).do(event => setLoginState({
                ...loginState,
                username: event.username
            }))
            .option(SetPassword).do(event => setLoginState({
                ...loginState,
                password: event.password
            }))
            .option(ClickSubmit).do(_ => {
                getUserLogin()
            })
    }

    const getUserLogin = () => {
        fetch(
            "$MyURL?User="
            + loginState.username + "&Password=" + loginState.password
        )
            .then(response => response.json())
            .then(data => {
                setResult(JSON.stringify(data))
            })
            .catch(error => {
                alert("Error: " + error)
            });
    }

    return {
        loginState,
        result,
        onEvent
    }
}