import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
// import useTitle from "../hooks/useTitle";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
//   useTitle("JobTrack - Login");
  const { loginUser, googleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(() => {
        toast.success("Login Successful!");
        navigate(from, { replace: true });
      })
      .catch(() => {
        toast.error("Invalid email or password");
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Google login successful!");
        navigate(from, { replace: true });
      })
      .catch(() => toast.error("Google login failed"));
  };

  return (
    <div className="hero min-h-screen bg-cover bg-center rounded-2xl" style={{backgroundImage:"url('/login.jpg')" }}>
      <div className="card w-full max-w-sm shadow-2xl bg-blue-300">
        <h2 className="text-center text-2xl font-bold mt-6">Login</h2>
        <form onSubmit={handleLogin} className="card-body">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered"
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered"
            required
          />
          <Link
            to="/forgot-password"
            state={{ email }}
            className="text-sm link link-hover"
          >
            <span className="text-black text-[12px]">Forgot Password?</span>
          </Link>
          <div className="form-control mt-4">
            <button className="btn bg-green-500 border-0 btn-sm">Login</button>
          </div>
        </form>
        <div className="text-center mb-2">
          <button onClick={handleGoogleLogin} className="btn btn-sm btn-outline">
          <FcGoogle size={20} /> Login with Google
          </button>
        </div>
        <p className="text-center text-sm mb-4">
          New here?{" "}
          <Link to="/register" className="text-blue-600 link">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
