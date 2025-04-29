# 🎯 Interactive Quiz

### An interactive, browser-based quiz application built using HTML, CSS, and JavaScript.  
It allows users to answer multiple-choice questions, track their progress, and view their final score at the end.

---

## 🧩 UI Design
This project uses a UI designed in **Figma**.  
You can preview the design here:  
🔗 [Figma Design Link](https://www.figma.com/proto/KkhpzXMycBTiUUPJIMWWZT/Quiz-Form-UI?node-id=24-17&t=MKGX7xQErrsI1NCh-1&starting-point-node-id=8%3A6)

---

## 🚀 Features

- 📋 Multiple choice questions  
- ✅ Answer selection with immediate visual feedback  
- 📊 Dynamic progress bar  
- 📈 Final score calculation and display  
- 🔁 Option to restart the quiz  
- 💾 LocalStorage used to store result data between pages  

---

## 🛠️ Technologies Used

- HTML5  
- Tailwind CSS  
- Vanilla JavaScript (no frameworks)  

---

## 📂 Project Structure

```bash
Interactive-Quiz/
├── node_modules/          # Installed npm packages (ignored by Git)
├── src/                   # Source files
│   ├── css/
│   │   ├── input.css      # Custom or Tailwind input styles
│   │   └── output.css     # Generated CSS (e.g., by Tailwind)
│   └── js/
│       ├── index.js       # Main quiz logic (questions, navigation)
│       └── sumbit.js      # Logic for displaying result page
├── template/
│   └── index.html         # Main quiz HTML page
├── sumbit.html            # Submission success/result page
├── .gitignore             # Files to ignore in Git (e.g., node_modules)
├── LICENSE                # Project license
├── package-lock.json      # Exact versions of installed dependencies
├── package.json           # Project metadata and dependencies
└── README.md              # Project overview and instructions
