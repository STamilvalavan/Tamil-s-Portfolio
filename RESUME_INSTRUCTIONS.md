# Resume Setup Instructions

## How to Add Your Resume

To enable the resume download functionality:

1. **Prepare Your Resume**: Make sure you have a PDF version of your resume ready.

2. **Place the File**: 
   - Create a `public` folder in the root directory if it doesn't exist
   - Place your resume PDF file in the `public` folder
   - Name it `resume.pdf` (or update the link in the code to match your filename)

3. **Update the Code** (Optional):
   - Open `/src/app/components/Navbar.tsx`
   - Find the `handleDownloadResume` function (around line 62)
   - Uncomment this line:
     ```typescript
     window.open('/resume.pdf', '_blank');
     ```
   - Comment out or remove the alert line

4. **Alternative: Use External Link**:
   If your resume is hosted elsewhere (Google Drive, Dropbox, etc.), replace the URL:
   ```typescript
   window.open('https://your-resume-link.com/resume.pdf', '_blank');
   ```

## Current Behavior

Currently, clicking the Resume button will show an alert message. Once you've added your resume file, it will automatically download or open in a new tab.
