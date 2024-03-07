import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MovieDetail from "./pages/MovieDetail";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Order from "./pages/Order";
import PaymentExample from "./pages/PaymentExample";
// import Payment from "./pages/Payment";
// import TicketResult from "./pages/TicketResult";

const router = createBrowserRouter([
  {
    path: "/signUp",
    element: <SignUp />,
  },{
    path: "/signIn",
    element: <SignIn />,
  },{
    path: "/",
    element: <Home />,
  },{
    path: "/movie",
    element: <Movie />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetail />,
  },{
    path: "/order",
    element: <Order />,
  },{
      path: "/paymentExample",
      element: <PaymentExample />,
    },
  // {
  //   path: "/payment",
  //   element: <Payment />,
  // },
  // {
  //   path: "/ticketresult",
  //   element: <TicketResult />,
  // },
]);

export default router;
