import ListReducer from "./ListReducer";
import { useReducer, createContext } from "react";

const INITIAL_STATE = {
  list: [],
  isFeching: false,
  error: false,
};

export const ListContext = createContext(INITIAL_STATE);

export const ListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ListReducer, INITIAL_STATE);

  return (
    <ListContext.Provider
      value={{
        lists: state.lists,
        isFeching: state.isFeching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
