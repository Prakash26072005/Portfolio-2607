// import express from "express";
// import nodemailer from "nodemailer";
// import cors from "cors";

// const app = express();
// app.use(cors());
// app.use(express.json());

// // POST route for sending email
// app.post("/send", async (req, res) => {
//   const { name, email, message } = req.body;

//   try {
//     let transporter = nodemailer.createTransport({
//       service: "gmail", // Or Outlook, Yahoo, etc.
//       auth: {
//         user: "pm2466599@gmail.com", // Your Gmail
//         pass: "saheerlfshlcksfa",   // Gmail App Password
//       },
//     });

//     await transporter.sendMail({
//       from: email,
//       to: "pm2466599@gmail.com", // Your receiving email
//       subject: `New message from ${name}`,
//       html: `
//         <h2>Contact Form Submission</h2>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Message:</b><br>${message}</p>
//       `,
//     });

//     res.status(200).json({ success: true, message: "Message sent successfully!" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: "Failed to send message" });
//   }
// });

// app.listen(5000, () => {
//   console.log("✅ Server running on http://localhost:5000");
// });

// import express from "express";
// import nodemailer from "nodemailer";
// import cors from "cors";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// app.use(cors());
// app.use(express.json());

// // ✅ Serve React frontend in production
// app.use(express.static(path.join(__dirname, "../frontend/build")));

// // POST route for sending email
// app.post("/send", async (req, res) => {
//   const { name, email, message } = req.body;

//   try {
//     let transporter = nodemailer.createTransport({
//       service: "gmail", // Or Outlook, Yahoo, etc.
//       auth: {
//         user: "pm2466599@gmail.com", // Your Gmail
//         pass: "saheerlfshlcksfa",    // Gmail App Password
//       },
//     });

//     await transporter.sendMail({
//       from: email,
//       to: "pm2466599@gmail.com", // Your receiving email
//       subject: `New message from ${name}`,
//       html: `
//         <h2>Contact Form Submission</h2>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Message:</b><br>${message}</p>
//       `,
//     });

//     res.status(200).json({ success: true, message: "Message sent successfully!" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: "Failed to send message" });
//   }
// });

// // ✅ Catch-all route to serve React index.html
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });








import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// __dirname replacement in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Serve Vite frontend in production
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// ✅ POST route for sending email
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "pm2466599@gmail.com", // Your Gmail
        pass: "saheerlfshlcksfa",    // Gmail App Password
      },
    });

    await transporter.sendMail({
      from: email,
      to: "pm2466599@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <h2>Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br>${message}</p>
      `,
    });

    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
});

// ✅ Catch-all route to serve SPA index.html
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
