import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  // const [studentid, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put( `https://65e993bdc9bf92ae3d3989a4.mockapi.io/sahil-21/curd-sahil/${id}`, {
        // studentid: studentid,
        name: name,
        email: email,
        salary: salary,
      })
      .then(() => {
        navigate("/table");
      });
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    // setStudentId(localStorage.getItem("studentid"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setSalary(localStorage.getItem("salary"));
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
                // value={studentid}
                // onChange={(e) => {
                //   setStudentId(e.target.value);
                // }}
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
                value={email}
                type="email"
                placeholder="Branch"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="input-container">
              <input
                placeholder="salary"
                value={salary}
                type="year"
                onChange={(e) => {
                  setSalary(e.target.value);
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
