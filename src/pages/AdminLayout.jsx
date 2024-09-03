import { NavLink, Outlet, Navigate } from "react-router-dom";
import { FaUser, FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from "../auth";
import Loading from "./Loading";

const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  // console.log("admin layout", user);
  

  if (isLoading) {
    return <Loading/>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex justify-between ">
      <div className="md:w-2/12 w-1/5 md:border-4 border-2 border-[#FF4E88] ">
          <div className="md:px-8 px-2 py-16   text-white relative bg-black h-[100%]">
            <nav className="sticky top-0 left-0  text-white bg-black-500 ">
              <ul className="flex flex-col justify-evenly items-center ">
                <li className="mt-20 mb-10 -ml-2">
                  <NavLink to="/admin/users">
                    <FaUser className="text-4xl " /> Users
                  </NavLink>
                </li>
                <li className="my-10 ">
                  <NavLink to="/admin/contacts">
                    <FaMessage className="text-4xl" /> Contacts
                  </NavLink>
                </li>
                <li className="my-10">
                  <NavLink to="/">
                    <FaHome className="text-4xl" /> Home
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
      </div>
      <div className="md:w-10/12 w-[80%] md:px-16 px-1  bg-black  py-10 text-white md:border-4 border-2 border-[#FF4E88]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;