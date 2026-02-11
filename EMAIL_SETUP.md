# Email setup (contact form & newsletter)

The contact form and newsletter use **Gmail** via Nodemailer. Follow these steps so emails send correctly.

## 1. Create a Gmail App Password

1. Use a **Google account** (e.g. mohameddhiaarfa@gmail.com).
2. Turn on **2-Step Verification** if it’s not already:  
   [https://myaccount.google.com/security](https://myaccount.google.com/security)
3. Create an **App Password**:
   - Go to [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Select app: **Mail**
   - Select device: **Other** → name it e.g. "Portfolio site"
   - Click **Generate**
   - Copy the **16-character password** (no spaces), e.g. `mhffhmrycfugekfb`

## 2. Set environment variables

1. In the project root, create or edit **`.env.local`** (this file is git-ignored).
2. Add (replace with your real values):

```env
GMAIL_USER=your-gmail@gmail.com
GMAIL_APP_PASSWORD=the-16-char-app-password-no-spaces
```

- Use the **full Gmail address** for `GMAIL_USER`.
- Use **only** the 16-character App Password for `GMAIL_APP_PASSWORD` (no spaces, no quotes).
- Do **not** use your normal Gmail password.

## 3. Restart the dev server

After changing `.env.local`, restart Next.js:

```bash
npm run dev
```

## 4. If it still fails

- Check the **terminal** where `npm run dev` is running for error messages.
- Confirm **2-Step Verification** is on and you’re using an **App Password**, not the regular password.
- Try logging in at [https://accounts.google.com](https://accounts.google.com) with the same account to ensure it’s not locked.
- Some hosts (e.g. Vercel) need these variables set in **Project → Settings → Environment variables** for production.

## Optional: use another provider

If Gmail keeps blocking or failing, you can switch to:

- **Resend** – [resend.com](https://resend.com) – simple API, good for transactional email
- **Formspree** – [formspree.io](https://formspree.io) – form backend that emails you without a server

You’d then need to replace the code in `app/api/contact/route.ts` with the provider’s API.
