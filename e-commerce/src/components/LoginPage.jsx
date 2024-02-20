const handleSubmit = (e) => {
  e.preventDefault();
};

function LoginPage() {
  return (
    <div>
      <form onSubmit={handleSubmit} action="submit">
        <label htmlFor="email">Email</label>
        <input type="text" />
        <label htmlFor="Password">Password</label>
        <input type="password" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default LoginPage;
