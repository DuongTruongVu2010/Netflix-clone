export const getUsersStart = () => ({
  type: "GET_USER_START",
});
export const getUsersSuccess = (users) => ({
  type: "GET_USER_SUCCESS",
  payload: users,
});
export const getUsersFailure = () => ({
  type: "GET_USER_FAILURE",
});

//ADD
export const createUserStart = () => ({
  type: "CREATE_USER_START",
});
export const createUserSuccess = (user) => ({
  type: "CREATE_USER_SUCCESS",
  payload: user,
});
export const createUserFailure = () => ({
  type: "CREATE_USER_FAILURE",
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
//DELETE
export const deleteUserStart = () => ({
  type: "DELETE_USER_START",
});
export const deleteUserSuccess = (id) => ({
  type: "DELETE_USER_SUCCESS",
  payload: id,
});
export const deleteUserFailure = () => ({
  type: "DELETE_USER_FAILURE",
});
