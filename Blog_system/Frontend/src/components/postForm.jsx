import {  useState } from "react";

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


    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit({
            title,
            body,
            category,
            author,
        });
    };
    return (
        <form className="post-form"
            onSubmit={handleSubmit}>

            <div className="form-group">
                <label htmlFor="author">
                    Your name
                </label>
                <input
                    id="author"
                    type="text"
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                    placeholder="Enter your name"
                    required />
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
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="category">
                    Category
                </label>
                <select
                    id="category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    required>
                    <option value="Academics">Academics</option>
                    <option value="Campus Life" >Campus Life</option>
                    <option value="Technology">Technology</option>
                    <option value="Career">Career</option>
                    <option value="Personal Growth">Personal Growth</option>
                    <option value="Internship">Internship</option>
                </select>

            </div>




            <div className="form-group">
                <label htmlFor="body">
                    Your experience
                </label>
                <textarea
                    id="body"
                    rows="9"
                    placeholder="Tell us about the journey...."
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                    required />
            </div>
            <button
                type="submit"
                >
                {submitText} →
            </button>
        </form>
    );
}
export default PostForm;