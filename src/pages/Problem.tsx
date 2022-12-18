import { useState } from "react";
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
    <div className="bg-yellow-200 rounded m-4 p-4 basis-full">
        <h2 className="mb-5">{title}</h2>
        <Preview value={md} />
    </div>
);
function Submission({
    openModal,
    setOpenModal,
    value,
    setValue,
}: {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}) {
    const [source, setSource] = useState("");

    return (
        <div className="bg-yellow-200 rounded m-4 p-4 basis-full flex flex-wrap">
            <h3 className="w-full my-3">提出 / 実行</h3>
            <input
                type="text"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                id="source"
                className="w-full h-8 my-3 font-mono"
            />

            <CodeEditor value={value} setValue={setValue} />
        </div>
    );
}

const Problem = () => {
    const { problem, userId } = useLoaderData() as { problem: ProblemModel; userId: string };
    const [code, setCode] = useState("");
    const [input, setInput] = useState("");
    const [openModal, setOpenModal] = useState(false);
    function nextStep() {
        const bodyFormData = new FormData();
        bodyFormData.append("code", code);
        bodyFormData.append("state", input);
        bodyFormData.append("problemID", problem.id);
        axios.post("/step", bodyFormData).then((res) => {
            setInput(res.data.nextStatus);
            if (res.data.isEnded == true) {
                setOpenModal(true);
                /**いいかんじに あたまが動かない*/
            }
        });
    }

    const excute = async () => {
        const bodyFormData = new FormData();
        bodyFormData.append("id", userId);
        bodyFormData.append("code", code);
        bodyFormData.append("state", input);
        bodyFormData.append("problemID", problem.id);
        const loop = async () => {
            const step = await axios.post("/step", bodyFormData);
            console.log(step);
            if (step.data !== "") {
                setTimeout(loop, 3000);
            }
        };
        await loop();
    };

    return (
        <>
            <h2>{problem.title}</h2>
            <p>id: {problem.id}</p>
            <div className="my-8 flex justify-between justify-items-stretch">
                <div className="justify-self-start basis-1/2 flex flex-wrap">
                    <Description title={problem.title} md={problem.text} />
                    <Submission openModal={openModal} setOpenModal={setOpenModal} value={input} setValue={setInput} />
                    <>
                        <button
                            className="bg-green-500 w-1/4 h-8 my-3 mr-3 rounded"
                            onClick={() => {
                                setOpenModal(true);
                            }}
                        >
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
