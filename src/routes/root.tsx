import { useState } from "react";
import { getCookie, removeCookie, setCookie } from "typescript-cookie";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useLocation } from "react-router";
import { Apis as traq, Configuration } from "@traptitech/traq";
import axios from "axios";

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
    userName: string | undefined;
}

export async function loader() {
    if (!isAuthorized()) {
        removeCookie("AccessToken");
        return null;
    }
    const token = getCookie("AccessToken");
    const api = new traq(
        new Configuration({
            accessToken: token,
        })
    );
    const me = await api.getMe();
    const id = me.data.id;
    if (!id) throw Error("error while fetching user UUID");
    const formData = new FormData();
    formData.append("userID", id);
    axios.defaults.baseURL = "https://turing-qomplete.trap.games/api";
    const res = await fetch(`https://turing-qomplete.trap.games/api/users/${id}`, {
        method: "POST",
        body: formData,
    });
    console.log(res.status);
    if (res.status != 200) {
        console.log("create");
        formData.append("id", id);
        formData.append("name", me.data.name);
        formData.append("name", me.data.bio);
        await axios.post("/users/create", formData);
    }
    return null;
}

const Root = () => {
    const [userId, setUserId] = useState("userId is not set");
    const setAccessToken = (token: string) => {
        const api = new traq(
            new Configuration({
                accessToken: token,
            })
        );
        api.getMe().then((res) => {
            const userId = res.data.name;
            setUserId(userId);
        });
    };
    if (!isAuthorized()) {
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
            .then((res) => {
                if (!res.ok) {
                    console.error(res);
                    return null;
                }
                return res.json();
            })
            .then((parsed) => {
                const token = parsed?.access_token;
                if (!token) return;
                setCookie("AccessToken", token, {
                    expires: 1,
                });
                setAccessToken(token);
            })
            .catch((reason) => {
                console.log("failed to fetch due to:", reason);
            });
    } else {
        setAccessToken(getCookie("AccessToken") ?? "");
    }
    return (
        <div className="bg-[#faf8f8] text-[#191526]  min-h-screen">
            <Header userId={userId} />
            <div className="mx-40 my-10">
                <Outlet />
            </div>
        </div>
    );
};

export default Root;
