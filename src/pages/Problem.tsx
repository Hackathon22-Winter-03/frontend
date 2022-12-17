import { useState } from "react";
import { useLoaderData } from "react-router";
import CodeEditor, { CodeEditorProp } from "../components/CodeEditor";
import Preview from "../components/Preview";
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

const Submission = () => (
    <div className="bg-yellow-200 rounded m-4 p-4 basis-full">
        <h2>提出</h2>
    </div>
);

const Problem = () => {
    const { title, id } = useLoaderData() as ProblemModel;
    const [code, setCode] = useState("");
    return (
        <>
            <h1>{title}</h1>
            <p>id: {id}</p>
            <div className="my-8 flex justify-between justify-items-stretch">
                <div className="justify-self-start basis-1/2 flex flex-wrap">
                    <Description md="# 問題説明" />
                    <Submission />
                </div>
                <Editor value={code} setValue={setCode} />
            </div>
        </>
    );
};

export default Problem;
