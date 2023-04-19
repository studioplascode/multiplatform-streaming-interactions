import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root, { Dashboard, Page404, Chat, Overlays, CreateOverlay } from "./routes";

const router = createBrowserRouter([
  { path: "*", element: <Page404 /> },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "dashboard/",
        element: <Dashboard />,
      },
      {
        path: "chat/",
        element: <Chat />,
      },
      {
        path: "overlays/",
        element: <Overlays />,
        children: [
          {
            path: "create/",
            element: <CreateOverlay />,
          }
        ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
