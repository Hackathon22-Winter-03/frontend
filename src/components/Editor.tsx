import { useRemark } from "react-remark";
import Editor from "@monaco-editor/react";
import remarkGfm from 'https://esm.sh/remark-gfm@3';
import { ReactElement } from "react";

function Preview({ reactContent }:{reactContent:ReactElement|null}) {
    return <div className='whitespace-pre'>{reactContent}</div>;
}

export default function MDEditor({value,setValue}) {
    const [reactContent, setMarkdownSource] = useRemark();
    function handleEditorChange(value: string | void) {
        if (value) {
            console.log(value);
            setMarkdownSource(value);
            setValue(value)
        }
    }
    return (
        <div className="flex">
            <Editor
                defaultLanguage="markdown"
                height="100vh"
                width="50%"
                onChange={handleEditorChange}
                defaultValue=""
            />
            <Preview reactContent={reactContent} />
        </div>
    );
}
