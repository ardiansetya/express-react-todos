import Button from "../components/Button";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-slate-200">
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          <form className="flex flex-col gap-4 w-80 p-5 bg-white shadow-md rounded-xl">
            <div>
              <h1 className="text-3xl font-bold text-center">Register Page</h1>
            </div>
            <div className="flex flex-col">
              <label htmlFor="username" className="text-lg ">
                Username
              </label>
              <input
                type="username"
                name="username"
                className="p-2 outline-none border-2 rounded-lg focus:border-green-300"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg ">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="p-2 outline-none border-2 rounded-lg focus:border-green-300"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-lg ">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="p-2 outline-none border-2 rounded-lg focus:border-green-300"
              />
            </div>
            <div>
              <p>
                Already have an account?{" "}
                <a
                  href="/login"
                  className="hover:underline hover:text-green-300 duration-300 transition-all">
                  Login Here!
                </a>
              </p>
            </div>
            <Button variant="primary">Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
