import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [studentid, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://65c9e6173b05d29307df36a0.mockapi.io/crud-sahil/${id}`, {
        studentid: studentid,
        name: name,
        branch: branch,
        year: year,
      })
      .then(() => {
        navigate("/table");
      });
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setStudentId(localStorage.getItem("studentid"));
    setName(localStorage.getItem("name"));
    setBranch(localStorage.getItem("branch"));
    setYear(localStorage.getItem("year"));
  }, []);
  return (
    <>
      <div className="big-body">
        <div className="container">
          <form id="form signup ">
            <h2>Update Data</h2>
            <div className="input-container">
              <input
                placeholder="student id"
                value={studentid}
                onChange={(e) => {
                  setStudentId(e.target.value);
                }}
                type="studentid"
              />
            </div>
            <div className="input-container">
              <input
                value={name}
                type="name"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="input-container">
              <input
                value={branch}
                type="branch"
                placeholder="Branch"
                onChange={(e) => {
                  setBranch(e.target.value);
                }}
              />
            </div>
            <div className="input-container">
              <input
                placeholder="year"
                value={year}
                type="year"
                onChange={(e) => {
                  setYear(e.target.value);
                }}
              />
            </div>
            <button type="submit" onClick={handleUpdate}>
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
