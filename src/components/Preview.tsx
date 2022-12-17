import { useRemarkSync } from "react-remark";

export interface PreviewProp {
    value: string;
}

const Preview = ({ value }: PreviewProp) => {
    const reactContent = useRemarkSync(value);

    return reactContent;
};

export default Preview;
