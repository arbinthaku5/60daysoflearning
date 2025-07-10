// src/App.js
import React, { useState, useEffect } from "react";

const App = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.allorigins.win/raw?url=https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data);
    } catch (err) {
      setQuote({ content: "Failed to fetch quote", author: "System" });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <div style={styles.container}>
      <h2>Random Quote Generator</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={styles.quoteBox}>
          <p style={styles.text}>"{quote.content}"</p>
          <p style={styles.author}>— {quote.author}</p>
        </div>
      )}
      <button onClick={handleNewQuote} style={styles.button}>New Quote</button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "80px",
    padding: "20px",
    fontFamily: "Arial"
  },
  quoteBox: {
    backgroundColor: "#f1f1f1",
    padding: "20px",
    borderRadius: "8px",
    margin: "20px auto",
    maxWidth: "500px"
  },
  text: {
    fontSize: "1.5rem",
    fontStyle: "italic"
  },
  author: {
    marginTop: "10px",
    fontWeight: "bold"
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer"
  }
};

export default App;
