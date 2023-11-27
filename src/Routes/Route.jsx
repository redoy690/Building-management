import { createBrowserRouter } from "react-router-dom";
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
import MakePaymentConfirm from "../pages/Dashboard/Member/MakePaymentConfirm";
import Contactus from "../pages/Contactus/Contactus";
import AdminRoute from "./AdminRoute";
import MemberRoute from "./MemberRoute";
import UserRoute from "./UserRoute";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/apartment',
        element: <Apartment></Apartment>
      },
      {
        path: '/contactus',
        element: <Contactus></Contactus>
      },
      {
        path: 'dashboard/',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: '/dashboard/userprofile',
            element: <UserRoute><UserProfile></UserProfile></UserRoute>
          },
          {
            path: '/dashboard/userannouncement',
            element: <UserRoute><UserAnnouncement></UserAnnouncement></UserRoute>
          },

          {
            path: '/dashboard/memberprofile',
            element: <MemberRoute><MemberProfile></MemberProfile></MemberRoute>
          },
          {
            path: '/dashboard/makepayment',
            element: <MemberRoute><MakePayment></MakePayment></MemberRoute>
          },
          {
            path: '/dashboard/confirm',
            element: <MemberRoute><MakePaymentConfirm></MakePaymentConfirm></MemberRoute>
          },
          {
            path: '/dashboard/paymenthistory',
            element: <MemberRoute><PaymentHistory></PaymentHistory></MemberRoute>
          },
          {
            path: '/dashboard/memberannouncement',
            element:<MemberRoute><MemberAnnouncement></MemberAnnouncement></MemberRoute>
          },
          {
            path: '/dashboard/adminprofile',
            element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
          },
          {
            path: '/dashboard/managemember',
            element: <AdminRoute><ManageMember></ManageMember></AdminRoute>
          },
          {
            path: '/dashboard/makeannouncement',
            element: <AdminRoute><MakeAnnouncement></MakeAnnouncement></AdminRoute>
          },
          {
            path: '/dashboard/aggrementrequest',
            element: <AdminRoute><AggrementRequest></AggrementRequest></AdminRoute>
          },
          {
            path: '/dashboard/managecoupon',
            element: <AdminRoute><ManageCoupon></ManageCoupon></AdminRoute>
          },
        ]
      }
    ]
  }

]);