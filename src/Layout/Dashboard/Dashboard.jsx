import { NavLink, Outlet } from "react-router-dom";

import './Dashboard.css'
import { FaHome } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { MdDashboard, MdEvent } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { RiMenu2Line, RiTeamLine } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { useState } from "react";

const Dashboard = () => {
   const [dashboardActive, setDashboardActive] = useState(false);

   const toggleMobileNav = () => {
   
     setDashboardActive(!dashboardActive);
     console.log(dashboardActive);
   }
   const removeActive = () => {
      setDashboardActive(false);
   }
    return (
        <div className="d-flex">
         <div className="sidebar-menu-icon" onClick={() => toggleMobileNav()}>
         <RiMenu2Line />
         </div>
            <div className={`sidebar ${dashboardActive ? 'menu-show' : 'menu-hide'}`}>
              <ul className="side-menu">
                 <li onClick={removeActive} className="menu-item"><NavLink to ='/dashboard/adminHome'>
                 <MdDashboard className="icon" />
                  <span>Dashboard</span>
                 </NavLink>
                 </li>
                 <li onClick={removeActive} className="menu-item"><NavLink to='/dashboard/manageEvents'>
                 <MdEvent className="icon" />
                   <span> Events </span>
                     </NavLink>
                  </li>
                 <li onClick={removeActive} className="menu-item"><NavLink to='/dashboard/manageBlogs'>
                 <GrNotes className="icon"/>
                   <span>Blogs</span> 
                    </NavLink>
                 </li>
                 <li onClick={removeActive} className="menu-item"><NavLink to='/dashboard/manageMembers'>
                 <RiTeamLine className="icon"/>
                    <span>  Members</span> 
                    </NavLink>
                 </li>
                 <li onClick={removeActive} className="menu-item"><NavLink to='/dashboard/manageAlumni'>
                 <PiStudentFill className="icon"/>
                   <span> Students and Alumni</span>
                    </NavLink>
                 </li>
                 <li onClick={removeActive} className="menu-item"><NavLink to='/dashboard/logout'>
                 <AiOutlineLogout className="icon"/>
                   <span> Logout </span>
                    </NavLink>
                 </li>
                 <hr className="divider"></hr>
                 <li onClick={removeActive} className="mt menu-item"><NavLink to='/'>
                 <FaHome className="icon"/>
                   <span>Home Page</span> 
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