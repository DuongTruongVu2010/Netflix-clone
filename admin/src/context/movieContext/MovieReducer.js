const MovieReducer = (state, action) => {
  switch (action.type) {
    case "GET_MV_START":
      return {
        movies: [],
        isFetching: true,
        error: false,
      };
    case "GET_MV_SUCCESS":
      return {
        movies: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_MV_FAILURE":
      return {
        movies: [],
        isFetching: false,
        error: true,
      };
    case "CREATE_MV_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_MV_SUCCESS":
      return {
        movies: [...state.movies, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_MV_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPDATE_MV_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_MV_SUCCESS":
      return {
        movies: state.movies.map(
          (movie) => movie._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPDATE_MV_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "DELETE_MV_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_MV_SUCCESS":
      return {
        movies: state.movies.filter((movie) => movie._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_MV_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default MovieReducer;
