import { useState, useRef } from "react";
import { useLoaderData } from "react-router";
import CodeEditor, { CodeEditorProp } from "../components/CodeEditor";
import Preview from "../components/Preview";
import ResultModal from "../components/ResultModal";
import { default as ProblemModel } from "../models/Problem";
import axios from "axios";
axios.defaults.baseURL = "https://turing-qomplete.trap.games/api";
type DescriptionProp = {
    title: string;
    md: string;
};

const Description = ({ title, md }: DescriptionProp) => (
    <div className="bg-[#ebf3fb] border-[#61affe] border-2 rounded m-4 p-4 basis-full">
        <h2 className="mb-5">{title}</h2>
        <Preview value={md} />
    </div>
);

const Problem = () => {
    const { problem, userId } = useLoaderData() as { problem: ProblemModel; userId: string };
    const [code, setCode] = useState("");
    const [input, setInput] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const inputRef = useRef(input);
    inputRef.current = input;

    const nextStep = async () => {
        const bodyFormData = new FormData();
        bodyFormData.append("code", code);
        bodyFormData.append("state", input);
        bodyFormData.append("problemID", problem.id);
        const res = await axios.post("/step", bodyFormData);
        setInput(res.data.output);
    };

    const excute = async () => {
        const bodyFormData = new FormData();
        bodyFormData.append("id", userId);
        bodyFormData.append("code", code);
        bodyFormData.append("state", inputRef.current);
        bodyFormData.append("problemID", problem.id);
        const loop = async () => {
            bodyFormData.set("state", inputRef.current);
            const res = await axios.post("/step", bodyFormData);
            console.log(res.data);
            setInput(res.data.output);
            bodyFormData.set("state", inputRef.current);
            if (res.data.isEnded !== true) {
                setTimeout(loop, 500);
            }
        };
        await loop();
    };

    const submit = async () => {
        const formData = new FormData();
        formData.append("userID", userId);
        formData.append("code", code);

        const res = await axios.post("/problems/" + problem.id + "/submit", formData);
        console.log(res);
    };

    return (
        <>
            <h2>{problem.title}</h2>
            <p>id: {problem.id}</p>
            <div className="my-8 flex justify-between justify-items-stretch">
                <div className="justify-self-start basis-1/2 flex flex-wrap">
                    <Description title={problem.title} md={problem.text} />
                    <div className="bg-[#fbf1e6] border-[#fca130] border-2 rounded m-4 p-4 basis-full flex flex-wrap">
                        <h3 className="w-full my-3">提出 / 実行</h3>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            id="source"
                            className="w-full h-8 my-3 font-mono"
                        />
                    </div>
                    <>
                        <button className="bg-green-500 w-1/4 h-8 my-3 mr-3 rounded" onClick={submit}>
                            提出
                        </button>
                        <button className="bg-blue-500 w-1/4 h-8 my-3 mr-3 rounded" onClick={excute}>
                            実行
                        </button>
                        <button className="bg-orange-500 w-1/4 h-8 my-3 mr-3 rounded" onClick={nextStep}>
                            ステップ
                        </button>
                    </>
                </div>
                <CodeEditor value={code} setValue={setCode} />
            </div>
            <ResultModal result={status} modalIsOpen={openModal} setIsOpen={setOpenModal} />
        </>
    );
};

export default Problem;
