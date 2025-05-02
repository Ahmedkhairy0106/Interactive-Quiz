# Interactive Quiz

A web-based interactive quiz application built with Vanilla JavaScript, HTML, and Tailwind CSS. The quiz features multiple-choice questions, a progress bar, and result tracking, designed based on a Figma prototype.

## Table of Contents

- Features
- Technologies
- Setup and Installation
- Usage
- Challenges and Learnings
- Future Improvements
- Project Structure

## Features

- Multiple-choice questions with dynamic UI updates.
- Progress bar to track quiz advancement.
- Result tracking using Local Storage to display the final score.
- Responsive design with Tailwind CSS, following a Figma prototype.
- Restart functionality to retake the quiz.

## Technologies

- **Frontend**: HTML, CSS (Tailwind CSS), Vanilla JavaScript
- **Design**: [Figma Design Link](https://www.figma.com/proto/KkhpzXMycBTiUUPJIMWWZT/Quiz-Form-UI?node-id=24-17&t=MKGX7xQErrsI1NCh-1&starting-point-node-id=8%3A6)
- **Storage**: Local Storage

## Setup and Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/<your-username>/InteractiveQuiz.git
   cd InteractiveQuiz
   ```

2. **Install dependencies** (if using Tailwind CLI or other tools):

   ```bash
   npm install
   ```

3. **Run the application**:

   - Open `index.html` in a browser, or use a local server (e.g., `npx live-server`).

4. **Access the quiz**:

   - The quiz will load automatically at `index.html`.

## Usage

- Answer each question by selecting one of the multiple-choice options.
- Click "Next" to proceed to the next question or "Submit" to view the final score.
- On the results page, view your score and click "Restart" to retake the quiz.

## Challenges and Learnings

- **Dynamic UI Updates**: Learned to manipulate the DOM with Vanilla JavaScript to render questions and choices dynamically.
- **Responsive Design**: Used Tailwind CSS to create a responsive UI, ensuring consistency with the Figma prototype.
- **Local Storage**: Implemented Local Storage to persist quiz results between pages.

## Future Improvements

- Add a timer for each question to increase interactivity.
- Implement user authentication to save quiz results.
- Enhance the UI with animations for better user experience.
- Add more question types (e.g., true/false, text input).

## 📂 Project Structure

```bash
Interactive-Quiz/
├── src/                   # Source files
│   ├── css/
│   │   ├── input.css      # Custom or Tailwind input styles
│   │   └── output.css     # Generated CSS (e.g., by Tailwind)
│   └── js/
│       ├── index.js       # Main quiz logic (questions, navigation)
│       └── sumbit.js      # Logic for displaying result page
├── template/
│   └── index.html         # Main quiz HTML page
│   └── sumbit.html         # Submission success/result page
