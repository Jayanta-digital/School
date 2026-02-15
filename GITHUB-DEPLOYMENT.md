# 🚀 GitHub Deployment Guide
## Host Your School Website on GitHub Pages (FREE)

---

## 📋 What You'll Learn

1. How to create a GitHub account
2. How to upload your website files
3. How to enable GitHub Pages
4. How to get your live website URL

---

## 🎯 Why GitHub Pages?

### Benefits:
✅ **100% Free** - No hosting costs  
✅ **Fast & Reliable** - Global CDN  
✅ **Custom Domain** - Use your own domain (optional)  
✅ **HTTPS** - Free SSL certificate  
✅ **Version Control** - Track all changes  
✅ **Easy Updates** - Change files anytime  

---

## 🚀 Method 1: Upload via Web Interface (Easiest)

### Step 1: Create GitHub Account
1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Enter your email (use school email if available)
4. Choose username (example: `radhakuchi-jb-school`)
5. Complete verification
6. Select free plan

### Step 2: Create New Repository
1. Click "+" icon (top right) → "New repository"
2. Repository name: `school-website` (or any name you like)
3. Description: "Radhakuchi JB School Official Website"
4. ✅ Select "Public"
5. ✅ Check "Add a README file"
6. Click "Create repository"

### Step 3: Upload Files
1. Click "Add file" → "Upload files"
2. Drag these files:
   - index.html
   - style.css
   - script.js
   - config.js
   - admin.html (optional)
3. Scroll down
4. Commit message: "Initial website upload"
5. Click "Commit changes"

### Step 4: Enable GitHub Pages
1. Go to "Settings" tab (in your repository)
2. Scroll down to "Pages" (left sidebar)
3. Under "Source":
   - Select branch: `main`
   - Select folder: `/ (root)`
4. Click "Save"
5. Wait 2-3 minutes
6. Your site will be live at:
   ```
   https://your-username.github.io/school-website/
   ```

### Step 5: Test Your Website
1. Click the link provided
2. Check if website loads
3. Test all pages and features
4. If images don't load, update config.js with Google Drive links

---

## 💻 Method 2: Using Git (For Developers)

### Prerequisites:
- Git installed on your computer
- Basic command line knowledge

