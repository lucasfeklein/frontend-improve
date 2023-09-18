import { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(!submitted);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!submitted ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "30px",
            gap: "30px",
            maxWidth: "830px",
            height: "550px",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "30px",
              }}
            >
              <h1 style={{ color: "hsl(234, 29%, 20%)", fontSize: "55px" }}>
                Stay updated!
              </h1>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div style={{ display: "flex", gap: "15px" }}>
                  <img src="/icon-success.svg" style={{ width: "20px" }} />
                  Product discovery and building what matters
                </div>
                <div style={{ display: "flex", gap: "15px" }}>
                  <img src="/icon-success.svg" style={{ width: "20px" }} />
                  Measuring to ensure updates are a success
                </div>
                <div style={{ display: "flex", gap: "15px" }}>
                  <img src="/icon-success.svg" style={{ width: "20px" }} />
                  And much more!
                </div>
              </div>
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <label
                  style={{
                    fontWeight: "700",
                    fontSize: "12px",
                    marginTop: "10px",
                  }}
                >
                  Email adress:
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@hotmail.com"
                    style={{
                      height: "50px",
                      width: "100%",
                      marginTop: "7px",
                      borderRadius: "7px",
                      paddingLeft: "20px",
                      border: "1px solid black",
                    }}
                  />
                </label>
                <button>Subscribe to monthly newsletter</button>
              </form>
            </div>
          </div>

          <img
            src="/illustration-sign-up-desktop.svg"
            style={{ height: "100%" }}
          />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            backgroundColor: "white",
            padding: "30px 40px",
            borderRadius: "30px",
            width: "400px",
          }}
        >
          <img style={{ width: "50px" }} src="/icon-success.svg" />
          <h2
            style={{
              color: "hsl(234, 29%, 20%)",
              fontSize: "55px",
              lineHeight: "55px",
            }}
          >
            Thanks for subscribing!
          </h2>
          <p>
            A confirmation email has been sent to{" "}
            <span style={{ fontWeight: "bold" }}>{email}</span>. Please open it
            and click the button inside to confirm your subscription.
          </p>
          <button>Dismiss message</button>
        </div>
      )}
    </div>
  );
}

export default App;
