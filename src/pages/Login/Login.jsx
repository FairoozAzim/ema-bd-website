
const Login = ({ onLogin }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    onLogin(username, password);
  };

  return (
  <div className="mt">
      <form onSubmit={handleSubmit}>
      <input
        name="username"
        type="text"
        placeholder="Username"
       
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        
      />
      <button type="submit">Login</button>
    </form>
  </div>
  );
};

export default Login;
