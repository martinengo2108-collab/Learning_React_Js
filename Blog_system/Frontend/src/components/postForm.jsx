import { useEffect, useState } from "react";

function postForm({

    initialData = {},

    onSubmit,
    submitText = "Publish story"
}) {
    const { title, setTitle } = useState(initialData.title || "");

    const { body, setBody } = useState(initialData.body || "");

    const[category,setCategory]=useState(
        initialData.category||"Academics"
    );
}