import { default as RankingPage } from "../pages/Ranking";
import { default as UserModel } from "../models/User";
import { getCookie } from "typescript-cookie";
import { Apis, Configuration } from "@traptitech/traq";
import axios from "axios";

export async function action() {
    // TODO: implement for React Router
    return null;
}

export async function loader(): Promise<UserModel[]> {
    const token = getCookie("AccessToken") ?? "";
    const api = new Apis(
        new Configuration({
            accessToken: token,
        })
    );
    const meRes = await api.getMe();
    const userId = meRes.data.id;
    const formData = new FormData();
    formData.append("userID", userId);
    axios.defaults.baseURL = "https://turing-qomplete.trap.games/api";
    const res = await axios.post("/users", formData);
    const users = res.data as UserModel[];
    return users.sort((a, b) => {
        let res = b.score - a.score;
        if (res != 0) return res;
        const len = Math.min(a.name.length, b.name.length);
        for (let i = 0; i < len; ++i) {
            res = a.name.charCodeAt(i) - b.name.charCodeAt(i);
            if (res != 0) return res;
        }
        return res;
    });
}

const Ranking = () => {
    return <RankingPage />;
};

export default Ranking;
