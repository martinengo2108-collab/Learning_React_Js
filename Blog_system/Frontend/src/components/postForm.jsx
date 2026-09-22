import { useEffect, useState } from "react";

function PostForm({

    initialData = {},

    onSubmit,
    submitText = "Publish story"
}) {
    const [title, setTitle] = useState(initialData.title || "");

    const [body, setBody] = useState(initialData.body || "");

    const [category, setCategory] = useState(
        initialData.category || "Academics"
    );
    const [author, setAuthor] = useState(
        initialData.author || ""
    );

    useEffect(() => {

        setTitle(initialData.title || "");
        setBody(initialData.body || "");
        setCategory(initialData.category || "Academics");
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!title.trim() || !body.trim()) {
            setError("Please complete the title and story.");

            return;
        }
        setError("");
        onSubmit({
            title: title.trim(),

            body: body.trim(),
            category,
            userId: initialData.userId || 1,
        });
    };
    return (
        <form className="post-form"
            onSubmit={handleSubmit}>
            {error && (
                <div className="form-error">
                    {error}
                </div>
            )}
            <div className="form-group">
                <label htmlFor="category">
                    Category
                </label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}>
                    <option value="Academics">Academics</option>
                    <option value="Campus Life" >Campus Life</option>
                    <option value="Technology">Technology</option>
                    <option value="Career">Career</option>
                    <option value="Personal Growth">Personal Growth</option>
                    <option value="Internship">Internship</option>
                </select>

            </div>

            <div className="form-group">
                <label htmlFor="title">
                    Story title
                </label>
                <input
                    id="title"
                    type="text"
                    placeholder="Give your story a title...."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="body">
                    Your experience
                </label>
                <textarea
                    id="body"
                    rows="10"
                    placeholder="Tell us about the journey...."
                    value={body}
                    onChange={(e) => setBody(e.target.value)} />
            </div>
            <button
                type="submit"
                className="submit-post">
                {submitText} →
            </button>
        </form>
    );
}
export default PostForm;