import Editor from "@monaco-editor/react";

export interface CodeEditorProp {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const CodeEditor = ({ value, setValue }: CodeEditorProp) => {
    function handleEditorChange(newValue: string | undefined) {
        if (newValue !== undefined) {
            setValue(newValue);
        }
    }

    return (
        <div className="flex">
            <Editor
                defaultLanguage="JSON"
                height="100vh"
                onChange={handleEditorChange}
                defaultValue={value}
                options={{
                    padding: {
                        top: 5,
                    },
                }}
            />
        </div>
    );
};

export default CodeEditor;
