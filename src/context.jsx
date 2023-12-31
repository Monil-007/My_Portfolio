import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();



const intialState = {
  name: "",
  image: "",
  services: [],
};


const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Gandhi Monil",
        image: "./images/hero.svg",
      },
    });
  };

  const udpateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Gandhi Monil",
        image: "./images/about1.svg",
      },
    });
  };



  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
