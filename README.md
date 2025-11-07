# Personal Portfolio Website

This is a modern, interactive personal portfolio website designed to showcase your skills, projects, and provide a way for visitors to get in touch. This guide is specifically written for non-coders to help you easily customize and publish your own portfolio.

## How to Customize Your Portfolio

All the information that appears on your website (like your name, project details, and skills) can be changed by editing just a few text files. You don't need to touch the complex code.

### Tools You'll Need

1.  **A Text Editor**: Any simple text editor will work.
2.  **An Image Hosting Service (Optional)**: To change images, you'll need to upload them somewhere online. A free service like [Postimages](https://postimages.org/) is perfect for this.

---

### Step-by-Step Customization

#### 1. Hero Section (The Main Welcome Page)

This is the first thing visitors see.

**File to edit:** `components/Hero.tsx`

-   **Change Your Name**: Find the line that says `"Hi, I'm Your Name"` and replace `"Your Name"` with your actual name.
-   **Change Your Title**: Find `"Creative Designer & Developer"` and replace it with your professional title (e.g., "Software Engineer", "Graphic Designer", "Project Manager").
-   **Update the Introduction**: Edit the paragraph that starts with `"I'm a passionate developer..."` to describe yourself.
-   **Update Profile Image**:
    1.  Upload your profile picture to a site like [Postimages](https://postimages.org/) and copy the "Direct Link".
    2.  In the file, find the line `const PROFILE_IMAGE_URL = '...';`
    3.  Replace the link inside the quotes with your new image link.
-   **CV / Resume Link**:
    1.  Upload your CV (as a PDF) to a cloud storage service like Google Drive or Dropbox and get a shareable link.
    2.  Find the line `<a href="#"` and replace the `#` with the link to your CV.

#### 2. About Me Section

**File to edit:** `components/About.tsx`

-   **Update Profile Image**: Just like in the Hero section, find the `PROFILE_IMAGE_URL` line and replace the link with your profile picture link if it's different.
-   **Update Your Title**: Change `"Frontend Developer!"` to your title.
-   **Update Your Bio**: Edit the two paragraphs to tell your personal and professional story.

#### 3. Social Media & Navigation Links

**File to edit:** `constants.tsx`

-   **Social Media Links**:
    -   Scroll down to the `SOCIAL_LINKS` section.
    -   You'll see a list for 'Facebook', 'Twitter', and 'LinkedIn'.
    -   For each one, replace the `href: '#'` with the full URL to your profile (e.g., `href: 'https://www.linkedin.com/in/yourprofile'`).

#### 4. Skills Section

**File to edit:** `constants.tsx`

-   Scroll to the `SKILLS` section.
-   You can see a list of skills like `'HTML5'`, `'CSS3'`, etc.
-   You can change the names or remove any skills you don't want to show by deleting the entire block for that skill (from `{` to `}`).
-   *Note: Changing the icons requires code, so it's best to stick with the ones provided or remove the skills you don't need.*

#### 5. Projects Section

This is where you showcase your work.

**File to edit:** `constants.tsx`

-   Scroll down to the `PROJECTS` section. Each project is contained within curly braces `{ ... }`.
-   To edit a project:
    -   `title`: Change the project's title.
    -   `description`: Write a short, compelling description of the project.
    -   `image`: Upload a screenshot of your project to [Postimages](https://postimages.org/), copy the "Direct Link", and paste it here.
    -   `tags`: These are the filter buttons (e.g., 'Web App', 'React'). You can change them or add new ones.
    -   `liveUrl`: Replace the `#` with the link to the live, working project.
    -   `githubUrl`: Replace the `#` with the link to the project's source code on GitHub (if available).
-   To **add** a new project, copy an entire project block (from `{` to `},`) and paste it at the end of the list, then edit the details.
-   To **remove** a project, delete its entire block.

#### 6. Footer

**File to edit:** `components/Footer.tsx`

-   Find the line that says `&copy; {new Date().getFullYear()} Your Name` and replace `"Your Name"` with your name.

---

## How to Deploy Your Website on Vercel (for free)

Vercel is a platform that makes it incredibly easy to publish websites.

**Step 1: Get a GitHub Account**
- If you don't have one, sign up for a free account at [GitHub](https://github.com/). GitHub is used to store your website's files.

**Step 2: Upload Your Files to GitHub**
1.  On your GitHub dashboard, create a **new repository**. Give it a name (e.g., "my-portfolio").
2.  On the new repository page, click the "**uploading an existing file**" link.
3.  Drag and drop all the files and folders of your portfolio into the browser window.
4.  Click "**Commit changes**".

**Step 3: Sign Up for Vercel**
1.  Go to [Vercel](https://vercel.com/signup) and sign up using your GitHub account. This links them together, which makes everything easier.

**Step 4: Deploy Your Site**
1.  Once you're on your Vercel dashboard, click "**Add New...**" -> "**Project**".
2.  Find the GitHub repository you just created (e.g., "my-portfolio") and click the "**Import**" button next to it.
3.  Vercel will automatically detect that it's a React project and set everything up. You don't need to change any settings.
4.  Just click the "**Deploy**" button.

That's it! Vercel will build and deploy your website. After a minute or two, it will give you a public URL (like `my-portfolio.vercel.app`) where you can see your live portfolio.

Whenever you update your files on GitHub (by re-uploading them), Vercel will automatically redeploy the new version of your site.
