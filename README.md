# 🎓 Semester 5 Internal Examination - 2 | Multi-Subject MCQ Practice & Assessment Platform

A responsive, high-performance web platform built for exam practice and self-assessment across all Semester 5 subjects, featuring full question and option shuffling, instant answer verification, timed mock exams, and professional PDF question banks.

Hosted live on **GitHub Pages**:
👉 **[https://anand0708singh.github.io/mcqs-practice/](https://anand0708singh.github.io/mcqs-practice/)**

---

## 📅 Examination Timetable & Subject Priority

The homepage automatically prioritizes **tomorrow's examination subjects** (04/11/2026) that have active question banks and quizzes ready at the very top.

| Priority | Date | Time Slot | Subject Name | Subject Code | Status | Question Bank | Units Covered |
| :---: | :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| 1️⃣ | **04/11/2026** *(Tomorrow)* | 9:00 – 9:20 AM | **Windows .NET (WPF)** | `MOB503` | 🟢 **Ready** | **100 MCQs** | Unit V & Unit VI |
| 2️⃣ | **04/11/2026** *(Tomorrow)* | 10:30 – 10:50 AM | **Information Security** | `IT5054` | 🟢 **Ready** | **108 MCQs** | Unit V & Unit VI |
| 3️⃣ | **04/11/2026** *(Tomorrow)* | 02:15 PM – 02:35 PM | **Machine Learning** | `AI502` | 🟢 **Ready** | **106 MCQs** | Unit V & Unit VI |
| 4️⃣ | **04/11/2026** *(Tomorrow)* | 12:45 PM – 01:05 PM | **Cloud Infrastructure & Resource Management**| `IT5056` | ⏳ Pending | `subjects/cloud-infrastructure/` | - |
| 5️⃣ | **04/11/2026** *(Tomorrow)* | 02:15 PM – 02:35 PM | **Software Testing** | `SE504` | ⏳ Pending | `subjects/software-testing/` | - |
| 6️⃣ | **03/11/2026** | 9:45–10:05 AM & 10:30–10:50 AM | **Web Technology with .NET** | `IT5058` | 🟢 **Ready** | **465 MCQs** | Unit V & Unit VI |
| 7️⃣ | **03/11/2026** | 01:30–01:50 PM & 02:15–02:35 PM | **Data Communication and Networking (DCN)** | `IT5052` | 🟢 **Ready** | **395 MCQs** | Unit IV, Unit V & Unit VI |
| 8️⃣ | **03/11/2026** | 12:00 PM – 12:20 PM | **Design of Wearable and Smart Gadgets** | `DWG501` | ⏳ Pending | `subjects/wearable-gadgets/` | - |

**Total Active Verified Question Bank: 1,174 MCQs across 5 Core Subjects!**

---

## ✨ Platform Features

### 1. Subject-Isolated Practice Hub
- **Home Choice Portal**: Choose any subject from the official timetable to enter its dedicated practice space.
- **Strict Subject Isolation**: When a subject is chosen (e.g., DCN, Machine Learning, Information Security, Windows .NET, or Web .NET), only questions from that subject's curriculum are loaded.
- **Fallback Status Screen**: Clear exam date/time details and folder guidance for pending subjects.

### 2. Dual Assessment Engines
- **🎯 Practice Mode (Instant Learning)**:
  - Immediate visual feedback on every selection (Green for correct, Red for incorrect).
  - Clear explanations highlighting the correct answer choice and technical rationale.
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
- **Downloadable PDF Question Banks**: One-click PDF download button for offline revision for every active subject.

---

## 📂 Repository & Folder Architecture

```text
mcqs-practice/
├── index.html                                        # Main web application entry point
├── style.css                                         # Responsive styling & themes
├── app.js                                            # Quiz engine, priority sorting & state management
├── subjects.js                                       # Master timetable registry with tomorrow's priority
├── questions.js / questions.json                     # Root questions database
├── generate_all_pdfs.py                              # ReportLab multi-subject PDF generator
├── README.md                                         # Project documentation
└── subjects/                                         # Isolated subject directories
    ├── windows-dotnet/                               # MOB503 - Windows .NET (WPF) [TOMORROW]
    │   ├── MOB503_Windows_DotNet_Units_V_VI_MCQ_Question_Bank.pdf # Downloadable printable PDF (100 MCQs)
    │   ├── questions.js
    │   └── questions.json
    ├── information-security/                         # IT5054 - Information Security [TOMORROW]
    │   ├── IT5054_IS_Units_V_VI_MCQ_Question_Bank.pdf # Downloadable printable PDF (108 MCQs)
    │   ├── questions.js
    │   └── questions.json
    ├── machine-learning/                             # AI502 - Machine Learning [TOMORROW]
    │   ├── AI502_ML_Units_V_VI_MCQ_Question_Bank.pdf # Downloadable printable PDF (106 MCQs)
    │   ├── questions.js
    │   └── questions.json
    ├── web-dotnet/                                   # IT5058 - Web Technology with .NET
    │   ├── IT5058_Unit_V_VI_MCQ_Question_Bank.pdf    # Downloadable printable PDF (465 MCQs)
    │   ├── questions.js
    │   └── questions.json
    └── dcn/                                          # IT5052 - Data Communication and Networking
        ├── IT5052_DCN_Units_IV_V_VI_MCQ_Question_Bank.pdf  # Generated 61-page printable PDF (395 MCQs)
        ├── questions.js
        └── questions.json
```

---

## 🚀 Running Locally or Deploying

To run locally in any browser:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000`.

To push updates to GitHub Pages:
```bash
git add .
git commit -m "feat: prioritize tomorrow exam subjects on homepage with quiz priority"
git push origin main
```
