function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "30px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
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
          <label>
            Email adress:
            <input type="email" style={{ width: "100%" }} />
          </label>
          <button style={{ width: "100%" }}>
            Subscribe to monthly newsletter
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
