import { createContext } from "react"
import { useReducer } from "react"

const notificationReducer = (state, action) => {
    switch (action.type) {
        case "SET":
            return action.payload
        case "UNSET":
            return ""
    }
}

const NotificationContext = createContext()

export const NotificationContextProvider = ({ children }) => {
    const [notification, dispatch] = useReducer(notificationReducer, "")

    return (
        <NotificationContext.Provider value={[ notification, dispatch ]}>
            {children}
        </NotificationContext.Provider>
    )
}



export default NotificationContext