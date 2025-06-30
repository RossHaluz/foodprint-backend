const nodemailer = require("nodemailer");
const fs = require("fs");
const { Resend } = require("resend");

const sendMail = async (email, subject, tempDir, variables) => {
  try {
    const transparent = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const template = fs.readFileSync(tempDir, "utf-8");
    const html = await buildTemplate(template, variables);
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: subject,
      html: html,
    };

    await transparent.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sendeng email ", error);
      } else {
        console.log("Email sent: ", info.response);
      }
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error sending mail");
  }
};

const sendMessageOrder = async ({
  email,
  name,
  message,
  messagngerType,
  userName,
}) => {
  const resend = new Resend(process.env.API_KEY_RESEND);

  let userMailOptions = {
    from: "FoodPrint <info@foodprint.si>",
    to: email,
    subject: "Дякуємо за замовлення!",
    text: `Доброго дня, ${name}!\n\nДякуємо за ваш замовлення.\n\nМи якомога швидше зв'яжемося Вами.\n\nЗ повагою, FoodPrint Ukraine!`,
  };

  let adminMailOptions = {
    from: "FoodPrint <info@foodprint.si>",
    to: process.env.SMTP_EMAIL,
    subject: "Нове замовлення",
    text: `Ви отримали нове замовлення.\n\nДеталі замовлення:\n\nІм'я: ${name}\n\nТип месенджера: ${messagngerType}\n\nІм'я користувача: ${userName}\n\nКоментарії:\n\n${message}`,
  };

  try {
    await resend.emails.send(userMailOptions);
    await resend.emails.send(adminMailOptions);
    console.log("Листи успішно надіслані");
  } catch (error) {
    console.error("❌ Помилка при надсиланні пошти:", error);
  }
};

const sendMessageFeedback = async ({
  name,
  email,
  message,
  messenger,
  typeMessanger,
  smtp_email,
  smtp_password,
}) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: smtp_email,
      pass: smtp_password,
    },
  });

  let userMailOptions = {
    from: smtp_email,
    to: email,
    subject: "Дякуємо за ваше звернення!",
    text: `Доброго дня, ${name}!\n\nДякуємо за ваш звернення. Ми якомога швидше зв'яжемося Вами.`,
  };

  let adminMailOptions = {
    from: smtp_email,
    to: smtp_email,
    subject: "Новий відгук від користувача",
    text: `Ви отримали новий запит від ${name}\nEmail: ${email}\nТип месенджера: ${typeMessanger}\nНік: ${messenger}\nОпис:\n${message}`,
  };

  // Відправка листа користувачу
  await transporter.sendMail(userMailOptions);

  // Відправка листа адміністратору
  await transporter.sendMail(adminMailOptions);
};

const buildTemplate = async (template, variables) => {
  let renderTemplate = template;
  for (const key in variables) {
    if (variables.hasOwnProperty(key)) {
      const regex = new RegExp(`{{\\s*${key}\\s*}}`, "g");
      renderTemplate = renderTemplate.replace(regex, variables[key]);
    }
  }

  return renderTemplate;
};

module.exports = {
  sendMail,
  sendMessageOrder,
  sendMessageFeedback,
};
