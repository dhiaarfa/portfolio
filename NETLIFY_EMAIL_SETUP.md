# Netlify Email Setup - Complete Guide

## Problem
Email sending fails on Netlify even after adding environment variables.

## Root Cause
Netlify Functions (serverless) have different runtime behavior than local development. The email API route needs proper configuration.

---

## Step-by-Step Solution

### 1. Add Environment Variables in Netlify Dashboard

1. Go to your Netlify site dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Add these **exact** variables:

```
GMAIL_USER = mohameddhiaarfa@gmail.com
GMAIL_APP_PASSWORD = jtnw zclo pzrh ftfa
CONTACT_RECIPIENT = mohameddhiaarfa@gmail.com
```

**Important:**
- **NO spaces** in variable names
- **NO quotes** around values
- Copy the app password **exactly** as provided (with spaces)

### 2. Verify Netlify Function Configuration

Your `app/api/contact/route.ts` should already be correct, but verify:

- ✅ Uses `nodemailer`
- ✅ Reads from `process.env.GMAIL_USER` and `process.env.GMAIL_APP_PASSWORD`
- ✅ Trims whitespace from env variables

### 3. Deploy and Test

1. **Commit and push** your code to GitHub
2. **Wait for Netlify to rebuild** (check Deploys tab)
3. **Test the contact form** on your live site

### 4. Debugging if Still Fails

#### Check Netlify Function Logs:

1. Go to **Site settings** → **Functions**
2. Click on your function (should be `api-contact`)
3. Check **Logs** tab for errors

#### Common Issues:

**Issue 1: Environment variables not loaded**
- **Solution:** Redeploy after adding env vars
- **Check:** Go to Functions → View function → Check if env vars are listed

**Issue 2: Gmail App Password format**
- **Solution:** Ensure password is exactly: `jtnw zclo pzrh ftfa` (with spaces)
- **Alternative:** Try without spaces: `jtnwzclopzrhftfa`

**Issue 3: Function timeout**
- **Solution:** Netlify Functions have 10s timeout (free tier)
- **Check:** Your email sending should complete in < 5 seconds

**Issue 4: CORS/Headers**
- **Solution:** Ensure your API route returns proper headers:
```typescript
return NextResponse.json({ success: true }, { status: 200 })
```

### 5. Alternative: Use Netlify Forms (Easier Option)

If email API continues to fail, use Netlify Forms:

1. **Modify your contact form** to use Netlify's built-in form handling
2. **Add `netlify` attribute** to form:
```tsx
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
```

3. **Netlify will automatically:**
   - Receive form submissions
   - Send email notifications
   - Store submissions in dashboard

4. **No serverless function needed!**

### 6. Verify Email Settings

**Gmail App Password Setup:**
1. Go to Google Account → Security
2. Enable 2-Step Verification
3. Go to App Passwords
4. Generate password for "Mail"
5. Copy the 16-character password (with spaces)

**Test Email Sending Locally:**
```bash
# Test your API route locally
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
```

---

## Quick Checklist

- [ ] Environment variables added in Netlify dashboard
- [ ] Variables have correct names (no typos)
- [ ] Gmail App Password is correct (with spaces)
- [ ] Site redeployed after adding env vars
- [ ] Checked Function logs for errors
- [ ] Tested contact form on live site

---

## Expected Result

After setup:
- ✅ Contact form submissions work
- ✅ Emails arrive at `mohameddhiaarfa@gmail.com`
- ✅ No errors in Netlify Function logs
- ✅ Response time < 2 seconds

---

## Still Having Issues?

1. **Check Netlify Function logs** (most important!)
2. **Verify environment variables** are actually set (check Functions → View function)
3. **Test locally first** to ensure code works
4. **Consider Netlify Forms** as fallback option

---

**Last Updated:** February 10, 2026
