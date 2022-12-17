import { useState } from "react";
import { useLoaderData } from "react-router";
import CodeEditor, { CodeEditorProp } from "../components/CodeEditor";
import Preview from "../components/Preview";
import ResultModal from "../components/ResultModal";
import { default as ProblemModel } from "../models/Problem";

type DescriptionProp = {
    md: string;
};

const Description = ({ md }: DescriptionProp) => (
    <div className="bg-yellow-200 rounded m-4 p-4 basis-full">
        <Preview value={md} />
    </div>
);

const Editor = ({ value, setValue }: CodeEditorProp) => (
    <div className="bg-yellow-200 rounded m-4 p-4 justify-self-end basis-1/2 min-h-screen">
        <CodeEditor value={value} setValue={setValue} />
    </div>
);

const Submission = ({
    openModal,
    setOpenModal,
}: {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <>
            <div className="bg-yellow-200 rounded m-4 p-4 basis-full flex flex-wrap">
                <h2 className="w-full">提出</h2>
                <button className="bg-blue-500 w-2/5" onClick={() => setOpenModal(!openModal)}>
                    submit!
                </button>
            </div>
        </>
    );
};

const Problem = () => {
    const { title, id } = useLoaderData() as ProblemModel;
    const [code, setCode] = useState("");
    const [status, setStatus] = useState("");
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <h1>{title}</h1>
            <p>id: {id}</p>
            <div className="my-8 flex justify-between justify-items-stretch">
                <div className="justify-self-start basis-1/2 flex flex-wrap">
                    <Description md="# 問題説明" />
                    <Submission openModal={openModal} setOpenModal={setOpenModal} />
                </div>
                <Editor value={code} setValue={setCode} />
            </div>
            <ResultModal result={status} modalIsOpen={openModal} setIsOpen={setOpenModal} />
        </>
    );
};

export default Problem;
