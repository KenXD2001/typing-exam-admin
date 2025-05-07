import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Icon } from "@iconify/react";
import eyeIcon from "../assets/images/mdi--eye.svg"
import eyeOffIcon from "../assets/images//mdi--eye-off.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Add real login logic
    console.log("Logging in with:", { email, password });

    // Simulate successful login
    navigate("/dashboard");
  };

  return (
    <div className="w-full max-w-sm">
      <h2 className="text-3xl font-semibold text-center mb-6 uppercase">
        Admin Login
      </h2>
      <form onSubmit={handleLoginSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <img
            src={showPassword ? eyeOffIcon : eyeIcon}
            alt="toggle visibility"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
