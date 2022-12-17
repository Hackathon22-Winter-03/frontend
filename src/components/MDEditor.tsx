import Editor from "@monaco-editor/react";
import remarkGemoji from "remark-gemoji";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

export interface MDEditorProp {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function MDEditor({ value, setValue }: MDEditorProp) {
    function handleEditorChange(newValue: string | undefined) {
        if (newValue !== undefined) {
            console.log(newValue);
            setValue(newValue);
        }
    }

    return (
        <div className="flex">
            <Editor
                defaultLanguage="markdown"
                height="100vh"
                width="50%"
                onChange={handleEditorChange}
                defaultValue={value}
                options={{
                    padding: {
                        top: 5,
                    },
                }}
            />
            <div className="px-5 py-5">
                <ReactMarkdown
                    className="whitespace-pre inset-10"
                    remarkPlugins={[remarkGemoji, remarkGfm, rehypeHighlight]}
                >
                    {value}
                </ReactMarkdown>
            </div>
        </div>
    );
}
