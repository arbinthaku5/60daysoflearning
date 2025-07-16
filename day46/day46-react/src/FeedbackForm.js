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

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", fontFamily: "Arial" }}>
      <h2>Feedback Form</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </div>

        <div>
          <label>Comment:</label><br />
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
            style={{ width: "100%", padding: "8px" }}
          ></textarea>
        </div>

        <button type="submit" style={{ marginTop: "15px", padding: "10px 20px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;
