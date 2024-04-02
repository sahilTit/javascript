// import axios from "axios";
import { useState, useEffect, useRef, useContext } from "react";
import AuthContext from "./context/AuthProvider";
import axios from "./api/Axios";

const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [succces, setSucces] = useState(false);

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
        JSON.stringify({
          user, //userName: user
          pwd, //password :pwd
        }),
        {
          headers: { "Content-Type": "applicatton/json" },
          // withCredentials: true,
        }
      );
      const acccesToken = response?.data?.acccesToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, acccesToken });
      setSucces(true);
      console.log(user, pwd);
      setUser("");
      setPwd("");
    } catch (error) {
      if (!errMsg?.response) {
        setErrMsg("No Server Response");
      } else if (errMsg.response?.status === 400) {
        setErrMsg("Missing User Name or Password ");
      } else if (errMsg.response?.status === 401) {
        setErrMsg("UnAuthorized  ");
      } else {
        errMsg("LoginFailure");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {succces ? (
        <section>
          Success!
          <p>
            <a href="#">Sign-in</a>
          </p>
        </section>
      ) : (
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
              <button>Sign In</button>
              <p>
                Need an Account?
                <br />
                {
                  <span>
                    <a href=""> Sign-up</a>
                  </span> //Router
                }
              </p>
            </form>
          </section>
        </div>
      )}
    </>
  );
};

export default Login;
