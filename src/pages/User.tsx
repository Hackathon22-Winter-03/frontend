export interface UserProps {
    id: string;
    icon: Blob;
}

const User = ({ id, icon }: UserProps) => {
    return <h1>User {id}</h1>;
};

export default User;
