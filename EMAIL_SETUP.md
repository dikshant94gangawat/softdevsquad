# Email Setup Guide for Demo Booking

This guide will help you set up email notifications for demo bookings using EmailJS.

## Quick Start

**Both the demo booking form and contact form are currently working but emails are not configured yet.** Users can still submit forms and will receive a message that your team will contact them directly.

To enable automatic emails for both forms, follow the steps below:

## Current Status
- ✅ Demo booking form works
- ✅ Contact form works
- ✅ Form validation and submission
- ✅ Success page and user feedback
- ❌ Email notifications (needs setup for both forms)

---

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Copy the **Service ID** (you'll need this later)

## 3. Create Email Templates

You need to create **four email templates** (2 for demo bookings + 2 for contact form):

### Template 1: User Confirmation Email
- **Purpose**: Sent to the user who booked the demo
- **Template Name**: "Demo Booking Confirmation"
- **Variables to include**:
  - `{{user_name}}` - User's full name
  - `{{user_email}}` - User's email
  - `{{company_name}}` - User's company
  - `{{preferred_date}}` - Demo date
  - `{{preferred_time}}` - Demo time
  - `{{services}}` - Selected services

**Sample Template:**
```
Subject: Demo Booking Confirmation - SoftDevSquad

Hi {{user_name}},

Thank you for booking a demo with SoftDevSquad!

Demo Details:
- Date: {{preferred_date}}
- Time: {{preferred_time}}
- Services: {{services}}
- Company: {{company_name}}

We'll contact you 24 hours before the demo to confirm and provide meeting details.

Best regards,
SoftDevSquad Team
```

### Template 2: Company Notification Email
- **Purpose**: Sent to softdevsquad@gmail.com when someone books a demo
- **Template Name**: "New Demo Booking Notification"
- **Variables to include**: All the same variables as above

**Sample Template:**
```
Subject: New Demo Booking - {{user_name}} from {{company_name}}

New demo booking received:

Client Details:
- Name: {{user_name}}
- Email: {{user_email}}
- Phone: {{user_phone}}
- Company: {{company_name}}
- Role: {{job_role}}

Demo Details:
- Preferred Date: {{preferred_date}}
- Preferred Time: {{preferred_time}}
- Services Interested: {{services}}
- Additional Message: {{message}}

Please follow up with the client.
```

### Template 3: Contact Form User Confirmation
- **Purpose**: Sent to users who submit the contact form
- **Template Name**: "Contact Form Confirmation"
- **Variables to include**:
  - `{{user_name}}` - User's full name
  - `{{user_email}}` - User's email
  - `{{subject}}` - Contact subject
  - `{{message}}` - User's message
  - `{{services}}` - Selected services of interest
  - `{{preferred_date}}` - Preferred meeting date
  - `{{preferred_time}}` - Preferred meeting time

**Sample Template:**
```
Subject: Thank you for contacting SoftDevSquad

Hi {{user_name}},

Thank you for reaching out to SoftDevSquad!

We have received your message:
Subject: {{subject}}
Message: {{message}}

{{#if services}}
Services of Interest: {{services}}
{{/if}}
{{#if preferred_date}}
Preferred Meeting Date: {{preferred_date}}
{{/if}}
{{#if preferred_time}}
Preferred Meeting Time: {{preferred_time}}
{{/if}}

Our team will review your inquiry and get back to you within 24 hours.

Best regards,
SoftDevSquad Team
```

### Template 4: Contact Form Company Notification
- **Purpose**: Sent to softdevsquad@gmail.com when someone submits contact form
- **Template Name**: "New Contact Form Submission"
- **Variables to include**: All the same variables as above

**Sample Template:**
```
Subject: New Contact Form Submission - {{user_name}}

New contact form submission received:

Contact Details:
- Name: {{user_name}}
- Email: {{user_email}}
- Phone: {{user_phone}}
- Company: {{company_name}}
- Subject: {{subject}}
- Message: {{message}}

{{#if services}}
Services of Interest: {{services}}
{{/if}}
{{#if preferred_date}}
Preferred Meeting Date: {{preferred_date}}
{{/if}}
{{#if preferred_time}}
Preferred Meeting Time: {{preferred_time}}
{{/if}}

Please follow up with the contact.
```

## 4. Configure Environment Variables

A `.env` file has been created in your project root. Open it and add your EmailJS credentials:

```bash
# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here

# Demo Booking Templates
REACT_APP_EMAILJS_USER_TEMPLATE_ID=your_demo_user_template_id
REACT_APP_EMAILJS_COMPANY_TEMPLATE_ID=your_demo_company_template_id

# Contact Form Templates
REACT_APP_EMAILJS_CONTACT_USER_TEMPLATE_ID=your_contact_user_template_id
REACT_APP_EMAILJS_CONTACT_COMPANY_TEMPLATE_ID=your_contact_company_template_id

# API Key
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here

# Company Email
REACT_APP_COMPANY_EMAIL=softdevsquad@gmail.com
```

**Important:** Replace `your_*_here` with your actual EmailJS credentials from the dashboard.

## 5. Get Your Credentials

1. **Service ID**: From your Email Services page
2. **Template IDs**: From each template's settings page (you'll need all 4 template IDs)
3. **Public Key**: From Account > API Keys

**Template IDs you'll need:**
- Demo user confirmation template ID
- Demo company notification template ID  
- Contact user confirmation template ID
- Contact company notification template ID

## 6. Test the Setup

1. Restart your development server after adding environment variables
2. **Test Demo Booking**: Go to `/demo` page and submit the form
3. **Test Contact Form**: Go to `/contact` page and submit the "Send Us a Message" form
4. Check both email addresses for the messages from both forms

## 7. Important Notes

- EmailJS free plan allows 200 emails per month
- Make sure to whitelist your domain in EmailJS settings
- Keep your API keys secure and never commit them to version control
- The demo booking will still work even if email sending fails

## Troubleshooting

- **No emails received**: Check spam folder and EmailJS template settings
- **API errors**: Verify all credentials are correct in .env file
- **CORS issues**: Make sure your domain is whitelisted in EmailJS settings

For more help, visit the [EmailJS Documentation](https://www.emailjs.com/docs/). 