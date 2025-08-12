# Google OAuth Setup Guide

This guide will help you set up Google Sign-In functionality for your SoftDevSquad website.

## 🚀 Quick Start

**Current Status:**
- ✅ Google Sign-In button is ready
- ✅ OAuth integration code implemented
- ❌ Google OAuth credentials needed (setup required)

---

## 1. Create Google OAuth Credentials

### Step 1: Go to Google Cloud Console
1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account
3. Create a new project or select existing one

### Step 2: Enable Google+ API
1. Go to **APIs & Services** > **Library**
2. Search for "Google+ API" or "Google Sign-In API"
3. Click **Enable**

### Step 3: Create OAuth 2.0 Credentials
1. Go to **APIs & Services** > **Credentials**
2. Click **+ CREATE CREDENTIALS**
3. Select **OAuth client ID**
4. Choose **Web application**
5. Set **Name**: "SoftDevSquad Web App"

### Step 4: Configure OAuth Settings
**Authorized JavaScript origins:**
```
http://localhost:3000
http://127.0.0.1:3000
https://yourdomain.com (when deployed)
```

**Authorized redirect URIs:**
```
http://localhost:3000
https://yourdomain.com (when deployed)
```

### Step 5: Get Your Client ID
1. After creating, copy the **Client ID**
2. It will look like: `123456789-abcdefghijk.apps.googleusercontent.com`

---

## 2. Configure Environment Variables

Open your `.env` file and update:

```bash
# Google OAuth Configuration
REACT_APP_GOOGLE_CLIENT_ID=your_actual_client_id_here

# Replace 'your_actual_client_id_here' with your real Google Client ID
```

**Example:**
```bash
REACT_APP_GOOGLE_CLIENT_ID=123456789-abcdefghijk.apps.googleusercontent.com
```

---

## 3. Test Google Sign-In

1. **Restart your development server:**
   ```bash
   npm start
   ```

2. **Go to Sign-In page:**
   ```
   http://localhost:3000/signin
   ```

3. **Click "Continue with Google"**
   - Should open Google OAuth popup
   - User can select their Google account
   - Should show success message with user info

---

## 4. How It Works

### User Flow:
1. **User clicks** "Continue with Google"
2. **Google popup** opens for authentication
3. **User selects** their Google account
4. **Google returns** user profile information
5. **App receives** user data (name, email, profile picture)
6. **Success message** shows welcome with user name

### Technical Flow:
1. **Frontend** initiates OAuth with Google
2. **Google** handles authentication
3. **Google** returns ID token and user profile
4. **App** receives authenticated user data
5. **App** can send ID token to backend for verification (future enhancement)

---

## 5. What You Get

After successful Google Sign-In, you receive:

```javascript
{
  googleId: "user's Google ID",
  name: "John Doe",
  email: "john@example.com", 
  imageUrl: "https://profile-image-url",
  idToken: "jwt-token-for-backend-verification"
}
```

---

## 6. Security Notes

- **Client ID is public** - safe to include in frontend code
- **ID Token verification** should be done on your backend
- **Never expose Client Secret** in frontend code
- **HTTPS required** for production domains

---

## 7. Troubleshooting

### "Google Sign-In not configured" Alert
- Check if `REACT_APP_GOOGLE_CLIENT_ID` is set in `.env`
- Restart development server after adding environment variables

### "Google Auth not initialized" Error
- Check if Google Client ID is valid
- Verify Google+ API is enabled in Google Cloud Console

### OAuth Popup Blocked
- Check browser popup blocker settings
- Ensure authorized origins are correctly configured

### "Invalid Client ID" Error
- Verify Client ID is correct in `.env` file
- Check that the Client ID matches Google Cloud Console

---

## 8. Next Steps (Optional)

### Backend Integration:
1. **Send ID token to your backend**
2. **Verify token with Google**
3. **Create/update user in your database**
4. **Return your app's authentication token**

### User State Management:
1. **Store user info in React state/context**
2. **Persist authentication across page reloads**
3. **Add sign-out functionality**
4. **Protect routes based on authentication**

---

## 📞 Support

- **Google OAuth Documentation**: [developers.google.com/identity](https://developers.google.com/identity)
- **Google Cloud Console**: [console.cloud.google.com](https://console.cloud.google.com/)

---

**🎉 Once configured, users will be able to sign in with their Google accounts seamlessly!** 