import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Team from "../pages/Team/Team";
import ErrorPage from "../pages/Error/Error";
import Alumni from "../pages/Alumni/Alumni";
import Contact from "../pages/Contact/Contact";
import Events from "../pages/Events/Events";
import EventDetails from "../components/EventsPage/EventDetails";
import AboutPage from "../pages/AboutPage/AboutPage";
import Blogs from "../pages/Blogs/Blogs";
import Dashboard from "../Layout/Dashboard/Dashboard";
import EventManagement from "../components/AdminComponents/EventManagement/EventManagement";
import BlogManagement from "../components/AdminComponents/BlogManagement/BlogManagement";
import AdminHome from "../components/AdminComponents/AdminHome/AdminHome";
import Faq from "../pages/FAQ/Faq";
import Login from "../pages/Login/Login";
import MemberManagement from "../components/AdminComponents/MemberManagement/MemberManagement";
import AlumniManagement from "../components/AdminComponents/AlumniManagement/AlumniManagement";
// import EventDetails from "../components/EventsPage/EventDetails";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/about",
            element: <AboutPage></AboutPage>
        },
        {
          path: "/team",
          element: <Team></Team>
        },
        {
          path: "/alumni",
          element: <Alumni></Alumni>
        },       
        {
          path: "/contact",
          element: <Contact></Contact>
        },       
        {
          path: "/blogs",
          element: <Blogs></Blogs>
        },       
        {
          path: "/events",
          element: <Events></Events>,
          loader: () => fetch('http://localhost:5000/events')
        },   
        {
          path: "/events/:eventId",
          element: <EventDetails></EventDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/events/${params.eventId}`)
        } ,
        {
          path: "/faq",
          element: <Faq></Faq>
        } ,

        { 
          path: "/login",
          element: <Login></Login>

        }

      ],
    
    },
    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children: [

        {
          path: '/dashboard',
          element: <AdminHome></AdminHome>
        },
        {
          path: '/dashboard/adminHome',
          element: <AdminHome></AdminHome>
        },
        {
          path: 'manageEvents',
          element: <EventManagement></EventManagement>
        },
        {
          path: 'manageBlogs',
          element: <BlogManagement></BlogManagement>
        },
        {
          path: 'manageMembers',
          element: <MemberManagement></MemberManagement>
        },
        {
          path: 'manageAlumni',
          element: <AlumniManagement></AlumniManagement>
        },

      ]
    }
   
  ]);