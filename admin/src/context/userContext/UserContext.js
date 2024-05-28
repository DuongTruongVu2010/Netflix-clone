import UserReducer from "./UserReducer";
import { useReducer, createContext } from "react";

const INITIAL_STATE = {
  users: [],
  isFeching: false,
  error: false,
};

export const UserContext = createContext(INITIAL_STATE);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        isFeching: state.isFeching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
