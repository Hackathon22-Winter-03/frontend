import Editor from "@monaco-editor/react";
import { useState } from "react";
import remarkGemoji from "remark-gemoji";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

export default function MDEditor({ value, setValue }) {
    const [reactContent, setMarkdownSource] = useState<string>("");
    function handleEditorChange(value: string | void) {
        if (value) {
            console.log(value);
            setMarkdownSource(value);
            setValue(value);
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
                    {reactContent}
                </ReactMarkdown>
            </div>
        </div>
    );
}