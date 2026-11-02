# 🎓 Semester 5 Internal Examination - 2 | MCQ Practice & Assessment Platform

A responsive, high-performance web platform built for exam practice and self-assessment across all Semester 5 subjects, featuring full question and option shuffling, instant answer verification, timed mock exams, and PDF question banks.

Hosted live on **GitHub Pages**:
👉 **[https://anand0708singh.github.io/mcqs-practice/](https://anand0708singh.github.io/mcqs-practice/)**

---

## 📅 Examination Timetable & Subject Status

| Date | Time Slot | Subject Name | Subject Code | Status | Question Bank |
| :--- | :--- | :--- | :---: | :---: | :---: |
| **03/11/2026** | 9:45–10:05 AM & 10:30–10:50 AM | **Web Technology with .NET** | `IT5058` | 🟢 **Ready** | **465 MCQs** (Units V & VI) |
| **03/11/2026** | 12:00 PM – 12:20 PM | **Design of Wearable and Smart Gadgets** | `DWG501` | ⏳ Pending | `subjects/wearable-gadgets/` |
| **03/11/2026** | 01:30–01:50 PM & 02:15–02:35 PM | **Data Communication and Networking (DCN)** | `IT5052` | 🟢 **Ready** | **282 MCQs** (Units IV, V & VI) |
| **04/11/2026** | 9:00 – 9:20 AM | **Windows_252, iOS_56** | `MOB503` | ⏳ Pending | `subjects/windows-ios/` |
| **04/11/2026** | 10:30 – 10:50 AM | **Information Security** | `IT5054` | ⏳ Pending | `subjects/information-security/` |
| **04/11/2026** | 12:45 PM – 01:05 PM | **Cloud Infrastructure & Resource Management**| `IT5056` | ⏳ Pending | `subjects/cloud-infrastructure/` |
| **04/11/2026** | 02:15 PM – 02:35 PM | **Machine Learning** | `AI502` | ⏳ Pending | `subjects/machine-learning/` |
| **04/11/2026** | 02:15 PM – 02:35 PM | **Software Testing** | `SE504` | ⏳ Pending | `subjects/software-testing/` |

---

## ✨ Platform Features

### 1. Subject-Isolated Practice Hub
- **Home Choice Portal**: Choose any subject from the official timetable to enter its dedicated practice space.
- **Strict Isolation**: When a subject is chosen (e.g., DCN or Web .NET), only questions from that subject's curriculum are loaded.
- **Fallback Status Screen**: Clear exam date/time details and folder guidance for pending subjects.

### 2. Dual Assessment Engines
- **🎯 Practice Mode (Instant Learning)**:
  - Immediate visual feedback on every selection (Green for correct, Red for incorrect).
  - Clear explanations highlighting the correct answer choice.
- **⏱️ Exam / Self-Assessment Mode**:
  - Live timer tracking elapsed time.
  - Interactive Question Palette with real-time indicators for Answered, Flagged, and Unanswered questions.
  - Submit confirmation preventing accidental premature submissions.

### 3. Smart Shuffling & Custom Question Counts
- **Double Randomization**:
  - **Question Shuffling**: Questions appear in a randomized order each attempt.
  - **Option (Answer) Shuffling**: A, B, C, D choices are dynamically scrambled so answers cannot be memorized by position.
- **Flexible Question Counts**:
  - Quick 20, Standard 50, Intensive 100, or Full Set.
  - **Custom Amount ✍️**: Enter any specific number of questions (with auto-detected maximum limit validation).

### 4. Comprehensive Score & Review Analytics
- Circular SVG progress ring with color-coded score tiers.
- Accurate metrics for Correct, Incorrect, Skipped, and Time Elapsed.
- **⚠️ Retry Incorrect Questions**: Re-attempts only your mistakes in a fresh, randomized session.
- Filterable card-by-card question review (All, Correct, Incorrect, or Flagged).

### 5. Mobile-Optimized & Dark Mode
- **Sticky Status & Bottom Navigation**: Keeps questions comfortably in view on phones without erratic scrolling.
- **Collapsible Mobile Palette**: Easy access to question numbers without cluttering the screen.
- **Dark / Light Theme Toggle**: Persistent theme saved in local storage.
- **Downloadable PDF Question Banks**: One-click PDF download button for offline revision.

---

## 📂 Repository & Folder Architecture

```text
mcqs-practice/
├── index.html                                        # Main web application entry point
├── style.css                                         # Responsive styling & themes
├── app.js                                            # Quiz engine & state management
├── subjects.js                                       # Master timetable registry
├── questions.js / questions.json                     # Root questions database
├── README.md                                         # Project documentation
└── subjects/                                         # Isolated subject directories
    ├── web-dotnet/                                   # IT5058 - Web Technology with .NET
    │   ├── IT5058_Unit_V_VI_MCQ_Question_Bank.pdf    # Source PDF (465 MCQs)
    │   ├── questions.js
    │   └── questions.json
    ├── dcn/                                          # IT5052 - Data Communication and Networking
    │   ├── Computer_Networks_Units_IV_V_VI_MCQ_Notes.pdf
    │   ├── IT5052_DCN_Units_IV_V_VI_MCQ_Question_Bank.pdf  # Generated 19-page printable PDF
    │   ├── questions.js                              # 123 verified MCQs
    │   ├── questions.json
    │   ├── generate_mcqs.py
    │   └── export_pdf.py
    ├── wearable-gadgets/
    ├── windows-ios/
    ├── information-security/
    ├── cloud-infrastructure/
    ├── machine-learning/
    └── software-testing/
```

---

## 🚀 How to Run Locally

No npm or external server setup required:
1. Clone the repository:
   ```bash
   git clone https://github.com/Anand0708Singh/mcqs-practice.git
   cd mcqs-practice
   ```
2. Double click `index.html` to open in any web browser, or serve with Python:
   ```bash
   python -m http.server 8000
   ```
3. Visit `http://localhost:8000/`.

---

## 🌐 Deploy to GitHub Pages

1. Push your code to the `main` branch on GitHub.
2. Navigate to **Settings** > **Pages** in the repository.
3. Under **Build and deployment > Branch**, select `main` and `/ (root)`, then click **Save**.
4. Your site will automatically go live at `https://<username>.github.io/<repo-name>/`.
