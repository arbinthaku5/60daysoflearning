import React, { useState, useEffect } from "react";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  // Load saved feedback on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("feedback")) || [];
    setFeedbackList(saved);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !comment.trim()) {
      setError("All fields are required");
      setSuccess("");
      return;
    }

    const newFeedback = { name, comment };
    const updatedList = [...feedbackList, newFeedback];

    // Save to localStorage
    localStorage.setItem("feedback", JSON.stringify(updatedList));
    setFeedbackList(updatedList);

    // Clear form and show success
    setName("");
    setComment("");
    setError("");
    setSuccess("Feedback submitted and saved!");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", fontFamily: "Arial" }}>
      <h2>Feedback Form</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

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

      <hr />
      <h3>Previous Feedback</h3>
      {feedbackList.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        <ul>
          {feedbackList.map((fb, idx) => (
            <li key={idx}>
              <strong>{fb.name}</strong>: {fb.comment}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FeedbackForm;
