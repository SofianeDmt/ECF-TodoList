import { createContext, useState } from "react";


export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(false)

    return (
        <ThemeContext.Provider value={{theme:{theme}, setTheme:{setTheme} }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;