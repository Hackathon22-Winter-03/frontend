import { useRemark } from "react-remark";
import Editor from "@monaco-editor/react";

function ExampleComponent({ reactContent }) {
    return <>{reactContent}</>;
}
export default function MDEditor() {
    const [reactContent, setMarkdownSource] = useRemark();
    function handleEditorChange(value: string | void) {
        if (value) {
            setMarkdownSource(value);
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
            <ExampleComponent reactContent={reactContent} />
        </div>
    );
}
