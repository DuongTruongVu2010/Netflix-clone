export const getListsStart = () => ({
  type: "GET_LISTS_START",
});
export const getListsSuccess = (list) => ({
  type: "GET_LISTS_SUCCESS",
  payload: list,
});
export const getListsFailure = () => ({
  type: "GET_LISTS_FAILURE",
});

// //ADD
export const createListStart = () => ({
  type: "CREATE_LIST_START",
});
export const createListSuccess = (list) => ({
  type: "CREATE_LIST_SUCCESS",
  payload: list,
});
export const createListFailure = () => ({
  type: "CREATE_LIST_FAILURE",
});
// //UPDATE
// export const updateMovieStart = () => ({
//   type: "UPDATE_MV_START",
// });
// export const updateMovieSuccess = (movie) => ({
//   type: "UPDATE_MV_SUCCESS",
//   payload: movie,
// });
// export const updateMovieFailure = () => ({
//   type: "UPDATE_MV_FAILURE",
// });
// //DELETE
export const deleteListStart = () => ({
  type: "DELETE_LIST_START",
});
export const deleteListSuccess = (id) => ({
  type: "DELETE_LIST_SUCCESS",
  payload: id,
});
export const deleteListFailure = () => ({
  type: "DELETE_LIST_FAILURE",
});
