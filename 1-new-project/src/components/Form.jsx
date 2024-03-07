import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const [employeid, setEmployeId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const header = { "Acces-controll-origin": "*" };

  function handleSubmit(event) {
    event.preventDefault();

    try {
      setError(true);
      axios.post(
        "https://65e993bdc9bf92ae3d3989a4.mockapi.io/sahil-21/curd-sahil",
        {
          employeid: employeid, // employe id
          name: name, // name
          email: email, // email
          salary: salary, // salary
          header,
        }
      );
    } catch (error) {
      setError(true);
    }
    // .catch(()=>{})
    if (employeid.length == "") {
      // validate.studentid = "student id ";
      alert("id is requried");
    } else if (name.length <= 2) {
      alert("name is required");
    } else if (email.length < 2) {
      // validate.branch = "Branch is ";
      alert("branch Name is required");
    }
    else if(AxiosError){
      navigate("/error")
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
                value={employeid}
                onChange={(e) => {
                  setEmployeId(e.target.value);
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
                value={email}
                type="branch"
                placeholder="Branch"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="input-container">
              {/* <label htmlFor="year">Year</label> */}
              <input
                placeholder="year"
                value={salary}
                type="number"
                onChange={(e) => {
                  setSalary(e.target.value);
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
