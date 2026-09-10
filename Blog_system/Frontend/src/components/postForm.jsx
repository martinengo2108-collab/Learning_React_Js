import { useEffect, useState } from "react";

function postForm({

    initialData = {},

    onSubmit,
    submitText = "Publish story"
}) {
    const { title, setTitle } = useState(initialData.title || "");

    const { body, setBody } = useState(initialData.body || "");

    const [category, setCategory] = useState(
        initialData.category || "Academics"
    );
    const [error, setError] = useState("");

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
    return(
        <form className="post-form"
        onSubmit={handleSubmit}>
            {error&&(
                <div className="form-error">
                    {error}
                </div>
            )}
            <div className="form-group">
                <label>
                    Category
                </label>
                <select name="" id=""></select>

            </div>
        </form>
    )
}