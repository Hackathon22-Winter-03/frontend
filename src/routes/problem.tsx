import { LoaderFunctionArgs } from "react-router";
import { default as ProblemPage } from "../pages/Problem";
import { default as ProblemModel } from "../models/Problem";
import axios from "axios";
import { getCookie } from "typescript-cookie";
import { Apis, Configuration } from "@traptitech/traq";

export async function action() {
    // TODO: implement for React Router
    return null;
}

export async function loader({ params }: LoaderFunctionArgs): Promise<ProblemModel> {
    const id = params.id ?? "0";
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
    const res = await axios.post(`/problems/${id}`, formData);
    console.log(res.data);
    const problem = res.data as ProblemModel;
    return problem;
    // this data is sample
    // return {
    //     id: id,
    //     creatorId: "hackson",
    //     score: 10,
    //     title: "Hello, world",
    //     createdAt: new Date().toDateString(),
    //     updatedAt: new Date().toDateString(),
    //     deletedAt: undefined,
    //     text: "sample",
    //     creatorName: "anko",
    //     language: "markov",
    //     result: "",
    // };
}

const Problem = () => {
    return <ProblemPage />;
};

export default Problem;
