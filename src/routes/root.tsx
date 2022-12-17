import { getCookie, removeCookie, setCookie } from "typescript-cookie";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import { useLocation } from "react-router";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID || "client_id";

function isAuthorized(): boolean {
    const accessToken = getCookie("AccessToken");
    return accessToken !== undefined && accessToken !== "undefined";
}

export async function action() {
    // TODO: implement for React Router
    return null;
}

export interface LoaderFunctionReturns {
    state: "not authorized" | "authorized";
    redirect?: string;
}

export async function loader() {
    // traQ OAuth 2.0用のアクセストークン取得
    if (isAuthorized()) {
        removeCookie("AccessToken");
    }
    return null;
}

const Root = () => {
    const authorized = isAuthorized();
    if (!authorized) {
        const query = new URLSearchParams(useLocation().search);
        const authorizationCode = query.get("code");
        if (!authorizationCode) {
            const url = `https://q.trap.jp/api/v3/oauth2/authorize?response_type=code&client_id=${CLIENT_ID}`;
            window.location.href = url;
            return <p>redirecting...</p>;
        }
        const url = "https://q.trap.jp/api/v3/oauth2/token";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `grant_type=authorization_code&client_id=${CLIENT_ID}&code=${authorizationCode}`,
        })
            .then((res) => res.json())
            .then((parsed) => {
                setCookie("AccessToken", parsed.access_token, {
                    secure: true,
                    expires: 1,
                });
                console.log(parsed);
            })
            .catch((reason) => {
                console.log(reason);
            });
    }
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
