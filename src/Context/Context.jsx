import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
    const [spacing,setSpacing] = useState(1);
    const [value, setValue] = useState(0);

    const constValue = {
    spacing,
    setSpacing,
    value,
    setValue
    }

    return (
        <Context.Provider value={constValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider