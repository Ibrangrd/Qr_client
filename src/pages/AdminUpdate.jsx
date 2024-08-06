import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../auth";
import { toast } from "react-toastify";

const AdminUpdate = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [isAdmin, setIsAdmin] = useState("");

  const params = useParams();
  // console.log("params single user ", params);
  const { authorizationToken, API } = useAuth();

  // get single user data
  const getSingleUserData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/users/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      // console.log(users single data: ${data});
      // console.log(data);
      setUsername(data.username);
      setPhone(data.phone);
      setIsAdmin(data.isAdmin);
      // if (response.ok) {
      //     getAllUsersData();
      // }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${API}/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify({
            username,
            phone,
            isAdmin,
          }),
        }
      );
      if (response.ok) {
        toast.success("Updated Successfully");
      } else {
        toast.error("Not Updated");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="section-contact">
      <div className="contact-content container">
        <p className="text-6xl font-bold text- white">Update User Data</p>
      </div>
      {/* contact page main  */}
      <div className="">
        {/* contact form content actual  */}
        <section className="section-form">
          <form onSubmit={handleSubmit}>
            <div className="mt-8 mb-4">
              <label htmlFor="username">
                <span className="pt-10 pb-2 text-lg">Username</span>
              </label>
              <input
                className="p-2 my-2 mx-4 text-blue-600 font-bold font-mono  border-2 border-black rounded-lg"
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="phone">
                <span className="pt-10 pb-2 text-lg">Mobile</span>
              </label>
              <input
                className="p-2 my-2 mx-4 text-blue-600 font-bold font-mono  border-2 border-black rounded-lg"
                type="tel"
                name="phone"
                id="phone"
                autoComplete="off"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="pt-4 ">
              <span className="pt-10 pb-2 text-lg">Admin : </span>
              <div className="">
                 <div className="form-control w-2/12">
              <label className="label cursor-pointer">
                <span className="label-text text-white text-lg font-bold">
                  YES
                </span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-yellow-500 border-2 border-yellow-500"
                  checked={isAdmin}
                  onChange={()=>{
                    setIsAdmin(true);
                  }}
                />
              </label>
            </div>
            <div className="form-control w-2/12">
              <label className="label cursor-pointer">
                <span className="label-text text-white text-lg font-bold">
                  NO
                </span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-red-500  border-2 border-red-700"
                  checked={!isAdmin}
                  onChange={()=>{
                    setIsAdmin(false);
                  }}
                />
              </label>
            </div>
              </div>
            </div>

            <div className="py-4 px-20 mx-auto">
              <button
                className="bg-green-600 w-[6rem] text-white border-2 rounded-lg p-1"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

export default AdminUpdate;
