import axios from "axios";
import { Apis, Configuration } from "@traptitech/traq";
import { LoaderFunctionArgs } from "react-router";
import { getCookie } from "typescript-cookie";
import { default as UserPage } from "../pages/User";
import { default as UserModel } from "../models/User";
import { default as ProblemModel } from "../models/Problem";

axios.defaults.baseURL = "https://turing-qomplete.trap.games/api";

export async function action() {
    // TODO: implement for React Router
    return null;
}

export interface LoaderFunctionReturns {
    name: string;
    uuid: string;
    user: UserModel;
    problems: ProblemModel[];
}

export async function loader({ params }: LoaderFunctionArgs): Promise<LoaderFunctionReturns> {
    const accessToken = getCookie("AccessToken") ?? "";
    const api = new Apis(
        new Configuration({
            accessToken: accessToken,
        })
    );
    const user = await api.getUser(params.name ?? "");
    const { id, name, bio } = user.data;

    const formData = new FormData();
    formData.append("userID", id);
    let userData = await axios.post(`/users/${id}`, formData);

    if (userData.status === 404) {
        const nFormData = new FormData();
        nFormData.append("userID", id);
        nFormData.append("id", id);
        nFormData.append("name", name);
        nFormData.append("comment", bio);
        await axios.post("/users/create", nFormData);
        userData = await axios.post(`/users/${id}`, formData);
    }
    const problemsRes = await axios.post(`/problems`, formData);
    const problems = problemsRes.data as ProblemModel[];
    return {
        name: user.data.name,
        uuid: id,
        user: userData.data as unknown as UserModel,
        problems: problems,
    };
}

const User = () => {
    return <UserPage />;
};

export default User;
