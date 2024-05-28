export const getMoviesStart = () => ({
  type: "GET_MV_START",
});
export const getMoviesSuccess = (movies) => ({
  type: "GET_MV_SUCCESS",
  payload: movies,
});
export const getMoviesFailure = () => ({
  type: "GET_MV_FAILURE",
});

//ADD
export const createMovieStart = () => ({
  type: "CREATE_MV_START",
});
export const createMovieSuccess = (movie) => ({
  type: "CREATE_MV_SUCCESS",
  payload: movie,
});
export const createMovieFailure = () => ({
  type: "CREATE_MV_FAILURE",
});
//UPDATE
export const updateMovieStart = () => ({
  type: "UPDATE_MV_START",
});
export const updateMovieSuccess = (movie) => ({
  type: "UPDATE_MV_SUCCESS",
  payload: movie,
});
export const updateMovieFailure = () => ({
  type: "UPDATE_MV_FAILURE",
});
//DELETE
export const deleteMovieStart = () => ({
  type: "DELETE_MV_START",
});
export const deleteMovieSuccess = (id) => ({
  type: "DELETE_MV_SUCCESS",
  payload: id,
});
export const deleteMovieFailure = () => ({
  type: "DELETE_MV_FAILURE",
});
