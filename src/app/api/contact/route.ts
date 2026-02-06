import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, website, message } = await req.json();

    if (!name || !email || !website || !message) {
      return Response.json({ error: "All fields are required" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.OWNER_EMAIL as string,
      subject: `New SEO Lead from ${name}`,
      html: `
        <h2>New SEO Lead</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Website:</b> ${website}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
