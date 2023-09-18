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
          <h1 style={{ color: "hsl(234, 29%, 20%)" }}>Stay updated!</h1>
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
          <label
            style={{ fontWeight: "700", fontSize: "12px", marginTop: "10px" }}
          >
            Email adress:
            <input
              type="email"
              placeholder="example@hotmail.com"
              style={{
                height: "40px",
                width: "100%",
                marginTop: "7px",
                borderRadius: "7px",
                paddingLeft: "20px",
                border: "1px solid black",
              }}
            />
          </label>
          <button
            style={{
              width: "100%",
              height: "40px",
              borderRadius: "7px",
              border: "none",
              fontWeight: "bold",
              color: "white",
              backgroundColor: "hsl(234, 29%, 20%)",
              cursor: "pointer",
            }}
          >
            Subscribe to monthly newsletter
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
