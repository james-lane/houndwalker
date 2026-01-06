# Decap CMS Setup Guide

## Overview

Your site now uses Decap CMS (formerly Netlify CMS) to manage gallery images. This allows your client to upload and manage photos through a simple web interface without touching any code.

## How It Works

- **Admin Interface**: Visit `/admin` on your live site
- **Authentication**: Uses Netlify Identity for secure login
- **Storage**: Images stored in Git repository (`static/images/gallery/`)
- **Auto-Deploy**: Every change triggers a new Netlify build automatically

## Initial Setup (One-time)

### 1. Install Dependencies

```bash
npm install
```

### 2. Enable Netlify Identity

1. Go to your Netlify Dashboard
2. Navigate to: **Site Settings → Identity**
3. Click **"Enable Identity"**
4. Under **Registration preferences**, select **"Invite only"** (recommended)
5. Under **External providers**, you can optionally enable GitHub, Google, etc.

### 3. Enable Git Gateway

1. Still in **Site Settings → Identity**
2. Scroll down to **Services → Git Gateway**
3. Click **"Enable Git Gateway"**
4. This allows Decap CMS to commit changes to your repository

### 4. Invite Your Client

1. In Netlify Dashboard, go to **Identity tab**
2. Click **"Invite users"**
3. Enter your client's email address
4. They'll receive an invitation email with a link to set up their account

## Using the CMS

### For Your Client

1. **Access the Admin Panel**
   - Visit: `https://your-site-url.netlify.app/admin`
   - Or during development: `http://localhost:5173/admin`

2. **Log In**
   - Click "Login with Netlify Identity"
   - Enter the email/password from the invitation

3. **Manage Services**
   - Click on **"Services"** in the sidebar
   - Click **"New Service"** to add a service, or click an existing one to edit
   - Fill in:
     - **Title**: Service name (e.g., "Solo", "Group", "Out of Hours")
     - **Price**: Price in pounds (just the number, e.g., 16)
     - **Description**: Brief description of the service
     - **Background Image**: Upload background photo for this service card
     - **Order**: Display order (1 = first, 2 = second, 3 = third)
   - Click **"Publish"**
   - Wait 2-3 minutes for changes to appear live

4. **Manage Gallery Images**
   - Click on **"Gallery"** in the sidebar
   - Click **"New Image"**
   - Fill in:
     - **Title**: Internal name (e.g., "Golden Retriever at Park")
     - **Image**: Click to upload photo
     - **Alt Text**: Description for accessibility (e.g., "Happy golden retriever playing at dog park")
     - **Order**: Number to control display order (1 = first, 2 = second, etc.)
   - Click **"Publish"**
   - Wait 2-3 minutes for the site to rebuild

5. **Edit or Delete Items**
   - Click on any service, image, or page in the lists
   - Make changes and click "Publish"
   - Or click "Delete entry" to remove

6. **Reorder Items**
   - Edit each item and change the **Order** number
   - Lower numbers appear first (1, 2, 3...)

7. **Edit About Section**
   - Click on **"Pages"** in the sidebar
   - Click on **"About Page"**
   - Edit:
     - **Heading**: The main title (e.g., "The Hound Walker")
     - **Content**: The about text (supports formatting: paragraphs, bold, italic, lists)
   - Click **"Publish"**
   - Wait 2-3 minutes for changes to appear live

## Local Development (Optional)

If you want to test the CMS locally:

1. **Uncomment local backend** in `/static/admin/config.yml`:
   ```yaml
   local_backend: true
   ```

2. **Install Decap Server**:
   ```bash
   npx decap-server
   ```

3. **Run your dev server** (in a separate terminal):
   ```bash
   npm run dev
   ```

4. **Access**: `http://localhost:5173/admin`

## File Structure

```
├── content/
│   ├── gallery/           # Gallery image entries
│   │   ├── image-1.md
│   │   ├── image-2.md
│   │   └── image-3.md
│   ├── services/          # Service entries
│   │   ├── solo.md
│   │   ├── group.md
│   │   └── out-of-hours.md
│   └── pages/             # Page content
│       └── about.md       # About section text
├── static/
│   ├── admin/
│   │   ├── config.yml     # CMS configuration
│   │   └── index.html     # Admin interface
│   └── images/
│       ├── gallery/       # Gallery image files
│       │   ├── Image1.jpeg
│       │   ├── Image2.jpeg
│       │   └── Image3.jpeg
│       └── services/      # Service background images
│           ├── solo.jpg
│           ├── group.jpg
│           └── ooh.jpg
```

## Troubleshooting

### "Error loading config.yml"
- Make sure you've enabled Git Gateway in Netlify
- Check that `/static/admin/config.yml` exists

### "Failed to persist entry"
- Verify Git Gateway is enabled
- Check that the user has been invited and accepted

### "Images not showing on site"
- Wait 2-3 minutes for Netlify to rebuild
- Check build logs in Netlify Dashboard
- Verify images uploaded to `/images/gallery/` folder

### "Can't log in"
- Ensure Netlify Identity is enabled
- Check that user was invited and confirmed email
- Try clearing browser cache/cookies

## Tips and Recommendations

### For Services
- **Title**: Keep it short (e.g., "Solo", "Group", "Out of Hours")
- **Price**: Enter just the number (e.g., 16, not £16)
- **Description**: Keep it brief (1-2 sentences)
- **Background Image**: Use high-quality photos (JPEG format, under 2MB)
- **Order**: Use 1, 2, 3 to control which appears first

### For Gallery Images
- Use JPEG format for photos
- Keep file sizes under 2MB (compress if needed)
- Use descriptive Alt Text for accessibility
- Number items 1, 2, 3... in the order they want displayed

### For About Section Content
The About section editor supports Markdown formatting:
- **Paragraphs**: Separate with blank lines
- **Bold text**: `**bold text**`
- **Italic text**: `*italic text*`
- **Lists**: Start lines with `-` or `*`
- **Links**: `[link text](https://url.com)`

The editor has a "Rich Text" mode that provides formatting buttons if you prefer not to write Markdown directly.

## Need Help?

- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Netlify Identity Docs](https://docs.netlify.com/visitor-access/identity/)
