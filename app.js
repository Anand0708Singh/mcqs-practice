// State management
let allQuestions = [];
let activeQuestions = []; // Filtered, shuffled, sliced
let currentIndex = 0;
let userAnswers = {}; // map index -> selectedOptionText
let flaggedQuestions = new Set();
let quizMode = 'practice'; // 'practice' or 'exam'
let timerInterval = null;
let timerSeconds = 0;

// DOM Elements
const setupScreen = document.getElementById('setup-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

const unitSelect = document.getElementById('unit-select');
const topicSelect = document.getElementById('topic-select');
const countSelect = document.getElementById('count-select');
const customCountGroup = document.getElementById('custom-count-group');
const customCountInput = document.getElementById('custom-count-input');
const availableMaxHint = document.getElementById('available-max-hint');
const shuffleQuestionsCheckbox = document.getElementById('shuffle-questions');
const shuffleOptionsCheckbox = document.getElementById('shuffle-options');
const startBtn = document.getElementById('start-btn');

// Quiz Screen Elements
const quizBadgeMode = document.getElementById('quiz-badge-mode');
const quizBadgeUnit = document.getElementById('quiz-badge-unit');
const currentQIndexSpan = document.getElementById('current-q-index');
const totalQCountSpan = document.getElementById('total-q-count');
const quizTimerBox = document.getElementById('quiz-timer-box');
const quizTimerText = document.getElementById('quiz-timer-text');
const flagBtn = document.getElementById('flag-btn');
const flagText = document.getElementById('flag-text');
const abortBtn = document.getElementById('abort-btn');
const quizProgressBar = document.getElementById('quiz-progress-bar');

const currentTopicTag = document.getElementById('current-topic-tag');
const currentQidTag = document.getElementById('current-qid-tag');
const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const feedbackPanel = document.getElementById('feedback-panel');
const feedbackBadge = document.getElementById('feedback-badge');
const feedbackText = document.getElementById('feedback-text');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const finishBtn = document.getElementById('finish-btn');
const clearBtn = document.getElementById('clear-btn');
const paletteGrid = document.getElementById('palette-grid');

// Results Screen Elements
const scoreRingProgress = document.getElementById('score-ring-progress');
const scorePercent = document.getElementById('score-percent');
const resultGreeting = document.getElementById('result-greeting');
const resultMessage = document.getElementById('result-message');
const resCorrectCnt = document.getElementById('res-correct-cnt');
const resWrongCnt = document.getElementById('res-wrong-cnt');
const resSkippedCnt = document.getElementById('res-skipped-cnt');
const resTimeTaken = document.getElementById('res-time-taken');

const retakeBtn = document.getElementById('retake-btn');
const retryIncorrectBtn = document.getElementById('retry-incorrect-btn');
const newTestBtn = document.getElementById('new-test-btn');
const reviewCardsList = document.getElementById('review-cards-list');

const chipAllCnt = document.getElementById('chip-all-cnt');
const chipWrongCnt = document.getElementById('chip-wrong-cnt');
const chipCorrectCnt = document.getElementById('chip-correct-cnt');
const chipFlaggedCnt = document.getElementById('chip-flagged-cnt');

// Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function initTheme() {
  const saved = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', saved);
  themeIcon.textContent = saved === 'dark' ? '☀️' : '🌙';
}

themeToggleBtn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const target = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', target);
  localStorage.setItem('theme', target);
  themeIcon.textContent = target === 'dark' ? '☀️' : '🌙';
});

// Mode Selection
document.querySelectorAll('input[name="app-mode"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    document.querySelectorAll('.mode-card').forEach(card => card.classList.remove('selected'));
    e.target.closest('.mode-card').classList.add('selected');
    quizMode = e.target.value;
  });
});

// Initialize Question Bank
function initData() {
  if (window.MCQ_DATA && Array.isArray(window.MCQ_DATA)) {
    allQuestions = window.MCQ_DATA;
  } else {
    // Fallback fetch if opened in local server
    fetch('questions.json')
      .then(r => r.json())
      .then(d => {
        allQuestions = d;
        populateTopicDropdown();
      })
      .catch(err => console.error('Could not load questions.json', err));
  }
  populateTopicDropdown();
}

