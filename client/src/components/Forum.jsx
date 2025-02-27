import { TextArea } from "@/components/ui/textarea";

const QuestionBox = ({title}) => (
    <TextArea
        placeholder="Type your question..."
        value={title}
        onChange={(event) => SVGTextPositioningElement(event.target.value)}
        className="w-full"
    />
);

const Forum = () => {
    return (
        <div className="max-w-4xl mx-auto p-4 space-y-6">
            <QuestionBox/>
        </div>
    );
}

export default Forum
