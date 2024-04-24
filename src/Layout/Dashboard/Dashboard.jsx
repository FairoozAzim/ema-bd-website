import { NavLink, Outlet } from "react-router-dom";

import './Dashboard.css'
import { FaHome } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { MdEvent } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";

const Dashboard = () => {
    return (
        <div className="d-flex">
            <div className="sidebar">
              <ul className="side-menu">
                 <li className="menu-item"><NavLink to ='/dashboard/adminHome'>
                 <FaHome className="icon"/>
                  Home
                 </NavLink>
                 </li>
                 <li className="menu-item"><NavLink to='/dashboard/manageEvents'>
                 <MdEvent className="icon" />
                    Events
                     </NavLink>
                  </li>
                 <li className="menu-item"><NavLink to='/dashboard/manageBlogs'>
                 <GrNotes className="icon"/>
                    Blogs
                    </NavLink>
                 </li>
                 <li className="menu-item"><NavLink to='/dashboard/manageBlogs'>
                 <AiOutlineLogout className="icon"/>
                    Logout
                    </NavLink>
                 </li>
              </ul>
            </div>
            <div className="contents">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;