function getFilteredPoolSize() {
  const selUnit = unitSelect.value;
  const selTopic = topicSelect.value;
  return allQuestions.filter(q => {
    if (selUnit !== 'all' && q.unit !== selUnit) return false;
    if (selTopic !== 'all' && q.topic !== selTopic) return false;
    return true;
  }).length;
}

function updateCountLimits() {
  const available = getFilteredPoolSize();
  if (availableMaxHint) {
    availableMaxHint.textContent = `(Max: ${available})`;
  }
  if (customCountInput) {
    customCountInput.max = available;
    if (!customCountInput.value || parseInt(customCountInput.value, 10) > available) {
      customCountInput.placeholder = `e.g. 10, 25 (up to ${available})`;
    }
  }
}

countSelect.addEventListener('change', () => {
  if (countSelect.value === 'custom') {
    customCountGroup.style.display = 'flex';
    updateCountLimits();
    customCountInput.focus();
  } else {
    customCountGroup.style.display = 'none';
  }
});

function populateTopicDropdown() {
  const selectedUnit = unitSelect.value;
  const topics = new Set();
  
  allQuestions.forEach(q => {
    if (selectedUnit === 'all' || q.unit === selectedUnit) {
      if (q.topic) topics.add(q.topic);
    }
  });

  topicSelect.innerHTML = '<option value="all">All Topics (Full Coverage)</option>';
  Array.from(topics).sort().forEach(topic => {
    const opt = document.createElement('option');
    opt.value = topic;
    opt.textContent = topic;
    topicSelect.appendChild(opt);
  });
  updateCountLimits();
}

unitSelect.addEventListener('change', () => {
  populateTopicDropdown();
  updateCountLimits();
});

topicSelect.addEventListener('change', () => {
  updateCountLimits();
});

// Fisher-Yates Shuffle
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Start Assessment
startBtn.addEventListener('click', () => {
  const selUnit = unitSelect.value;
  const selTopic = topicSelect.value;
  const selCount = countSelect.value;
  const doShuffleQ = shuffleQuestionsCheckbox.checked;
  const doShuffleOpt = shuffleOptionsCheckbox.checked;

  let pool = allQuestions.filter(q => {
    if (selUnit !== 'all' && q.unit !== selUnit) return false;
    if (selTopic !== 'all' && q.topic !== selTopic) return false;
    return true;
  });

  if (pool.length === 0) {
    alert('No questions match the selected filter criteria.');
    return;
  }

  // Clone questions deeply
  pool = pool.map(q => {
    let opts = q.options.map(o => ({ ...o }));
    if (doShuffleOpt) {
      opts = shuffleArray(opts);
    }
    // Re-assign A, B, C, D letters to the shuffled positions
    const letters = ['A', 'B', 'C', 'D'];
    opts = opts.map((o, idx) => ({
      letter: letters[idx] || o.letter,
      text: o.text
    }));

    return {
      ...q,
      options: opts
    };
  });

  if (doShuffleQ) {
    pool = shuffleArray(pool);
  }

  if (selCount === 'custom') {
    const rawVal = customCountInput.value.trim();
    const customNum = parseInt(rawVal, 10);
    if (!rawVal || isNaN(customNum) || customNum <= 0) {
      alert(`Please enter a valid number of questions to attempt (between 1 and ${pool.length}).`);
      customCountInput.focus();
      return;
    }
    if (customNum > pool.length) {
      alert(`The selected filter only contains ${pool.length} questions. Setting question count to ${pool.length}.`);
      pool = pool.slice(0, pool.length);
    } else {
      pool = pool.slice(0, customNum);
    }
  } else if (selCount !== 'all') {
    const limit = parseInt(selCount, 10);
    pool = pool.slice(0, limit);
  }

  activeQuestions = pool;
  currentIndex = 0;
  userAnswers = {};
  flaggedQuestions = new Set();
  timerSeconds = 0;

  launchQuiz();
});