### Step 1: Install Git
**Windows:**
- Download from: [git-scm.com](https://git-scm.com/)
- Install with default settings

**Mac:**
```bash
brew install git
```

**Linux:**
```bash
sudo apt install git
```

### Step 2: Configure Git
```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

### Step 3: Create Repository on GitHub
1. Go to github.com
2. Create new repository (as in Method 1)
3. Copy the repository URL

### Step 4: Push Your Code
```bash
# Navigate to your website folder
cd path/to/school-website

# Initialize git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial school website"

# Add remote repository
git remote add origin https://github.com/your-username/school-website.git

# Push to GitHub
git push -u origin main
```

### Step 5: Enable GitHub Pages
Same as Method 1, Step 4

---

## 📁 Folder Structure on GitHub

Your repository should look like this:
```
school-website/
├── index.html
├── style.css
├── script.js
├── config.js
├── admin.html
├── README.md
├── GOOGLE-DRIVE-GUIDE.md
├── SETUP-GUIDE.md
└── IMAGE-REQUIREMENTS.md
```

**Note:** Do NOT upload the `images/`, `notices/`, `certificates/`, or `results/` folders. These are hosted on Google Drive.

---

## 🔗 Updating Your Website

### Method 1: Via Web Interface

#### To Update a File:
1. Go to your repository
2. Click on the file (e.g., `index.html`)
3. Click pencil icon (Edit)
4. Make changes
5. Scroll down
6. Commit message: "Updated homepage"
7. Click "Commit changes"
8. Wait 1-2 minutes for changes to go live

#### To Add New File:
1. Click "Add file" → "Upload files"
2. Upload new file
3. Commit changes

#### To Delete File:
1. Click on file
2. Click trash icon
3. Commit changes

### Method 2: Via Git Command Line

```bash
# Make changes to files locally

# Check what changed
git status

# Add changes
git add .

# Commit with message
git commit -m "Updated contact information"

# Push to GitHub
git push
```

Changes will be live in 1-2 minutes.

---

## 🌐 Custom Domain (Optional)

If you want to use your own domain (e.g., www.radhakuchischool.com):

### Step 1: Buy Domain
Purchase from:
- Namecheap
- GoDaddy
- Google Domains
- Hostinger

Cost: ~$10-15/year

### Step 2: Configure Domain
1. Go to your domain registrar
2. Find DNS settings
3. Add these records:

**For apex domain (radhakuchischool.com):**
```
Type: A
Name: @
Value: 185.199.108.153
```
```
Type: A
Name: @
Value: 185.199.109.153
```
```
Type: A
Name: @
Value: 185.199.110.153
```
```
Type: A
Name: @
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: your-username.github.io
```

### Step 3: Configure GitHub Pages
1. Go to repository Settings → Pages
2. Under "Custom domain"
3. Enter: www.radhakuchischool.com
4. Click "Save"
5. Wait 24-48 hours for DNS to propagate
6. ✅ Enable "Enforce HTTPS"

---

## 🔒 Security & Best Practices

### 1. Enable Two-Factor Authentication
1. Go to GitHub Settings (your profile)
2. Click "Password and authentication"
3. Enable 2FA
4. Use authenticator app or SMS

### 2. Don't Upload Sensitive Data
❌ Never upload:
- Database passwords
- API keys
- Student personal information
- Staff personal details
- Financial information

✅ Safe to upload:
- HTML, CSS, JavaScript
- config.js with Google Drive IDs (files are already public)
- Documentation

### 3. Keep Repository Public
For GitHub Pages to work with free account, repository must be public. This is fine because:
- Only code is visible
- Images/PDFs are on Google Drive
- No sensitive data in code

---

## 🐛 Troubleshooting

### Issue 1: Website Not Loading

**Check:**
1. Is GitHub Pages enabled?
   - Go to Settings → Pages
   - Should show green message with URL
2. Did you wait 2-3 minutes?
   - First deployment takes time
3. Is repository public?
   - Go to Settings → Danger Zone
   - Check visibility

**Solution:**
- Check GitHub Pages URL is correct
- Clear browser cache (Ctrl+Shift+Delete)
- Try incognito/private mode

### Issue 2: Images Not Showing

**Cause:** config.js not properly configured

**Solution:**
1. Open config.js
2. Replace all `YOUR_FILE_ID` with actual Google Drive IDs
3. Commit and push changes
4. Wait 1-2 minutes
5. Clear cache and refresh

### Issue 3: 404 Error

**Causes:**
- Wrong URL
- Repository name doesn't match
- index.html not in root

**Solution:**
Verify URL format:
```
https://your-username.github.io/repository-name/
```

### Issue 4: CSS Not Loading

**Check:**
1. Is style.css in root folder?
2. Is it linked correctly in index.html?
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Check browser console for errors

### Issue 5: Changes Not Showing

**Solutions:**
1. Wait 1-2 minutes after pushing
2. Clear browser cache
3. Hard refresh (Ctrl+Shift+R)
4. Try different browser
5. Check in incognito mode

---

## 📊 Monitoring Your Website

### GitHub Insights
1. Go to repository
2. Click "Insights" tab
3. See:
   - Traffic (visitors)
   - Clones
   - Referrers

### Google Analytics (Optional)
Add before `</head>` in index.html:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Get tracking ID from: analytics.google.com

---

## 🔄 Version Control Best Practices

### Commit Messages
Good:
```
✅ "Updated principal's message"
✅ "Added new teacher profile"
✅ "Fixed navigation bug"
```

Bad:
```
❌ "changes"
❌ "update"
❌ "fixed stuff"
```

### Branching (Advanced)
For major changes:
```bash
# Create new branch
git checkout -b new-feature

# Make changes
# ...

# Commit changes
git add .
git commit -m "Added student portal"

# Push branch
git push -u origin new-feature

# Create Pull Request on GitHub
# Review and merge
```

---

## 📱 Testing Checklist

Before announcing your website:

- [ ] Test on Desktop (Chrome, Firefox, Edge)
- [ ] Test on Mobile (iOS, Android)
- [ ] Test on Tablet
- [ ] All navigation links work
- [ ] All images load
- [ ] All PDFs download
- [ ] Contact information correct
- [ ] Google Maps location correct
- [ ] No spelling errors
- [ ] Fast loading speed
- [ ] HTTPS enabled (padlock in browser)

---

## 🎓 Learning Resources

### Git & GitHub:
- [GitHub Docs](https://docs.github.com/en)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [GitHub Pages Guide](https://pages.github.com/)

### Web Development:
- [W3Schools](https://www.w3schools.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [freeCodeCamp](https://www.freecodecamp.org/)

---

## 📞 Getting Help

### GitHub Support:
- Documentation: docs.github.com
- Community: github.community
- Contact: support.github.com

### Common Questions:

**Q: Is GitHub Pages really free?**  
A: Yes, completely free for public repositories.

**Q: Can I use my own domain?**  
A: Yes, you can connect a custom domain.

**Q: How many visitors can my site handle?**  
A: GitHub Pages has no bandwidth limits for reasonable use.

**Q: Can I see who visits my site?**  
A: Use GitHub Insights or add Google Analytics.

**Q: Can I make repository private?**  
A: GitHub Pages requires public repos on free plan.

---

## ✅ Final Checklist

Before launching:

### Code:
- [ ] All files uploaded to GitHub
- [ ] config.js updated with Drive IDs
- [ ] No broken links
- [ ] All pages working
- [ ] Mobile responsive

### GitHub:
- [ ] Repository public
- [ ] GitHub Pages enabled
- [ ] Custom domain configured (if using)
- [ ] HTTPS enabled
- [ ] README.md updated

### Testing:
- [ ] Tested on multiple devices
- [ ] Tested all features
- [ ] No console errors
- [ ] Images load fast
- [ ] PDFs download properly

### Content:
- [ ] School information accurate
- [ ] Contact details correct
- [ ] Teacher profiles updated
- [ ] Latest notices posted
- [ ] Recent results uploaded

---

## 🎉 Launch Day!

### Announce Your Website:
1. Share URL with staff
2. Send to parents via WhatsApp/Email
3. Post on school social media
4. Print on school letterhead
5. Add to Google Business Profile

### Sample Announcement:

```
📢 Exciting News!

Radhakuchi JB School now has an official website!

🌐 Visit: https://your-username.github.io/school-website/

Features:
✅ School information
✅ Staff profiles
✅ Examination results
✅ Important notices
✅ Contact details
✅ Photo gallery

Please bookmark and share!

#RadhakuchiJBSchool #Education #DigitalIndia
```

---

## 🔮 Future Enhancements

Consider adding:
- Student login portal
- Online admission form
- Fee payment system
- Homework submission
- Parent portal
- Staff attendance
- Event calendar
- News section
- Alumni section

---

## 📊 Success Metrics

Track:
- Visitor count
- Page views
- Popular pages
- Download count (results, certificates)
- Feedback from users

---

**Congratulations! Your school website is now LIVE and FREE! 🎊**

Total Cost:
- Hosting: **$0** (GitHub Pages)
- Storage: **$0** (Google Drive)
- Domain (optional): **$10-15/year**

Share your website URL with pride! 🚀
