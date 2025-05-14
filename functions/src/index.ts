import * as functions from "firebase-functions/v1";
import {DocumentSnapshot} from "firebase-functions/v1/firestore";
// import { EventContext } from "firebase-functions/lib/cloud-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";
// import cors from "cors";
// const corsLib = require("cors");
// const admin = require("firebase-admin");

admin.initializeApp();
// allow  cross- origin
// const corsHandler = cors({origin: true});

// use gamil(email or app password)

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rs682688@gmail.com",
    pass: "mvgp psoc kegn rqyr",
  },
});

export const sendContactEmail = functions.firestore
  .document("contacts/{docId}")
  .onCreate((snap:DocumentSnapshot, context) => {
    const data = snap.data();

    const mailOptions = {
      from: "rs682688@gmail.com",
      to: "rs682688@gmail.com",
      subject: "Contact Form Submission alert from Portfolio",
      html: `
        <h3>New Message</h3>
        <p><strong>Name:</strong> ${data?.name}</p>
        <p><strong>Email:</strong> ${data?.email}</p>
        <p><strong>Phone:</strong> ${data?.phone}</p>
        <p><strong>Message:</strong><br/> ${data?.message}</p>
      `,
    };

    return transporter.sendMail(mailOptions);
  });


