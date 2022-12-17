import { Apis, Configuration } from "@traptitech/traq";
import axios from "axios";
import { getCookie } from "typescript-cookie";
import { default as ProblemsPage } from "../pages/Problems";
import { default as ProblemModel } from "../models/Problem";

export async function action() {
    // TODO: implement for React Router
    return null;
}

export async function loader(): Promise<ProblemModel[]> {
    const token = getCookie("AccessToken") ?? "";
    const api = new Apis(
        new Configuration({
            accessToken: token,
        })
    );
    const me = await api.getMe();
    const userId = me.data.id;
    const formData = new FormData();
    formData.append("userID", userId);
    axios.defaults.baseURL = "https://turing-qomplete.trap.games/api";
    const res = await axios.post("/problems", formData);
    const problems = res.data as ProblemModel[];
    console.log(problems);
    return problems;
}

const Problems = () => {
    return <ProblemsPage />;
};

export default Problems;
