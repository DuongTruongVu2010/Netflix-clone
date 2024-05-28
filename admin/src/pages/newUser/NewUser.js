import "./newUser.css";
import { useState, useContext } from "react";
import storage from "../../firebase";
import { createUser } from "../../context/userContext/apiCall";
import { UserContext } from "../../context/userContext/UserContext";

export default function NewUser() {
  const [avatar, setAvatar] = useState(null);
  const [user, setUser] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const { dispatch } = useContext(UserContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(user, dispatch);
  };

  const upload = (items) => {
    items.forEach((item) => {
      const filename = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${filename}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + " % done");
        },
        (err) => console.log(err),
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setUser((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };
  const handleUpload = (e) => {
    e.preventDefault();
    upload([{ file: avatar, label: "profilePic" }]);
  };
  console.log(user);
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Avatar</label>
          <input
            type="file"
            id="profilePic"
            name="profilePic"
            onChange={(e) => setAvatar(e.target.files[0])}
          />
        </div>
        <div className="newUserItem">
          <label>Email or Number phone</label>
          <input
            type="text"
            placeholder="john@gmail.com"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Username</label>
          <input
            type="text"
            placeholder="john"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>isAdmin</label>
          <select
            className="newUserSelect"
            name="isAdmin"
            id="isAdmin"
            onChange={handleChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        {uploaded === 1 ? (
          <button className="addProductBtn" onClick={handleSubmit}>
            Upload
          </button>
        ) : (
          <button className="newUserBtn" onClick={handleUpload}>
            Create
          </button>
        )}
      </form>
    </div>
  );
}
