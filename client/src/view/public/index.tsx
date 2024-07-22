import { ROUTES } from "@/types/enums/Routes";
import { useNavigate } from "react-router-dom";
import Back from "@assets/LoginBack.png";

const Login = () => {
  const navigate = useNavigate();

  const handleInicio = () => {
    navigate(ROUTES.PRODUCTO);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-start bg-cover bg-center"
      style={{ backgroundImage: `url(${Back})` }}
    >
      <div className="w-full max-w-md p-8 space-y-8 rounded-lg ml-20">
        <div className="text-center">
          <img src="logo.png" alt="Logo" className="mx-auto h-12 w-auto" />
        </div>
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Login</h2>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="sr-only">
                Email or phone number
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Email or phone number"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-teal-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-primary hover:text-primary100"
                >
                  Forgot your password?{" "}
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                onClick={handleInicio}
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-center">
            <a
              href="#"
              className="font-medium text-primary hover:text-primary100"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
