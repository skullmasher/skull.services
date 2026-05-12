import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()

  const validKeys = ['email', 'message']
  const formData = await readFormData(event)
  const formDataKeys = Array.from(formData.keys())

  if (formDataKeys.length !== 2) {
    return { error: true }
  }

  // check if formdata has the right keys
  if (validKeys.every(key => formDataKeys.includes(key)) === false) {
    return { error: true }
  }

  const email = formData.get('email')
  const message = formData.get('message')

  if (!email && !message) {
    return { error: true }
  }

  const transporter = nodemailer.createTransport({
    host: 'skullmasher.io',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: runtimeConfig.smtpUser,
      pass: runtimeConfig.smtpPass,
    },
  })

  await transporter.sendMail({
    from: '"Contact Skullmasher.io" <no-reply@skullmasher.io>',
    to: 'florian@skullmasher.io',
    subject: 'Contact from skullmasher.io',
    text: `${email} \n ${message}`, // plain‑text body
    html: `<p>${email}</p><p>${message}</p>`, // HTML body
  })

  return { error: false }
})
