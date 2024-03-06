import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Order from "./pages/Order";
// import Payment from "./pages/Payment";
// import TicketResult from "./pages/TicketResult";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetail />,
  },
  {
    path: "/order",
    element: <Order />,
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
