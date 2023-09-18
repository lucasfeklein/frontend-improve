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

          <div>
            <p>Product discovery and building what matters</p>
            <p>Measuring to ensure updates are a success</p>
            <p>And much more!</p>
          </div>

          <input type="email" style={{ width: "100%" }} />
          <button style={{ width: "100%" }}>
            Subscribe to monthly newsletter
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
