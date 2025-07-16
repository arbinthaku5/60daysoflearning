import React, { useState } from "react";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !comment.trim()) {
      setError("All fields are required");
      return;
    }

    setError("");
    console.log("Form submitted:");
    console.log("Name:", name);
    console.log("Comment:", comment);

    setName("");
    setComment("");
  };

}

export default FeedbackForm;