function launchQuiz() {
  setupScreen.classList.remove('active');
  resultsScreen.classList.remove('active');
  quizScreen.classList.add('active');

  quizBadgeMode.textContent = quizMode === 'practice' ? '🎯 Practice Mode' : '⏱️ Assessment Mode';
  quizBadgeUnit.textContent = unitSelect.options[unitSelect.selectedIndex].text.split('(')[0].trim();
  totalQCountSpan.textContent = activeQuestions.length;

  if (quizMode === 'exam') {
    quizTimerBox.style.display = 'flex';
    startTimer();
  } else {
    quizTimerBox.style.display = 'none';
    stopTimer();
  }

  renderPalette();
  loadQuestion(0);
}

function startTimer() {
  stopTimer();
  timerInterval = setInterval(() => {
    timerSeconds++;
    const mins = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
    const secs = String(timerSeconds % 60).padStart(2, '0');
    quizTimerText.textContent = `${mins}:${secs}`;
  }, 1000);
}

function stopTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;
}

// Render Palette Grid
function renderPalette() {
  paletteGrid.innerHTML = '';
  activeQuestions.forEach((q, idx) => {
    const btn = document.createElement('button');
    btn.className = 'palette-btn';
    btn.textContent = idx + 1;
    btn.title = `Question ${idx + 1}`;
    btn.addEventListener('click', () => loadQuestion(idx));
    paletteGrid.appendChild(btn);
  });
  updatePaletteStatus();
}

function updatePaletteStatus() {
  const buttons = paletteGrid.querySelectorAll('.palette-btn');
  buttons.forEach((btn, idx) => {
    btn.classList.toggle('current', idx === currentIndex);
    btn.classList.toggle('answered', userAnswers[idx] !== undefined);
    btn.classList.toggle('flagged', flaggedQuestions.has(idx));
  });

  // Progress Bar
  const answeredCount = Object.keys(userAnswers).length;
  const pct = (answeredCount / activeQuestions.length) * 100;
  quizProgressBar.style.width = `${pct}%`;
}

// Load Question at Index
function loadQuestion(idx) {
  if (idx < 0 || idx >= activeQuestions.length) return;
  currentIndex = idx;

  const q = activeQuestions[currentIndex];
  currentQIndexSpan.textContent = currentIndex + 1;
  currentTopicTag.textContent = q.topic || q.unit;
  currentQidTag.textContent = `Orig #Q${q.id}`;
  questionText.textContent = q.question;

  // Flag Status
  flagText.textContent = flaggedQuestions.has(currentIndex) ? 'Unflag' : 'Flag';
  flagBtn.classList.toggle('btn-warning', flaggedQuestions.has(currentIndex));

  // Options
  renderOptions(q);

  // Prev / Next / Finish button states
  prevBtn.disabled = currentIndex === 0;
  if (currentIndex === activeQuestions.length - 1) {
    nextBtn.style.display = 'none';
    finishBtn.style.display = 'inline-flex';
  } else {
    nextBtn.style.display = 'inline-flex';
    finishBtn.style.display = 'none';
  }

  updatePaletteStatus();
}

function renderOptions(q) {
  optionsList.innerHTML = '';
  const selectedText = userAnswers[currentIndex];
  const isAnswered = selectedText !== undefined;

  // Reset feedback
  feedbackPanel.style.display = 'none';
  feedbackPanel.className = 'feedback-panel';

  q.options.forEach(opt => {
    const optEl = document.createElement('div');
    optEl.className = 'option-item';

    if (opt.text === selectedText) {
      optEl.classList.add('selected');
    }

    // In practice mode, if already answered, colorize choices
    if (quizMode === 'practice' && isAnswered) {
      optEl.classList.add('locked');
      if (opt.text === q.correct_text) {
        optEl.classList.add('correct-choice');
      } else if (opt.text === selectedText) {
        optEl.classList.add('wrong-choice');
      }
    }

    optEl.innerHTML = `
      <div class="option-letter">${opt.letter}</div>
      <div class="option-text">${escapeHtml(opt.text)}</div>
    `;

    optEl.addEventListener('click', () => {
      // In practice mode, lock once picked
      if (quizMode === 'practice' && isAnswered) return;
      selectOption(opt.text);
    });

    optionsList.appendChild(optEl);
  });

  // Practice mode feedback display
  if (quizMode === 'practice' && isAnswered) {
    showPracticeFeedback(selectedText === q.correct_text, q.correct_text);
  }
}

