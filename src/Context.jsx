import React, { useState, createContext } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [value, setValue] = useState("default value");
  const [isEmpty, setIsEmpty] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isOptionClicked, setIsOptionClicked] = useState(false);
  const [element, setElement] = useState("");

  return (
    <Context.Provider
      value={{
        value,
        setValue,
        isEmpty,
        setIsEmpty,
        isSubmitted,
        setIsSubmitted,
        isClicked,
        setIsClicked,
        isOptionClicked,
        setIsOptionClicked,
        element,
        setElement,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
