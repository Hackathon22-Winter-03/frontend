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
    return users.sort((a, b) => b.score - a.score);
}

const Ranking = () => {
    return <RankingPage />;
};

export default Ranking;
