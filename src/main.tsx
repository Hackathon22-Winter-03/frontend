import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Modal from "react-modal";
import Root, { loader as rootLoader, action as rootAction } from "./routes/root";
import Index, { loader as indexLoader, action as indexAction } from "./routes/index";
import Problem, { loader as problemLoader, action as problemAction } from "./routes/problem";
import Problems, { loader as problemsLoader, action as problemsAction } from "./routes/problems";
import Ranking, { loader as rankingLoader, action as rankingAction } from "./routes/ranking";
import User, { loader as userLoader, action as userAction } from "./routes/user";
import "./main.css";

const root = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                index: true,
                element: <Index />,
                loader: indexLoader,
                action: indexAction,
            },
            {
                path: "problem/:id",
                element: <Problem />,
                loader: problemLoader,
                action: problemAction,
            },
            {
                path: "problems",
                element: <Problems />,
                loader: problemsLoader,
                action: problemsAction,
            },
            {
                path: "ranking",
                element: <Ranking />,
                loader: rankingLoader,
                action: rankingAction,
            },
            {
                path: "user/:id",
                element: <User />,
                loader: userLoader,
                action: userAction,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={root} />
    </React.StrictMode>
);
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");
