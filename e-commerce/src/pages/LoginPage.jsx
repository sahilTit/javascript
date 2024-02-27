import "./Loginpage.css";
// const handleSubmit = (e) => {
//   e.preventDefault();
// };

function LoginPage() {
  return (
    <div className="form1">
      <div className="whole-form">
        <h1>Signup Form</h1>
        <div className="secondary-form">
          <input placeholder="Full Name" type="text" />
          <input placeholder="Email" type="password" />
          <input placeholder="password" type="password" />
        </div>
        <div className="divbtn">
          <button className="btn">Continue</button>
        </div>
        <div className="loginsignup-login">
          <p>
            Already have an account ?<span>Login here</span>
          </p>
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Agree terms of privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
