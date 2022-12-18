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
        <div className="bg-[#e8f6f0] border-[#49cc90] border-2 rounded m-4 p-4 justify-self-end basis-1/2 min-h-screen">
            <Editor
                height="100vh"
                width="100%"
                defaultLanguage="JSON"
                onChange={handleEditorChange}
                defaultValue={value}
            />
        </div>
    );
};

export default CodeEditor;
