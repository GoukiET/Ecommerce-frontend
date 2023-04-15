import UserContext from "./UserContext";
import { useReducer } from "react";
import userReducer from "./userReducer";
import axiosClient from "../../config/axiosClient";
import { useNavigate } from "react-router-dom";

const UserProvider = ({children}) => {
    
    const navigate = useNavigate();
    const [userState, dispatch] = useReducer(userReducer, {
        infoUser: [],
        authStatus: false
    });

    const loginUser = async(user) => {
        try {
            const userLogin = await axiosClient.post("/user/signin", user);
            /* console.log(userLogin.data)
            console.log(userLogin.data.token) */
            if(userLogin.data.success){
                dispatch({type: "REGISTER/LOGIN", payload: userLogin.data})
            }
            /* console.log(userLogin.data.message) */
        } catch (error) {
            console.log(error)
        }
    }

    const registerUser = async(user) => {
        try {
            const userLogin = await axiosClient.post("/user", user);
            /* console.log(userLogin.data)
            console.log(userLogin.data.token) */
            if(userLogin.data.success){
                dispatch({type: "REGISTER/LOGIN", payload: userLogin.data})
            }
            /* console.log(userLogin.data.message) */
        } catch (error) {
            console.log(error)
        }
    }

    const verifyToken = async() => {
        const token = localStorage.getItem("token")
        console.log(token)

        if(token){
            axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`
            //Authorization = Bearer token
        }else {
            delete axiosClient.defaults.headers.common["Authorization"];
        }

        try {
            const infoUserVerify = await axiosClient.get("/user/verifyUser");
            
            dispatch({type: "INFO_USER", payload: infoUserVerify.data.info})
        } catch (error) {
            console.log(error)
        }
    }
    
    const signOut = () => {
        try {
            dispatch({type: "SIGN_OUT"});
            navigate("/auth");
            console.log(userState)
        } catch (error) {
            
        }
    }
  
    const userEdit = async (data) => {
        const updateUser = await axiosClient.put("/user/myProfile", data)
    }
    return (
    <UserContext.Provider value={{loginUser, registerUser, verifyToken, infoUser: userState.infoUser, authStatus: userState.authStatus,signOut, userEdit}}>{children}</UserContext.Provider>
  )
}

export default UserProvider