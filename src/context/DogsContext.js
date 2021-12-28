import { createContext, useReducer, useContext } from "react";
import axios from "axios";
import DogsReducer from "../reducers/DogsReducer";
import { getDogs } from "../actions/DogsActions";

const initialState = {
    dogs: []
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DogsReducer, initialState);

    const getRandomDog = () => {
        let dog;
        try {
            axios.get("https://dog.ceo/api/breeds/image/random").then(res => {
                dog = res.data.message;
                dispatch(getDogs(dog));
                console.log("dog", dog);
            });
        } catch (error) {}
    };
    return <AppContext.Provider value={{ ...state, getRandomDog }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
