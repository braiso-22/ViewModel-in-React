import { LoginScreenViewModel } from "./LoginScreenViewModel"
import { LoginCard } from "./components/LoginCard"
import './index.css'


const LoginScreen = () => {
    const { loginState, result, onEvent } = LoginScreenViewModel()


    return <div className="LoginScreen">
        <LoginCard state={loginState} onEvent={onEvent}/>
        <textarea value={result}></textarea>
    </div>
}

export default LoginScreen;