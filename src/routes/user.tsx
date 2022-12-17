import { Apis, Configuration } from "@traptitech/traq";
import { LoaderFunctionArgs, useLoaderData } from "react-router";
import { getCookie } from "typescript-cookie";
import { default as UserPage } from "../pages/User";

export async function action() {
    // TODO: implement for React Router
    return null;
}

export interface LoaderFunctionReturns {
    id: string;
    icon: Blob;
    uuid: string;
}

export async function loader({ params }: LoaderFunctionArgs): Promise<LoaderFunctionReturns> {
    // TODO: implement for React Router
    const accessToken = getCookie("AccessToken") ?? "";
    const api = new Apis(
        new Configuration({
            accessToken: accessToken,
        })
    );
    const name = params.id ?? "traP";
    const id = (await api.getUsers(false, name)).data.at(0)?.id;
    if (!id) throw Error("error while fetching user UUID");
    const res = await api.getUserIcon(id);
    const icon = new Blob([res.data]);
    return { id: name, icon: icon, uuid: id };
}

const User = () => {
    const { id, icon, uuid } = useLoaderData() as LoaderFunctionReturns;
    return <UserPage id={id} icon={icon} uuid={uuid} />;
};

export default User;
