import "./product.css";
import { Link, useLocation } from "react-router-dom";
import { Publish } from "@material-ui/icons";

export default function Product() {
  let { state } = useLocation();
  const movie = state.movie;
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newMovie">
          <button className="productAddBtn">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productRight">
          <div className="productInfoTop">
            <img src={movie.img} alt="" className="productInfoImg" />
            <span className="productName">{movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id: </span>
              <span className="productInfovalue">{movie._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Genre:</span>
              <span className="productInfovalue">{movie.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Year:</span>
              <span className="productInfovalue">{movie.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Limit:</span>
              <span className="productInfovalue">{movie.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productBottomForm">
          <div className="productFormLeft">
            <label>Movie Name</label>
            <input type="text" placeholder={movie.title} />
            <label>Year</label>
            <input type="text" placeholder={movie.year} />
            <label>Genre</label>
            <input type="text" placeholder={movie.genre} />
            <label>Limit</label>
            <input type="text" placeholder={movie.limit} />
            <label>Trailer</label>
            <input type="file" placeholder={movie.trailer} />
            <label>Video</label>
            <input type="file" placeholder={movie.video} />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img className="productUploadImg" src={movie.img} alt="" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productBtn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
