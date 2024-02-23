import "./Loginpage.css"
const handleSubmit = (e) => {
  e.preventDefault();

};

function LoginPage() {
  return (
    <div className="form1">
      <div className="whole-form">
        <div>
          <h2>Login Form</h2>
        </div>
        <div className="secondary-form">
          <form onSubmit={handleSubmit} action="submit">
            <div className="lvsi">
              <label className="labela" htmlFor="email">
                Full Name
              </label>
              <input className="inputa" placeholder="Full Name" type="text" />
            </div>
            <div className="lvsi">
              <label className="labela" htmlFor="Password">
                Email
              </label>
              <input
                className="inputa"
                placeholder="Email"
                type="password"
              />
            </div>{" "}
            <div className="lvsi">
              <label className="labela" htmlFor="Password">
                Password
              </label>
              <input
                className="inputa"
                placeholder="password"
                type="password"
              />
            </div>
            <div className="divbtn">
              <button className="btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
