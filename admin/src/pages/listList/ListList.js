import "./listList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { deleteList, getLists } from "../../context/listContext/apiCall";

export default function ListList() {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDetele = (id) => {
    deleteList(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "title",
      headerName: "title",
      width: 250,
    },
    {
      field: "genre",
      headerName: "Genre",
      width: 120,
    },
    {
      field: "type",
      headerName: "type",
      width: 120,
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/list/" + params.row._id} state={{ list: params.row }}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDetele"
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
    <div className="productList">
      {lists && (
        <DataGrid
          rows={lists}
          columns={columns}
          disableSelectionOnClick
          pageSize={8}
          checkboxSelection
          getRowId={(r) => r._id}
          rowsPerPageOptions={[8, 10, 20]}
        />
      )}
    </div>
  );
}
