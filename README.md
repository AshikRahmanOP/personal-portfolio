# Modern Portfolio Website

A modern, interactive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean design, smooth animations, and a responsive layout that works beautifully on all devices.

## 🌟 Features

- **Responsive Design**: Looks great on all devices - mobile, tablet, and desktop
- **Modern Stack**: Built with React, TypeScript, and Tailwind CSS
- **Interactive UI**: Smooth animations and transitions
- **Dark Theme**: Beautiful dark mode design
- **Portfolio Sections**:
  - Hero Section with dynamic background
  - About Me with professional summary
  - Education timeline with visual journey
  - Skills showcase with icons
  - Project gallery with detailed modal views
  - Certificates display
  - Contact form
- **Project Details**: Comprehensive project showcases with:
  - Detailed descriptions
  - Technology stacks
  - Live demos
  - Source code links
  - Screenshots
  - Key features
  - Challenges and solutions
- **Navigation**: 
  - Smooth scrolling
  - Responsive mobile menu
  - Active section highlighting

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/AshikRahmanOP/personal-portfolio.git
cd personal-portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

---

## 📝 Customization Guide

### 1. Personal Information

Edit `constants.tsx` to update:
- Navigation links
- Social media links
- Skills list
- Project details

### 2. Content Sections

#### Hero Section
- Location: `components/Hero.tsx`
- Customize:
  - Main title
  - Subtitle
  - Background image
  - CTA buttons

#### About Section
- Location: `components/About.tsx`
- Customize:
  - Professional summary
  - Background information
  - Personal details

#### Education Section
- Location: `components/Education.tsx`
- Timeline-based layout
- Structure:
```typescript
{
  id: number,
  level: string,        // Degree or certificate level
  institution: string,  // School/College/University name
  location: string,     // City, Country
  period: string,       // Time period (e.g., "2023 - Present")
  status: string,       // "Currently Studying" or "Completed"
  details: string      // Additional information
}
```

#### Projects Section
- Location: `components/Projects.tsx` and `constants.tsx`
- Interactive project cards with modal views
- Structure:
```typescript
{
  title: string,
  description: string,
  longDescription?: string,
  image: string,
  tags: string[],
  liveUrl: string,
  githubUrl: string,
  features?: string[],
  technologies?: string[],
  screenshots?: string[],
  challenges?: string[]
}
```
```typescript
{
  id: 1,
  level: "BSc in Computer Science & Engineering",
  institution: "American International University-Bangladesh",
  location: "Dhaka, Bangladesh",
  period: "2022 - Present",
  status: "Currently Studying",
  details: "Focusing on Software Engineering and Web Development"
}
```

Features:
- Interactive timeline design
- Alternating left/right layout
- Status indicators
- Hover animations
- Responsive design

#### 4. Skills Section

List of your technical skills and competencies.

- Edit in: `data/skills.ts`
- What to change: Add or remove skills, update skill categories

#### 4. Projects Section

Showcase of your work and projects.

- Edit in: `data/projects.ts`
- What to change: Project details, images, and links

#### 5. Certificates Section

Display your certifications and achievements.

- Edit in: `data/certificates.ts`
- What to change: Add or update your certificates using this structure:
```typescript
{
  id: number,          // Unique identifier
  title: string,       // Certificate name
  issuer: string,      // Institution that issued the certificate
  date: string,        // Date received
  image: string,       // Path to certificate image
  url: string,         // Verification link
  skills?: string[],   // Related skills (optional)
  description?: string // Brief description (optional)
}
```

#### Skills Section
- Location: `components/Skills.tsx` and `constants.tsx`
- Add or modify skills with icons
- Responsive grid layout
- Interactive hover effects

#### Certificates Section
- Location: `components/Certificates.tsx`
- Structure:
```typescript
{
  id: number,
  title: string,
  issuer: string,
  date: string,
  image: string,
  url: string,
  skills?: string[],
  description?: string
}
```

### 3. Styling

- Main styling: `index.css`
- Theme colors: Update Tailwind configuration in `tailwind.config.js`
- Component-specific styles: Within each component file

## 💻 Technologies Used

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Animations**: CSS Transitions & Transforms
- **Icons**: Custom SVG icons
- **Type Checking**: TypeScript
- **Code Quality**: ESLint & Prettier

## 📱 Responsive Design

The portfolio is fully responsive with three major breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Development

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier

### Project Structure

```
personal-portfolio/
├── src/
│   ├── components/      # React components
│   ├── constants.tsx    # Configuration and data
│   ├── types.ts        # TypeScript interfaces
│   ├── App.tsx         # Main application
│   └── index.tsx       # Entry point
├── public/             # Static assets
└── package.json        # Dependencies and scripts
```

## 🚀 Deployment

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist` directory

3. Deploy to your preferred hosting service (Netlify, Vercel, GitHub Pages, etc.)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```typescript
{
  id: 1,
  title: "Advanced Web Development",
  issuer: "Udacity",
  date: "2025",
  image: "/images/certificates/web-dev-cert.jpg",
  url: "https://verify.udacity.com/...",
  skills: ["React", "Node.js", "TypeScript"],
  description: "Full-stack web development specialization"
}
```

### Adding New Certificates

To add new certificates:

1. Save your certificate image in the `/public/images/certificates/` directory
2. Open `data/certificates.ts`
3. Add a new certificate entry following the structure above
4. The changes will automatically reflect on your website

### File Structure

```
personal-portfolio/
├── components/           # React components
│   ├── About.tsx       # About section
│   ├── Education.tsx   # Education timeline
│   ├── Skills.tsx      # Skills grid
│   └── ...            # Other components
├── data/                # Data files
│   ├── certificates.ts  # Certificates data
│   ├── projects.ts      # Projects data
│   └── skills.ts        # Skills data
├── public/              # Public assets
│   └── images/         
│       └── certificates/ # Certificate images
└── ...other files
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## License

MIT License - feel free to use this template for your own portfolio!

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
