import express from "express";
import cors from "cors";
import twilio from "twilio";

const app = express();
app.use(cors());
app.use(express.json());

// Replace these with your real Twilio values
const client = twilio(
  process.env.SID,
  process.env.SECRET
);

app.post("/send-test", async (req, res) => {
  try {
    const msg = await client.messages.create({
      body: "Test message from your local server!",
      from: "+18312851357",
      to: "+447701095089"
    });

    res.json({ success: true, sid: msg.sid });
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Backend running on ${PORT}`);
});
