import React from "react";
import ReactDOM from "react-dom/client";
import React, { useState } from "react";
function EmailForm() {
  const [receiverEmail, setReceiverEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email sent:", { receiverEmail, subject, message });
    setReceiverEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="container">
      <h2>Email Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="receiverEmail">Receiver Email:</label>
          <input
            type="email"
            id="receiverEmail"
            name="receiverEmail"
            value={receiverEmail}
            onChange={(e) => setReceiverEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<EmailForm />);
