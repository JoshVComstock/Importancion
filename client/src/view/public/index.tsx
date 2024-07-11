const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg flex max-w-4xl">
        <div className="p-8 w-full lg:w-1/2">
          <div className="flex justify-center mb-6">
            <img src="logo.png" alt="Logo" className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">
            Sign in to Diprella
          </h2>
          <div className="flex justify-center space-x-4 mb-6">
            <button className="bg-gray-100 p-2 rounded-full">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="bg-gray-100 p-2 rounded-full">
              <i className="fab fa-google"></i>
            </button>
            <button className="bg-gray-100 p-2 rounded-full">
              <i className="fab fa-linkedin-in"></i>
            </button>
          </div>
          <p className="text-center text-gray-500 mb-6">
            or use your email account:
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <a href="#" className="text-sm text-gray-600 hover:underline">
                Forgot your password?
              </a>
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded-md">
              Sign In
            </button>
          </form>
        </div>
        <div className="hidden lg:flex lg:w-1/2 bg-green-600 text-white items-center justify-center rounded-r-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Hello, Friend!</h2>
            <p className="mt-4">
              Enter your personal details and start journey with us
            </p>
            <button className="mt-6 px-6 py-2 border border-white text-white rounded-md">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
