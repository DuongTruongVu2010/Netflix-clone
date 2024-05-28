import axios from "axios";
import {
  createUserFailure,
  createUserStart,
  createUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
} from "./UserAction";

export const getUser = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axios.get("http://localhost:8800/api/users", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getUsersSuccess(res.data));
    console.log(res.data);
  } catch (error) {
    dispatch(getUsersFailure());
  }
};
//add
export const createUser = async (user, dispatch) => {
  dispatch(createUserStart());
  try {
    const res = await axios.post(
      "http://localhost:8800/api/auth/register",
      user,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(createUserSuccess(res.data));
  } catch (error) {
    dispatch(createUserFailure());
  }
};

//delete
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await axios.delete("http://localhost:8800/api/users/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteUserSuccess(id));
  } catch (error) {
    dispatch(deleteUserFailure());
  }
};
