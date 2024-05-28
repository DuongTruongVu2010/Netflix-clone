import MovieReducer from "./MovieReducer";
import { useReducer, createContext } from "react";

const INITIAL_STATE = {
  movies: [],
  isFeching: false,
  error: false,
};

export const MovieContext = createContext(INITIAL_STATE);

export const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        isFeching: state.isFeching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
