import React from "react";
import logo from "../assets/logo.jpeg";

type LoginProps = {
  onLogin: (username: string, password: string) => void;
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  const handleNavigation = () => {
    window.location.href = "/register";
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-md">
        {/* Left side with logo */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gray-50 p-6">
          <img src={logo} alt="Logo" className="max-h-80" />
        </div>

        {/* Right side with form */}
        <div className="w-full lg:w-1/2 p-6">
          <h2 className="text-2xl font-semibold text-center text-gray-700 sm:text-3xl">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 sm:text-base"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 sm:text-base"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 sm:text-base"
            >
              Log In
            </button>
          </form>
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600 sm:text-base">
              Don't have an account?{" "}
            </span>
            <button className="mt-2 text-blue-500 hover:underline focus:outline-none sm:text-base" onClick={handleNavigation}>
              Register here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
