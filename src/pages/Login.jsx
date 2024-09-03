import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../auth";
import { toast } from "react-toastify";
import LOGIN_IMG from "/login.jpg";

const Login = () => {
  const [user, setUser] = useState({
    phone: "",
    password: "",
  });

  if(user)
    return <Navigate to="/"/>

  const { isLoggedIn,  isLoading } = useAuth();


  const navigate = useNavigate();
  const { setLogin , storeTokenInLS, API } = useAuth();
  const URL = `${API}/api/auth/login`;

  // let handle the input field value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      // console.log("login form", response);

      const res_data = await response.json();

      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({ phone: "", password: "" });
        setLogin(true);
        toast.success("Login Successful");
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
        console.log("invalid credentials");
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <div className="p-4">
      <section>
        <main>
          <div className="">
              <div className="flex ">
                <div className="m-4 md:block hidden">
                  <img
                    src={LOGIN_IMG}
                    alt="Let's fill the login form"
                    width="600"
                    height="700"
                  />
                </div>
                {/* our main registration code  */}
                <div className="md:mx-10 md:pt-36 md:px-32 px-10 md:w-1/2">
                  <h1 className="text-5xl font-bold underline decoration-blue-600">
                    Login To Contact Us!
                  </h1>
                  <br />
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="phone">phone</label>
                      <input
                        type="number"
                        name="phone"
                        value={user.phone}
                        onChange={handleInput}
                        placeholder="1234567890"
                        className="p-2 my-4 w-full border-2 border-black rounded-lg"
                      />
                    </div>
                    <div>
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleInput}
                        className="p-2 my-4 w-full border-2 border-black rounded-lg "
                        placeholder="Password"
                      />
                    </div>
                    <br />
                    <div className="flex justify-between align-bottom">
                    <button type="submit" className="btn btn-submit font-bold hover:bg-blue-600 hover:scale-110 duration-500 bg-blue-500 text-white">
                      Login
                    </button>
                    <div className="flex">
                      <p className="font-bold">New User ?</p>
                      <Link to="/register">
                        <p className="text-blue-500 font-bold">Register</p>
                      </Link>
                    </div>
                  </div>
                  </form>
                </div>
              </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Login;