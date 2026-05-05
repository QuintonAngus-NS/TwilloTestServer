import express from "express";
import cors from "cors";
import twilio from "twilio";

const app = express();
app.use(cors());
app.use(express.json());

// Replace these with your real Twilio values
const client = twilio(
  "USbd63d1b93f75001ec028a354f53c3348",
  "567b96fce0717ef0bc6bb5b01a66ae0a"
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

const PORT = proccess.env.PORT

app.listen(PORT, () => {
  console.log(`Backend running on ${PORT}`);
});
