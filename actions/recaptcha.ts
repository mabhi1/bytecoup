"use server";

export async function verifyRecaptcha(captcha: string | null) {
  const data = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`
  );
  const res = await data.json();
  return res.success;
}
