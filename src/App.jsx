import { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(!submitted);
  };

  return (
    <div className="container">
      {!submitted ? (
        <div className="main-container">
          <div>
            <div className="form-content">
              <h1 className="title">Stay updated!</h1>
              <p className="subtitle">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              <div className="check-container">
                <div className="checkbox-item">
                  <img
                    src="/icon-success.svg"
                    alt="Checkmark Icon"
                    className="success-icon"
                  />
                  Product discovery and building what matters
                </div>
                <div className="checkbox-item">
                  <img
                    src="/icon-success.svg"
                    alt="Checkmark Icon"
                    className="success-icon"
                  />
                  Measuring to ensure updates are a success
                </div>
                <div className="checkbox-item">
                  <img
                    src="/icon-success.svg"
                    alt="Checkmark Icon"
                    className="success-icon"
                  />
                  And much more!
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email" className="email-label">
                  Email address:
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@hotmail.com"
                    className="email-input"
                  />
                </label>
                <button type="submit" className="submit-button">
                  Subscribe to monthly newsletter
                </button>
              </form>
            </div>
          </div>

          <img
            className="main-image"
            src="/illustration-sign-up-desktop.svg"
            alt="Illustration"
          />
        </div>
      ) : (
        <div className="success-container">
          <div className="success-content">
            <img
              src="/icon-success.svg"
              alt="Checkmark Icon"
              className="thanks-success-icon"
            />
            <h2 className="success-title">Thanks for subscribing!</h2>
            <p className="success-message">
              A confirmation email has been sent to{" "}
              <span className="success-email">{email}</span>. Please open it and
              click the button inside to confirm your subscription.
            </p>
          </div>
          <button>Dismiss message</button>
        </div>
      )}
    </div>
  );
}

export default App;