function selectOption(choiceText) {
  userAnswers[currentIndex] = choiceText;
  const q = activeQuestions[currentIndex];

  if (quizMode === 'practice') {
    // Show instant feedback
    renderOptions(q);
  } else {
    // Just highlight chosen
    optionsList.querySelectorAll('.option-item').forEach(el => {
      el.classList.toggle('selected', el.querySelector('.option-text').textContent.trim() === choiceText);
    });
  }

  updatePaletteStatus();
}

function showPracticeFeedback(isCorrect, correctText) {
  feedbackPanel.style.display = 'flex';
  if (isCorrect) {
    feedbackPanel.className = 'feedback-panel correct';
    feedbackBadge.textContent = '✓ Correct Answer!';
    feedbackText.innerHTML = `Great job! <strong>${escapeHtml(correctText)}</strong> is indeed the right choice.`;
  } else {
    feedbackPanel.className = 'feedback-panel incorrect';
    feedbackBadge.textContent = '✕ Incorrect Choice';
    feedbackText.innerHTML = `Correct answer is: <strong>${escapeHtml(correctText)}</strong>`;
  }
}

// Navigation Events
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) loadQuestion(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < activeQuestions.length - 1) loadQuestion(currentIndex + 1);
});

clearBtn.addEventListener('click', () => {
  if (quizMode === 'practice' && userAnswers[currentIndex] !== undefined) {
    // Allow retrying this question in practice mode
    delete userAnswers[currentIndex];
    loadQuestion(currentIndex);
    return;
  }
  delete userAnswers[currentIndex];
  loadQuestion(currentIndex);
});

flagBtn.addEventListener('click', () => {
  if (flaggedQuestions.has(currentIndex)) {
    flaggedQuestions.delete(currentIndex);
  } else {
    flaggedQuestions.add(currentIndex);
  }
  flagText.textContent = flaggedQuestions.has(currentIndex) ? 'Unflag' : 'Flag';
  flagBtn.classList.toggle('btn-warning', flaggedQuestions.has(currentIndex));
  updatePaletteStatus();
});

abortBtn.addEventListener('click', () => {
  if (confirm('Are you sure you want to quit the current session and return to settings?')) {
    stopTimer();
    quizScreen.classList.remove('active');
    setupScreen.classList.add('active');
  }
});

finishBtn.addEventListener('click', () => {
  const answeredCount = Object.keys(userAnswers).length;
  const total = activeQuestions.length;
  if (answeredCount < total) {
    const unans = total - answeredCount;
    if (!confirm(`You have ${unans} unanswered question(s). Are you sure you want to submit and view results?`)) {
      return;
    }
  }
  showResults();
});

// Results & Scoring
function showResults() {
  stopTimer();
  quizScreen.classList.remove('active');
  resultsScreen.classList.add('active');

  let correctCount = 0;
  let wrongCount = 0;
  let skippedCount = 0;

  activeQuestions.forEach((q, idx) => {
    const ans = userAnswers[idx];
    if (ans === undefined) {
      skippedCount++;
    } else if (ans === q.correct_text) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });

  const total = activeQuestions.length;
  const percentage = Math.round((correctCount / total) * 100);

  // Animate SVG ring
  const circumference = 2 * Math.PI * 50; // r=50 -> ~314
  const offset = circumference - (percentage / 100) * circumference;
  scoreRingProgress.style.strokeDashoffset = offset;
  if (percentage >= 75) {
    scoreRingProgress.style.stroke = 'var(--success)';
  } else if (percentage >= 40) {
    scoreRingProgress.style.stroke = 'var(--warning)';
  } else {
    scoreRingProgress.style.stroke = 'var(--danger)';
  }

  scorePercent.textContent = `${percentage}%`;

  if (percentage >= 85) {
    resultGreeting.textContent = '🌟 Outstanding Performance!';
    resultMessage.textContent = 'You have demonstrated mastery over these ASP.NET Core concepts.';
  } else if (percentage >= 60) {
    resultGreeting.textContent = '👍 Good Job!';
    resultMessage.textContent = 'Solid grasp of the topics, with room for minor revision.';
  } else {
    resultGreeting.textContent = '📚 Keep Practicing!';
    resultMessage.textContent = 'Review your mistakes below and retake the quiz to solidify your understanding.';
  }

  resCorrectCnt.textContent = correctCount;
  resWrongCnt.textContent = wrongCount;
  resSkippedCnt.textContent = skippedCount;

  const mins = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
  const secs = String(timerSeconds % 60).padStart(2, '0');
  resTimeTaken.textContent = `${mins}:${secs}`;

  // Retry incorrect button
  if (wrongCount > 0) {
    retryIncorrectBtn.style.display = 'inline-flex';
  } else {
    retryIncorrectBtn.style.display = 'none';
  }

  // Update filter chip counts
  chipAllCnt.textContent = total;
  chipWrongCnt.textContent = wrongCount;
  chipCorrectCnt.textContent = correctCount;
  chipFlaggedCnt.textContent = flaggedQuestions.size;

  renderReviewList('all');
}

