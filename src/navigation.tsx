import BuddyScreen from "./feature_buddies/BuddyScreen"
import LoginScreen from "./feature_login/LoginScreen"
import './index.css'
import { useState } from "react"


const Navigation = () => {
    const [isLogin, setIsLogin] = useState(true)


    return (<div>
        <button onClick={() => { setIsLogin(prev => !prev) }}>Show Login</button>
        {
            isLogin
                ? <LoginScreen />
                : <BuddyScreen />
        }
    </div>
    );
}

export default Navigation;