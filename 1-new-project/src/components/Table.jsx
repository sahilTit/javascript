import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Table = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://65e993bdc9bf92ae3d3989a4.mockapi.io/sahil-21/curd-sahil")
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      });
  }

  const setToLocalStorage = (id, employeid, name, email, salary) => {
    // localStorage.setItem("id", id);
    localStorage.setItem("studntid", employeid);
    localStorage.setItem("name", name);
    localStorage.setItem("branch", email);
    localStorage.setItem("year", salary);
  };

  // function setToTable = (id,studentid,name,branch,year)=>{
  //   axios.
  // }

  function handleDelete(id) {
    axios
      .delete(
        `https://65e993bdc9bf92ae3d3989a4.mockapi.io/sahil-21/curd-sahil/${id}`
      )
      .then(() => {
        getData();
      });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="styled-table">
      <h2>Student Data</h2>
      <table className="wholetable">
        <thead>
          <tr>
            <td>#</td>
            <td>Employee Id</td>
            <td>Name</td>
            <td>email</td>
            <td>salary</td>
            <td>{/* <button className="edit-button">edit</button> */}</td>
            <td>{/* <button className="delete-button">delete</button> */}</td>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody className="tablebody">
                <tr>
                  <td>{eachData.id}</td>
                  <td>{eachData.employeid}</td>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.salary}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="edit-button"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.employeid,
                            eachData.name,
                            eachData.email,
                            eachData.salary
                          )
                        }
                      >
                        edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => {
                        handleDelete(eachData.id);
                      }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
};
export default Table;
