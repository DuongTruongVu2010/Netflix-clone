import "./newList.css";
import { useContext, useEffect, useState } from "react";
import { getMovie } from "../../context/movieContext/apiCall";
import { ListContext } from "../../context/listContext/ListContext";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { createList } from "../../context/listContext/apiCall";
import { useNavigate } from "react-router-dom";

export default function NewList() {
  const [list, setList] = useState(null);

  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  const navigate = useNavigate();

  useEffect(() => {
    getMovie(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    navigate("/lists");
  };
  console.log(list);
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">
        <div className="formleft">
          <div className="addProductItem">
            <label>Title</label>
            <input
              type="text"
              placeholder="popular Movies"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Genre</label>
            <input
              type="text"
              placeholder="action"
              name="genre"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Type</label>
            <select name="type" onChange={handleChange}>
              <option>Type</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </div>
        </div>
        <div className="formright">
          <div className="addProductItem">
            <label>Content</label>
            <select
              multiple
              name="content"
              onChange={handleSelect}
              style={{ height: "280px" }}
            >
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
          <button className="addProductBtn" onClick={handleSubmit}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
