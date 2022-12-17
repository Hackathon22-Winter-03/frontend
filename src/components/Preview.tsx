import { useRemarkSync } from "react-remark";

const Preview = (value: string) => {
    const reactContent = useRemarkSync(value);

    return reactContent;
};

export default Preview;
