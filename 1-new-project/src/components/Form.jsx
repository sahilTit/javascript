import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const [studentid, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  // const [error, setError] = useState({});
  const navigate = useNavigate();

  const header = { "Acces-controll-origin": "*" };

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://65c9e6173b05d29307df36a0.mockapi.io/crud-sahil", {
        studentid: studentid,
        name: name,
        branch: branch,
        year: year,
        header,
      })
      .then(() => {});
    if (studentid.length == "") {
      // validate.studentid = "student id ";
      alert("id is requried");
    } else if (name.length <= 2) {
      alert("name is required");
    } else if (branch.length < 2) {
      // validate.branch = "Branch is ";
      alert("branch Name is required");
    }

    // setError(validate);
    else {
      navigate("/table");
    }
  }
  return (
    <>
      <div className="big-body">
        <div className="container">
          <form onSubmit={handleSubmit} id="form signup">
            <h2>Sign In</h2>
            <div className="input-container">
              {/* <label htmlFor="studentid">Student Id</label> */}
              <input
                placeholder="student id"
                value={studentid}
                onChange={(e) => {
                  setStudentId(e.target.value);
                  // handleInputChange(e)
                  // validate(e);
                }}
                type="studentid"
              />
            </div>
            <div className="input-container">
              {/* <label htmlFor="name">Name</label> */}
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
              {/* <label htmlFor="branch">Branch</label> */}
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
              {/* <label htmlFor="year">Year</label> */}
              <input
                placeholder="year"
                value={year}
                type="number"
                onChange={(e) => {
                  setYear(e.target.value);
                }}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <button className="seedata">See Data</button>
    </>
  );
};
export default Form;
