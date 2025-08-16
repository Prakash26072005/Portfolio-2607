import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    // ✅ Configure transporter
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // from Vercel env vars
        pass: process.env.MAIL_PASS, // Gmail app password
      },
    });

    // ✅ Send email
    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER,
      subject: `Portfolio Contact - ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    return res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ success: false, message: "Failed to send message" });
  }
}
