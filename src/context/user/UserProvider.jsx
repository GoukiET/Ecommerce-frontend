import UserContext from "./UserContext";
import { useReducer } from "react";
import userReducer from "./userReducer";
import axiosClient from "../../config/axiosClient";


const UserProvider = ({children}) => {
    
    const [userState, dispatch] = useReducer(userReducer, {
        infoUser: [],
        authStatus: false
    });

    const loginUser = async(user) => {
        try {
            const userLogin = await axiosClient.post("/user/signin", user);
            console.log(userLogin.data)
            console.log(userLogin.data.token)
            if(userLogin.data.success){
                dispatch({type: "REGISTER/LOGIN", payload: userLogin.data})
            }
            console.log(userLogin.data.message)
        } catch (error) {
            console.log(error)
        }
    }

    const registerUser = async(user) => {
        try {
            const userLogin = await axiosClient.post("/user", user);
            console.log(userLogin.data)
            console.log(userLogin.data.token)
            if(userLogin.data.success){
                dispatch({type: "REGISTER/LOGIN", payload: userLogin.data})
            }
            console.log(userLogin.data.message)
        } catch (error) {
            console.log(error)
        }
    }

    const msg = "Este mensaje viene desde UserProvider(useContext)"  
  
    return (
    <UserContext.Provider value={{msg, loginUser, registerUser}}>{children}</UserContext.Provider>
  )
}

export default UserProvider