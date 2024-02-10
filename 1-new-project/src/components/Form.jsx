import { useState } from "react";

const Form = () => {
  const [studentid, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(studentid)
    let states =JSON.parse(localStorage.getItem("name")||"[]");
    let state = {
      StudentId: studentid,
      Name: name,
      Branch: branch,
      Year: year
    };
    // console.log(state);
    states.push(state);
    localStorage.setItem("name", JSON.stringify(states));

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
    </>
  );
};
export default Form;
