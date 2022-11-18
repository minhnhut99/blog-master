import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  // ==== hook ====
  const navigate = useNavigate();
  // ==== handleFunciton ====
  const handleClickBtnLogin = (event) => {
    event.preventDefault();
    console.log("123 login here!");
  };
  const handleClickRedirectSignUp = () => {
    navigate("/signup");
  };
  return (
    <React.Fragment>
      <div
        className="w-full h-screen bg-color_primary
        shadow-current
      "
      >
        <div className="fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-92 h-max px-6 py-8 bg-white rounded-sm">
          <h2
            className="text-title
           font-bold text-3xl uppercase text-center  mb-4"
          >
            Login
          </h2>
          <form>
            <div>
              <input
                className="input-primary"
                type="text"
                placeholder="username"
                name="username"
              />
            </div>
            <div>
              <input
                type="password"
                className="input-primary mt-4 mb-1"
                placeholder="password"
                name="password"
              />
            </div>
            <div
              className="flex justify-end mb-4"
              onClick={handleClickRedirectSignUp}
            >
              <p className="text-sm text-text cursor-pointer">
                Don't have account?
              </p>
            </div>
            <div>
              <div className="flex">
                <button
                  type="submit"
                  className="btn-primary w-full"
                  onClick={handleClickBtnLogin}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
