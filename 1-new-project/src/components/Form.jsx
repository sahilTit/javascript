import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Form = () => {
  const [studentid, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const history = useNavigate();

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
      .then(() => {
        history("/table");
      });
    // event.preventDefault();
    // // console.log(studentid)
    // let states =JSON.parse(localStorage.getItem("name")||"[]");
    // let state = {
    //   StudentId: studentid,
    //   Name: name,
    //   Branch: branch,
    //   Year: year
    // };
    // // console.log(state);
    // states.push(state);
    // localStorage.setItem("name", JSON.stringify(states));

    // const temp = ;
    // console.log(temp)
  }
  return (
    <>
      <div className="big-body">
        <div className="container">
          <form onSubmit={handleSubmit} id="form signup ">
            <h2>Sign In</h2>
            <div className="input-container">
              {/* <label htmlFor="studentid">Student Id</label> */}
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
                type="year"
                onChange={(e) => {
                  setYear(e.target.value);
                }}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Link to="/table">
        <button className="seedata">See Data</button>
      </Link>
    </>
  );
};
export default Form;
