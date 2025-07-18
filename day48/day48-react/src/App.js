import React, { useState, useEffect } from "react";
import "./styles.css";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: ""
  });

  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("feedbacks");
    if (saved) {
      setFeedbackList(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedFeedbackList = [...feedbackList, formData];
    setFeedbackList(updatedFeedbackList);
    localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbackList));

    alert("Feedback Submitted!");

    // Reset form
    setFormData({ name: "", email: "", feedback: "" });
    setStep(1);
  };

  return (
    <div className="form-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="buttons">
              <button type="button" onClick={prevStep}>
                Back
              </button>
              <button type="button" onClick={nextStep}>
                Next
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <label>Feedback:</label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
            />
            <div className="buttons">
              <button type="button" onClick={prevStep}>
                Back
              </button>
              <button type="submit">Submit</button>
            </div>
          </>
        )}
      </form>

      {/* Feedback list */}
      <div className="feedback-list">
        <h3>Previous Feedbacks</h3>
        {feedbackList.length === 0 ? (
          <p>No feedback yet.</p>
        ) : (
          <ul>
            {feedbackList.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong> ({item.email}): {item.feedback}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
