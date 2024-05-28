import "./list.css";
import { Link, useLocation } from "react-router-dom";

export default function List() {
  let { state } = useLocation();
  const list = state.list;
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newlist">
          <button className="productAddBtn">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productRight">
          <div className="productInfoTop">
            <span className="productName">{list.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id: </span>
              <span className="productInfovalue">{list._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Genre:</span>
              <span className="productInfovalue">{list.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Type:</span>
              <span className="productInfovalue">{list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productBottomForm">
          <div className="productFormLeft">
            <label>List Name</label>
            <input type="text" placeholder={list.title} />
            <label>Type</label>
            <input type="text" placeholder={list.type} />
            <label>Genre</label>
            <input type="text" placeholder={list.genre} />
          </div>
          <div className="productFormRight">
            <button className="productBtn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
