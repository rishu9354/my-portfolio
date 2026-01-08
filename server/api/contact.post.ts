import { getDB } from "../utils/mongodb";
import { transporter } from "../utils/mailer";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    if (!body) {
        throw createError({
            statusCode: 400,
            statusMessage: "payload is missing"
        });
    }
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
        throw createError({
            statusCode: 400,
            statusMessage: "All fields required!"
        });
    }

    try {
        // save to db
        const db = await getDB();
        await db.collection('contacts').insertOne({
            name,
            email,
            phone,
            message,
            createdAt: new Date()
        })

        // send email
        await transporter.sendMail({
            from: process.env.MAIL_USER,
            to: 'rs0530698@gmail.com',
            subject: `Query From Portfolio Contact: ${name}`,
            text: `You received a message from ${name} (${email}): \n\n ${message}`,
            // Recommended: add html for better formatting
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Phone:</strong> ${phone}</p>
                   <p><strong>Message:</strong> ${message}</p>`
        })
        return { success: true, message: "Message sent successfully.." }

    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: "Internal Server Error. Please try again later.",
        });
    }
});