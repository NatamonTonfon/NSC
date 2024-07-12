function SignUp() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-4">สร้างบัญชี</h1>
        <p className="text-center mb-6">
          เริ่มการลงทุนที่เพิ่มโอกาสให้คุณมากยิ่งขึ้นด้วยการลงทุนตามปัจจัย
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="confirm password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button className="bg-teal-500 text-white w-full py-2 rounded-lg">
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          คุณมีบัญชีหรือยัง?{" "}
          <a href="/log-in" className="text-teal-500">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
