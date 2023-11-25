import { createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Registration from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Apartment from "../pages/Apartment/Apartment";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import UserProfile from "../pages/Dashboard/User/userProfile";
import UserAnnouncement from "../pages/Dashboard/User/UserAnnouncement";
import MemberProfile from "../pages/Dashboard/Member/MemberProfile";
import MakePayment from "../pages/Dashboard/Member/MakePayment";
import PaymentHistory from "../pages/Dashboard/Member/PaymentHistory";
import MemberAnnouncement from "../pages/Dashboard/Member/MemberAnnouncement";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile";
import ManageMember from "../pages/Dashboard/Admin/ManageMember";
import MakeAnnouncement from "../pages/Dashboard/Admin/MakeAnnouncement";
import AggrementRequest from "../pages/Dashboard/Admin/AggrementRequest";
import ManageCoupon from "../pages/Dashboard/Admin/ManageCoupon";




 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/registration',
          element:<Registration></Registration>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/apartment',
          element:<Apartment></Apartment>
        },
        {
          path:'dashboard/',
          element:<Dashboard></Dashboard>,
          children:[
            {
              path:'/dashboard/userprofile',
              element:<UserProfile></UserProfile>
            },
            {
              path:'/dashboard/userannouncement',
              element:<UserAnnouncement></UserAnnouncement>
            },

            {
              path:'/dashboard/memberprofile',
              element:<MemberProfile></MemberProfile>
            },
            {
              path:'/dashboard/makepayment',
              element:<MakePayment></MakePayment>
            },
            {
              path:'/dashboard/paymenthistory',
              element:<PaymentHistory></PaymentHistory>
            },
            {
              path:'/dashboard/memberannouncement',
              element:<MemberAnnouncement></MemberAnnouncement>
            },

            {
              path:'/dashboard/adminprofile',
              element:<AdminProfile></AdminProfile>
            },
            {
              path:'/dashboard/managemember',
              element:<ManageMember></ManageMember>
            },
            {
              path:'/dashboard/makeannouncement',
              element:<MakeAnnouncement></MakeAnnouncement>
            },
            {
              path:'/dashboard/aggrementrequest',
              element:<AggrementRequest></AggrementRequest>
            },
            {
              path:'/dashboard/managecoupon',
              element:<ManageCoupon></ManageCoupon>
            },
          ]
        }
      ]
    }
    
  ]);