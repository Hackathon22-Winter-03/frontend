import axios from "axios";
import { useEffect, useState } from "react";
import User from "../models/User";
import Problemlist from "../models/Problem";
import Problems from "../components/Problems";
axios.defaults.baseURL = "https://turing-qomplete.trap.games/api";
export interface UserProps {
    id: string;
    icon: Blob;
    uuid: string;
}
const Userpage = ({ id, icon, uuid }: UserProps) => {
    const [user, getUser] = useState<Array<User>>([]);
    const [problems, getProblems] = useState<Array<Problemlist>>([]);
    useEffect(() => {
        axios.post("/users/" + uuid).then((res) => {
            getUser(res.data);
        });
    }, []);
    useEffect(() => {
        const bodyFormData = new FormData();
        bodyFormData.append("userID", uuid);
        axios.post("/problems", bodyFormData).then((res) => {
            console.log(res.data);
            getProblems(res.data);
        });
    }, []);

    return (
        <>
            <h1 className="relative top-0 left-0 ">{id}</h1>
            <Problems
                problems={problems.filter((problems) => {
                    return problems.result === "AC";
                })}
            />
        </>
    );
};

export default Userpage;
