import { getCookie, setCookie } from "typescript-cookie";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import { useLocation } from "react-router";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID || "client_id";

export async function action() {
    // TODO: implement for React Router
    return null;
}

export interface LoaderFunctionReturns {
    state: "not authorized" | "authorized";
    redirect?: string;
}

export async function loader(): Promise<LoaderFunctionReturns> {
    // traQ OAuth 2.0用のアクセストークン取得
    const accessToken = getCookie("AccessToken");
    if (accessToken) {
        return { state: "authorized" };
    }
    const url = `https://q.trap.jp/api/v3/oauth2/authorize?response_type=code&client_id=${CLIENT_ID}`;
    return { state: "not authorized", redirect: url };
}

const Root = () => {
    const query = new URLSearchParams(useLocation().search);
    const authorizationCode = query.get("code");
    if (authorizationCode) {
        const url = `https://q.trap.jp/api/v3/oauth2/token`;
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `grant_type=authorization_code&client_id=${CLIENT_ID}&code=${authorizationCode}`,
        })
            .then((res) => res.json())
            .then((parsed) => {
                setCookie("AccessToken", parsed.access_token);
                console.log(parsed);
            });
    }
    // const { state, redirect } = useLoaderData() as LoaderFunctionReturns;
    // if (state === "not authorized" && redirect) {
    //     window.location.href = redirect;
    // }
    return (
        <>
            <Header userId={"hoge"} />
            <div className="m-8">
                <Outlet />
            </div>
        </>
    );
};

export default Root;
