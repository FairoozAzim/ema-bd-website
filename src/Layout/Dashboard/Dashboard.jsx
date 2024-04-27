import { NavLink, Outlet } from "react-router-dom";

import './Dashboard.css'
import { FaHome } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { MdDashboard, MdEvent } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";

const Dashboard = () => {
    return (
        <div className="d-flex">
            <div className="sidebar">
              <ul className="side-menu">
                 <li className="menu-item"><NavLink to ='/dashboard/adminHome'>
                 <MdDashboard className="icon" />
                  Dashboard
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
                 <li className="menu-item"><NavLink to='/dashboard/manageMembers'>
                 <RiTeamLine className="icon"/>
                     Members
                    </NavLink>
                 </li>
                 <li className="menu-item"><NavLink to='/dashboard/manageAlumni'>
                 <PiStudentFill className="icon"/>
                    Students and Alumni
                    </NavLink>
                 </li>
                 <li className="menu-item"><NavLink to='/dashboard/logout'>
                 <AiOutlineLogout className="icon"/>
                    Logout
                    </NavLink>
                 </li>
                 <hr className="divider"></hr>
                 <li className="mt menu-item"><NavLink to='/'>
                 <FaHome className="icon"/>
                    Home Page
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