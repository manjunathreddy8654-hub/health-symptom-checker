// App Logic for Health Symptom Self-Checker

document.addEventListener("DOMContentLoaded", () => {
  // --- State Variables ---
  let userName = "Guest";
  let userAge = "";
  let selectedCategory = "";
  let currentQuestions = [];
  let currentQuestionIndex = 0;
  let userAnswers = []; // Array of { questionText, answer: 'yes'|'no', severity }

  // --- DOM Elements ---
  const screens = {
    welcome: document.getElementById("screen-welcome"),
    category: document.getElementById("screen-category"),
    quiz: document.getElementById("screen-quiz"),
    result: document.getElementById("screen-result")
  };

  // Inputs & Start button
  const inputName = document.getElementById("user-name");
  const inputAge = document.getElementById("user-age");
  const btnStart = document.getElementById("btn-start");

  // Category Selection
  const categoryButtons = document.querySelectorAll(".cat-btn");

  // Quiz elements
  const progressFill = document.getElementById("progress-fill");
  const progressText = document.getElementById("progress-text");
  const questionText = document.getElementById("question-text");
  const btnYes = document.getElementById("btn-yes");
  const btnNo = document.getElementById("btn-no");
  const btnBack = document.getElementById("btn-back");

  // Result elements
  const resultGreeting = document.getElementById("result-greeting");
  const severityBadge = document.getElementById("severity-badge");
  const resultTitle = document.getElementById("result-title");
  const resultSummary = document.getElementById("result-summary");
  const resultTips = document.getElementById("result-tips");
  const doctorBox = document.getElementById("doctor-box");
  const resultDoctorAdvice = document.getElementById("result-doctor-advice");
  const btnPrint = document.getElementById("btn-print");
  const btnRestart = document.getElementById("btn-restart");

  // --- Helper Functions ---

  // Switch screen with transition
  function showScreen(screenId) {
    // Hide all screens
    Object.values(screens).forEach(screen => {
      screen.classList.remove("active");
    });
    
    // Show target screen
    const targetScreen = screens[screenId];
    if (targetScreen) {
      targetScreen.classList.add("active");
    }
  }

  // --- Event Listeners ---

  // Screen 1: Start Button Click
  btnStart.addEventListener("click", () => {
    // Collect user info
    const enteredName = inputName.value.trim();
    const enteredAge = inputAge.value.trim();

    // Store or default
    userName = enteredName || "Guest";
    userAge = enteredAge;

    // Simple validation (Optional name, but age can be checked)
    if (enteredAge !== "") {
      const ageNum = parseInt(enteredAge, 10);
      if (isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
        alert("Please enter a valid age between 1 and 120.");
        inputAge.focus();
        return;
      }
    }

    // Go to next screen
    showScreen("category");
  });

  // Screen 2: Category Selection Buttons
  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      selectedCategory = btn.getAttribute("data-cat");
      
      // Load questions for the selected category
      if (symptomQuestions && symptomQuestions[selectedCategory]) {
        currentQuestions = symptomQuestions[selectedCategory];
        currentQuestionIndex = 0;
        userAnswers = [];
        
        // Start the quiz
        loadQuestion();
        showScreen("quiz");
      } else {
        console.error(`Symptom category "${selectedCategory}" not found in questions database.`);
      }
    });
  });

  // Screen 3: Quiz Button Yes / No
  btnYes.addEventListener("click", () => handleAnswer("yes"));
  btnNo.addEventListener("click", () => handleAnswer("no"));

  // Back button in Quiz
  btnBack.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      // Go to previous question
      currentQuestionIndex--;
      userAnswers.pop();
      loadQuestion();
    } else {
      // If at first question, go back to category selection
      showScreen("category");
    }
  });

  // Screen 4: Print Results
  btnPrint.addEventListener("click", () => {
    window.print();
  });

  // Screen 4: Restart Self-Checker
  btnRestart.addEventListener("click", () => {
    // Reset inputs
    inputName.value = "";
    inputAge.value = "";
    userName = "Guest";
    userAge = "";
    selectedCategory = "";
    currentQuestions = [];
    currentQuestionIndex = 0;
    userAnswers = [];
    
    // Go to welcome screen
    showScreen("welcome");
  });

  // --- Quiz Logic Functions ---

  // Load current question to UI
  function loadQuestion() {
    if (currentQuestionIndex < currentQuestions.length) {
      const q = currentQuestions[currentQuestionIndex];
      questionText.textContent = q.text;

      // Update progress bar
      const total = currentQuestions.length;
      const progressPercent = ((currentQuestionIndex + 1) / total) * 100;
      progressFill.style.width = `${progressPercent}%`;
      progressText.textContent = `Question ${currentQuestionIndex + 1} of ${total}`;
    }
  }

  // Handle answers and navigate
  function handleAnswer(answerValue) {
    const q = currentQuestions[currentQuestionIndex];
    
    // Save answer
    userAnswers.push({
      questionText: q.text,
      answer: answerValue,
      severity: q.severity
    });

    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuestions.length) {
      // Load next question
      loadQuestion();
    } else {
      // Quiz completed, calculate and render result
      calculateAndShowResult();
    }
  }

  // Calculate severity and build Results Screen
  function calculateAndShowResult() {
    // Determine overall severity
    // - If any 'Yes' response matches a 'severe' question -> SEVERE
    // - Else if any 'Yes' response matches a 'moderate' question -> MODERATE
    // - Else (all 'No's, or only 'Yes' to 'mild' questions) -> MILD
    
    let overallSeverity = "mild";
    
    const yesAnswers = userAnswers.filter(ans => ans.answer === "yes");
    
    const hasSevereYes = yesAnswers.some(ans => ans.severity === "severe");
    const hasModerateYes = yesAnswers.some(ans => ans.severity === "moderate");

    if (hasSevereYes) {
      overallSeverity = "severe";
    } else if (hasModerateYes) {
      overallSeverity = "moderate";
    } else {
      overallSeverity = "mild";
    }

    // Get advice text from results database
    const categoryData = resultsDatabase[selectedCategory];
    if (!categoryData) {
      console.error(`Symptom results data not found for category "${selectedCategory}"`);
      return;
    }
    
    const resultDetails = categoryData[overallSeverity];

    // --- Populate UI with results details ---
    
    // Greeting
    const ageString = userAge ? `, age ${userAge}` : "";
    resultGreeting.textContent = `Results for ${userName}${ageString}`;

    // Severity Badge
    severityBadge.className = "severity-badge"; // Clear all classes
    severityBadge.classList.add(overallSeverity);
    severityBadge.textContent = overallSeverity.charAt(0).toUpperCase() + overallSeverity.slice(1);

    // Title & Summary
    resultTitle.textContent = resultDetails.title;
    resultSummary.textContent = resultDetails.summary;

    // Tips List
    resultTips.innerHTML = "";
    resultDetails.tips.forEach(tip => {
      const li = document.createElement("li");
      li.textContent = tip;
      resultTips.appendChild(li);
    });

    // Doctor Advice Box
    if (resultDetails.doctorAdvice) {
      doctorBox.style.display = "block";
      resultDoctorAdvice.textContent = resultDetails.doctorAdvice;
    } else {
      doctorBox.style.display = "none";
    }

    // Finally show results screen
    showScreen("result");
  }
});