// Render Review Items
function renderReviewList(filterType) {
  reviewCardsList.innerHTML = '';

  activeQuestions.forEach((q, idx) => {
    const userPick = userAnswers[idx];
    const isCorrect = userPick === q.correct_text;
    const isSkipped = userPick === undefined;
    const isFlagged = flaggedQuestions.has(idx);

    if (filterType === 'wrong' && (isCorrect || isSkipped)) return;
    if (filterType === 'correct' && !isCorrect) return;
    if (filterType === 'flagged' && !isFlagged) return;

    let statusClass = 'status-skipped';
    let statusLabel = '○ Unanswered';
    if (!isSkipped) {
      if (isCorrect) {
        statusClass = 'status-correct';
        statusLabel = '✓ Correct';
      } else {
        statusClass = 'status-wrong';
        statusLabel = '✕ Incorrect';
      }
    }

    const card = document.createElement('div');
    card.className = `review-card ${statusClass}`;

    let optionsHtml = '';
    q.options.forEach(opt => {
      let optClass = 'review-opt';
      let tag = '';
      if (opt.text === q.correct_text) {
        optClass += ' is-correct';
        tag = ' (Correct Answer)';
      }
      if (userPick !== undefined && opt.text === userPick && !isCorrect) {
        optClass += ' user-pick-wrong';
        tag = ' (Your Answer)';
      } else if (userPick !== undefined && opt.text === userPick && isCorrect) {
        tag = ' (Your Answer ✓)';
      }

      optionsHtml += `
        <div class="${optClass}">
          <strong>${opt.letter})</strong> ${escapeHtml(opt.text)} <em>${tag}</em>
        </div>
      `;
    });

    card.innerHTML = `
      <div class="review-card-meta">
        <span>#${idx + 1} (Orig Q${q.id})</span> •
        <span>${escapeHtml(q.topic || q.unit)}</span> •
        <strong>${statusLabel}</strong>
        ${isFlagged ? '• 🚩 Flagged' : ''}
      </div>
      <div class="review-card-question">${escapeHtml(q.question)}</div>
      <div class="review-options">
        ${optionsHtml}
      </div>
    `;

    reviewCardsList.appendChild(card);
  });
}

// Review Filter Chips
document.querySelectorAll('.filter-chip').forEach(chip => {
  chip.addEventListener('click', (e) => {
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    renderReviewList(chip.dataset.filter);
  });
});

// Retake & Actions
retakeBtn.addEventListener('click', () => {
  startBtn.click();
});

retryIncorrectBtn.addEventListener('click', () => {
  const incorrectSet = activeQuestions.filter((q, idx) => userAnswers[idx] !== q.correct_text);
  if (incorrectSet.length === 0) return;

  activeQuestions = shuffleArray(incorrectSet.map(q => ({
    ...q,
    options: shuffleArray(q.options.map((o, i) => ({ letter: ['A','B','C','D'][i], text: o.text })))
  })));

  currentIndex = 0;
  userAnswers = {};
  flaggedQuestions = new Set();
  timerSeconds = 0;

  launchQuiz();
});

newTestBtn.addEventListener('click', () => {
  resultsScreen.classList.remove('active');
  setupScreen.classList.add('active');
});

// Helper Escape HTML
function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Boot
window.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initData();
});

