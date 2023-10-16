import { BiSolidLockAlt } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { FaUser } from "react-icons/fa6"

const SignUp = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/sFq9FzK/nathan-dumlao-6-Vh-PY27jdps-unsplash.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        position: "relative",
      }}
    >
      {/* Adding the black overlay */}
      <div
        style={{
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      ></div>
      <div className="hero-content">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent  backdrop-blur-lg border-2 border-[rgba(255, 255, 255, .5)]">
          <form className="card-body">
            <h1 className="text-2xl font-bold text-center text-white">Sign Up</h1>

            {/* Input box */}

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-semibold">
                  Email
                </span>
              </label>
              <input
                type="text"
                placeholder="User Name"
                className=" px-3 py-3 rounded-lg bg-transparent border-2 border-white text-white focus:outline-none"
                required
              />
              <label className="text-white text-base absolute right-12 top-[125px]">
                <FaUser></FaUser>
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-semibold">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className=" px-3 py-3 rounded-lg bg-transparent border-2 border-white text-white focus:outline-none"
                required
              />
              <label className="text-white text-lg absolute right-12 top-[220px]">
                <IoIosMail></IoIosMail>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-semibold">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="px-3 py-3 rounded-lg bg-transparent border-2 border-white text-white focus:outline-none"
                required
              />
              <label className="text-white text-lg absolute right-12 top-[315px]">
                <BiSolidLockAlt></BiSolidLockAlt>
              </label>
            </div>

            <div className=" flex flex-col mt-4">
              <button className="bg-amber-600 py-3 rounded-lg text-white font-semibold text-lg hover:bg-amber-500">
                Sign Up
              </button>
            </div>
            <label className="mt-3 text-white">
              <a href="/login">
                Already have an account? {" "}
                <span className=" text-sm hover:underline hover:text-blue-600 font-semibold">
                  Login
                </span>
              </a>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
