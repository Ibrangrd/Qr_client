import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../auth";
import { toast } from "react-toastify";
import { REG_IMG } from "../utils";


const Register = () => {
  const [user, setUser] = useState({
    username: "",
    phone: "",
    password: "",
  });

  // if(user)
  //   return <Navigate  to="/"/>

  const navigate = useNavigate();
  const { storeTokenInLS, API } = useAuth();
  const URL =` ${API}/api/auth/register`;

  // handling the input values
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      // console.log("res from server", res_data.extraDetails);

      if (response.ok) {
        // stored the token in localhost
        storeTokenInLS(res_data.token);
        //localStorage.setItem("token", res_data);
        setUser({ username: "", email: "", phone: "", password: "" });
        toast.success("Registration Successful");
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <div className="">
      <section className="p-4">
        <main>
          <div className="section-registration">
            <div className="flex">
              <div className="m-4 md:block hidden">
                <img
                  src={REG_IMG}
                  alt="a nurse with a cute look"
                  width="600"
                  height="700"
                />
              </div>
              {/* our main registration code  */}
              <div className="md:mx-10 md:pt-20 md:px-32 px-10 md:w-1/2">
                <h1 className="text-2xl md:text-4xl font-bold font-silter underline decoration-pink-600">
                  Register To Contact Us!
                </h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                      className="p-2 my-4 w-full border-2 border-black rounded-lg"
                      placeholder="Username"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={user.phone}
                      onChange={handleInput}
                      className="p-2 my-4 w-full border-2 border-black rounded-lg"
                      placeholder="Phone"

                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                      className="p-2 my-4 w-full border-2 border-black rounded-lg"
                    />
                  </div>
                  <br />
                  <div className="flex justify-between align-bottom">
                    <button type="submit" className="btn btn-submit font-bold hover:bg-pink-700  hover:scale-105 duration-500  bg-pink-500 text-white">
                      Register
                    </button>
                    <div className="flex">
                      <p className="font-bold">Already Account ? </p>
                      <Link to="/login">
                        <p className="text-pink-500 font-bold"> Login</p>
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

export default Register;