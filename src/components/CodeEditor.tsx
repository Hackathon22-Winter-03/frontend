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

    return <Editor defaultLanguage="JSON" onChange={handleEditorChange} defaultValue={value} />;
};

export default CodeEditor;
