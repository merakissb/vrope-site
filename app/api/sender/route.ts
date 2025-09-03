import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, phone, message } = await req.json();

    // Configuración del transporter de Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GOOGLE_USER, // tu email
        pass: process.env.GOOGLE_APP_PASSWORD, // app password
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.GOOGLE_USER, // donde quieres recibir los emails
      subject: `"${subject} - Mensaje Sitio Web"`,
      text: `Message from ${name} (${email}, ${phone}):\n\n${message}`,
      html: `<p>Message from <strong>${name}</strong> (${email}, ${phone}):</p><p>${message}</p>`,
    });

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } catch (error: any) {
    console.error("Email error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
