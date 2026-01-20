const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("BharatSeva Connect Backend Running");
});

app.listen(10000, () => {
  console.log("Server started");
});
// -------- AUTH APIs --------

// Send OTP (fake)
app.post("/auth/send-otp", (req, res) => {
  const { mobile } = req.body;

  if (!mobile) {
    return res.status(400).json({ error: "Mobile number required" });
  }

  res.json({
    success: true,
    message: "OTP sent successfully",
    otp: "1234"
  });
});

// Verify OTP (fake)
app.post("/auth/verify-otp", (req, res) => {
  const { mobile, otp } = req.body;

  if (otp !== "1234") {
    return res.status(401).json({ error: "Invalid OTP" });
  }

  res.json({
    success: true,
    token: "fake-jwt-token",
    role: "client"
  });
});
