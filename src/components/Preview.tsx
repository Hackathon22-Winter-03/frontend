import remarkGemoji from "remark-gemoji";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export interface PreviewProp {
    value: string;
}

const Preview = ({ value }: PreviewProp) => {
    return (
        <ReactMarkdown
            className="whitespace-pre inset-10"
            remarkPlugins={[remarkMath, remarkGemoji, remarkGfm, rehypeHighlight]}
            rehypePlugins={[rehypeKatex]}
        >
            {value}
        </ReactMarkdown>
    );
};

export default Preview;
