import Editor from "@monaco-editor/react";
export default function CodeEditor({ value, setValue }) {
    function handleEditorChange(value: string | void) {
        if (value) {
            setValue(value);
        }
    }
    return (
        <div className="flex">
            <Editor
                defaultLanguage="JSON"
                height="100vh"
                onChange={handleEditorChange}
                defaultValue=""
                options={{
                    padding: {
                        top: 5,
                    },
                }}
            />
        </div>
    );
}
