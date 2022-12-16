import Editor from "@monaco-editor/react";
export default function CodeEditor() {
    function handleEditorChange(value: string | void) {
        if (value) {
            console.log(value);
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
