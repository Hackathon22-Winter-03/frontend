import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root, { loader as rootLoader, action as rootAction } from "./routes/root";
import Index, { loader as indexLoader, action as indexAction } from "./routes/index";
import Problem, { loader as problemLoader, action as problemAction } from "./routes/problem";
import Problems, { loader as problemsLoader, action as problemsAction } from "./routes/problems";
import Ranking, { loader as rankingLoader, action as rankingAction } from "./routes/ranking";
import User, { loader as userLoader, action as userAction } from "./routes/user";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Root />} loader={rootLoader} action={rootAction}>
                    <Route index element={<Index />} loader={indexLoader} action={indexAction} />
                    <Route path="problem" element={<Problem />} loader={problemLoader} action={problemAction} />
                    <Route path="problems" element={<Problems />} loader={problemsLoader} action={problemsAction} />
                    <Route path="ranking" element={<Ranking />} loader={rankingLoader} action={rankingAction} />
                    <Route path="user" element={<User />} loader={userLoader} action={userAction} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
