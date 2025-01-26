export declare const templateMail: (options: {
    email: string;
    subject: string;
    name: string;
    password: string;
    link: string;
}) => Promise<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
