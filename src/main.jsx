import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import Users from "./routes/users";
import Articles from "./routes/Articles";
import { contextService } from "./lib/context";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/root",
        element: <div>Admin</div>,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
    ],
  },
]);

const App = () => {
  const [token, setToken] = React.useState("");
  return (
    <contextService.Provider value={{ token, setToken }}>
      <RouterProvider router={router} />
    </contextService.Provider>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
