import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Table = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://65c9e6173b05d29307df36a0.mockapi.io/crud-sahil")
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      });
  }

  const setToLocalStorage = (id, studentid, name, branch, year) => {
    // localStorage.setItem("id", id);
    localStorage.setItem("studntid", studentid);
    localStorage.setItem("name", name);
    localStorage.setItem("branch", branch);
    localStorage.setItem("year", year);
  };

  function handleDelete(id) {
    axios
      .delete(`https://65c9e6173b05d29307df36a0.mockapi.io/crud-sahil/${id}`)
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
            <td>Student Id</td>
            <td>Name</td>
            <td>Branch</td>
            <td>Year</td>
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
                  <td>{eachData.studentid}</td>
                  <td>{eachData.name}</td>
                  <td>{eachData.branch}</td>
                  <td>{eachData.year}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="edit-button"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.studentid,
                            eachData.name,
                            eachData.branch,
                            eachData.year
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
