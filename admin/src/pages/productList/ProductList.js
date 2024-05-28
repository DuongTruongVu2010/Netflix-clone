import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovie } from "../../context/movieContext/apiCall";

export default function ProductList() {
  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    getMovie(dispatch);
  }, [dispatch]);

  const handleDetele = (id) => {
    deleteMovie(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" alt="" src={params.row.img} />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "genre",
      headerName: "Genre",
      width: 120,
    },
    {
      field: "year",
      headerName: "Year",
      width: 120,
    },
    {
      field: "limit",
      headerName: "Limit",
      width: 120,
    },
    {
      field: "isSeries",
      headerName: "isSeries",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/movie/" + params.row._id} state={{ movie: params.row }}>
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
      <DataGrid
        className="dataGrid"
        rows={movies}
        columns={columns}
        disableSelectionOnClick
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
        rowsPerPageOptions={[8, 10, 20]}
      />
      <div>
        <Link to="/newMovie" className="linkCreateMovie">
          Create
        </Link>
      </div>
    </div>
  );
}
