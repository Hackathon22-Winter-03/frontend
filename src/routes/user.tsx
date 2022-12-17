import axios from "axios";
import { Apis, Configuration } from "@traptitech/traq";
import { LoaderFunctionArgs } from "react-router";
import { getCookie } from "typescript-cookie";
import { default as UserPage } from "../pages/User";
import { default as UserModel } from "../models/User";
import { default as ProblemModel } from "../models/Problem";

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
    const name = params.name ?? "traP";
    const me = (await api.getMe()).data;
    const users = await api.getUsers(false, name);
    const id = users.data[0].id;
    console.log({ name, users: users });
    if (!id) throw Error("error while fetching user UUID");
    const user = (await api.getUser(id)).data;
    axios.defaults.baseURL = "https://turing-qomplete.trap.games/api";
    const formData = new FormData();
    formData.append("userID", id);
    const urs = [];
    const userRes = await fetch(`https://turing-qomplete.trap.games/api/users/${id}`, {
        method: "POST",
        body: formData,
    });
    console.log(userRes.status);
    if (userRes.status != 200) {
        console.log("create");
        const nFormData = new FormData();
        nFormData.append("userID", me.id);
        nFormData.append("id", user.id);
        nFormData.append("name", user.name);
        nFormData.append("comment", user.bio);
        const r = await axios.post("/users/create", nFormData);
        console.log(r);
        urs.push(
            await fetch(`https://turing-qomplete.trap.games/api/users/${id}`, {
                method: "POST",
                body: formData,
            })
        );
    } else {
        console.log("user exists");
        urs.push(userRes);
    }
    const problemsRes = await axios.post(`/problems`, formData);
    const problems = (await problemsRes.data) as ProblemModel[];
    return {
        name: name,
        uuid: id,
        user: urs[0].json() as unknown as UserModel,
        problems: problems.filter((p) => p.result === "AC"),
    };
}

const User = () => {
    return <UserPage />;
};

export default User;
