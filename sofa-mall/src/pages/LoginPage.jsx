// import axios from "axios";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigation, NavLink } from "react-router-dom";

const LOGIN_URL =
  "https://65e993bdc9bf92ae3d3989a4.mockapi.io/sahil-21/login-info"; // login Api URL

const LoginPage = () => {
  const { setAuth } = useAuth();

  const location = useLocation();

  const navigate = useNavigation();
  const from = location?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "applicatton/json" },
          withCredentials: true,
        }
      );
      const acccesToken = response?.data?.acccesToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, acccesToken });
      setUser("");
      setPwd("");
      navigate(from, { replace: true });
      console.log(user, pwd, acccesToken, roles);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing User Name or Password ");
      } else if (err.response?.status === 401) {
        setErrMsg("UnAuthorized  ");
      } else {
        errMsg("LoginFailure");
      }
    }
  };

  return (
    <>
      <div className="main-con">
        <section className="sec-fot">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">UserName:</label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              required
              value={user}
              ref={userRef}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              // aria-current
            />
            <NavLink to="/profile">
              <button>Sign In</button>
            </NavLink>
            <p>
              Need an Account?
              <br />
              <span className="line">
                <NavLink to="/signup">Sign In</NavLink>
              </span>
            </p>
          </form>
        </section>
      </div>
    </>
  );
};

export default LoginPage;
