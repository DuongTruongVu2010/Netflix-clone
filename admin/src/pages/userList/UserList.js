import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext/UserContext";
import { useContext, useEffect } from "react";
import { deleteUser, getUser } from "../../context/userContext/apiCall";

export default function UserList() {
  const { users, dispatch } = useContext(UserContext);

  const defaultAvatar =
    "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg";

  useEffect(() => {
    getUser(dispatch);
  }, [dispatch]);

  const handleDetele = (id) => {
    deleteUser(id, dispatch);
  };

  const rows = users.map((user) => ({ ...user, id: user._id }));

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "user",
      headerName: "User",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              alt=""
              src={
                params.row.profilePic ? params.row.profilePic : defaultAvatar
              }
            />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 220,
    },
    {
      field: "isAdmin",
      headerName: "Admin",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDetele"
              onClick={() => {
                handleDetele(params.row._id);
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        pageSize={8}
        checkboxSelection
        rowsPerPageOptions={[8, 10, 20]}
      />
    </div>
  );
}
