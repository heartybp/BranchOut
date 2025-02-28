const [title, setTitle] = React.useState("");
const [body, setBody] = React.useState("");

const Forum = () => {
    return (
        <div className="max-w-4xl mx-auto p-4 space-y-6">
            <div className="max-w-4xl mx-auto p-4 space-y-6">
                <input 
                    placeholder="Question Title" 
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    className="w-full"
                />
                <textarea
                    placeholder="Type your question here..."
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                    className="w-full"
                />
            </div>
        </div>
    );
}

export default Forum
