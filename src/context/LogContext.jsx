import { createContext, useState } from "react";


export const LogContext = createContext();

const LogProvider = ({children}) => {
    const [loginStatus, setLoginStatus] = useState(false);

    return (
        <LogContext.Provider value={{ loginStatus: loginStatus,setLoginStatus: setLoginStatus }}>
            {children}
        </LogContext.Provider>
    );
};

export default LogProvider;