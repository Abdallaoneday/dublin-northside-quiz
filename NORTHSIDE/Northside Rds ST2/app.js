const questions = [
    { question: "Where is Saint Nicholas of Myra School?", options: ["Malahide Road, Kinsealy", "Howth Road, Raheny", "Grange Road, Donaghmede", "Clontarf Road"], correct: ["Malahide Road, Kinsealy"] },
    { question: "What areas will be on your route from Drumcondra to Kilbarrack (Choose Multiple Answers)?", options: ["Fairview", "Killester", "Raheny", "Coolock"], correct: ["Fairview", "Killester", "Raheny"] },
    { question: "Which road is not on your route from Marino to Malahide?", options: ["Whitehall", "Clontarf", "Fairview", "Raheny"], correct: ["Whitehall"] },
    { question: "Which area is not on your route from Marino to Howth?", options: ["Coolock", "Raheny", "Clontarf", "Sutton"], correct: ["Coolock"] },
    { question: "Where is the Grand Hotel?", options: ["Malahide", "Howth", "Sutton", "Portmarnock"], correct: ["Malahide"] },
    { question: "Where is the Railway Museum?", options: ["Inside Malahide Castle", "Howth", "Swords", "Portmarnock"], correct: ["Inside Malahide Castle"] },
    { question: "Where is Malahide Castle?", options: ["Back Road", "Malahide Road", "Swords Road", "Coast Road"], correct: ["Back Road"] },
    { question: "Where is Malahide Cricket Stadium?", options: ["Dublin Road", "Malahide Road", "Coast Road", "Back Road"], correct: ["Dublin Road"] },
    { question: "Where is Yellow Walls Road?", options: ["Malahide", "Howth", "Sutton", "Portmarnock"], correct: ["Malahide"] },
    { question: "Where is Estuary Road?", options: ["Malahide", "Swords", "Howth", "Donabate"], correct: ["Malahide"] },
    { question: "Where is the Island Golf Club?", options: ["Donabate", "Malahide", "Swords", "Skerries"], correct: ["Donabate"] },
    { question: "Where is the Bracken Court Hotel?", options: ["Balbriggan", "Skerries", "Rush", "Lusk"], correct: ["Balbriggan"] },
    { question: "From Dublin Airport to Howth, which areas are on your route?", options: ["Kinsealy", "Portmarnock", "Swords", "Malahide"], correct: ["Kinsealy", "Portmarnock"] },
    { question: "From Drumcondra to North Bull Island, which road is not on your route?", options: ["Oscar Traynor Road", "Clontarf Road", "Howth Road", "Causeway Road"], correct: ["Oscar Traynor Road"] },
    { question: "Where is Saint Vincent’s GAA Club?", options: ["Marino", "Fairview", "Drumcondra", "Clontarf"], correct: ["Marino"] },
    { question: "What road runs from Glasnevin to Marino?", options: ["Griffith Avenue", "Collins Avenue", "Ballymun Road", "Botanic Road"], correct: ["Griffith Avenue"] },
    { question: "What road runs from Killester to Ballymun?", options: ["Collins Avenue", "Griffith Avenue", "Malahide Road", "Howth Road"], correct: ["Collins Avenue"] },
    { question: "Which area is not near Malahide Road?", options: ["Clongriffin", "Marino", "Fairview", "Clontarf"], correct: ["Clongriffin"] },
    { question: "From Portmarnock to Saint Stephen’s Green, which areas are on your route?", options: ["Baldoyle", "Kilbarrack", "Sutton", "Howth"], correct: ["Baldoyle", "Kilbarrack"] },
    { question: "Which road runs from Drumcondra to Fairview?", options: ["Richmond Road", "Clonliffe Road", "Griffith Avenue", "Collins Avenue"], correct: ["Richmond Road"] },
    { question: "Which road runs from Donnycarney to Whitehall?", options: ["Collins Avenue West", "Collins Avenue East", "Malahide Road", "Howth Road"], correct: ["Collins Avenue West"] },
    { question: "Which road runs from Donnycarney to Killester?", options: ["Collins Avenue East", "Collins Avenue West", "Griffith Avenue", "Malahide Road"], correct: ["Collins Avenue East"] },
    { question: "Which road runs from Killester to Ballymun?", options: ["Collins Avenue", "Griffith Avenue", "Ballymun Road", "Botanic Road"], correct: ["Collins Avenue"] },
    { question: "Which road runs from Glasnevin to Marino?", options: ["Griffith Avenue", "Collins Avenue", "Ballymun Road", "Botanic Road"], correct: ["Griffith Avenue"] },
        { question: "Which roads are adjoining to Griffith Avenue?", options: ["Grace Park Road", "Saint Mobhi Road", "Ballymun Road", "Swords Road", "Drumcondra Road Upper", "Malahide Road"], correct: ["Grace Park Road", "Saint Mobhi Road", "Ballymun Road", "Swords Road", "Drumcondra Road Upper", "Malahide Road"] },
    { question: "Which road is adjoining to Richmond Road?", options: ["Grace Park Road", "Clonliffe Road", "Griffith Avenue", "Malahide Road"], correct: ["Grace Park Road"] },
    { question: "Where is All Hallows College?", options: ["Grace Park Road, Drumcondra", "Clonliffe Road, Drumcondra", "Richmond Road, Fairview", "Malahide Road, Marino"], correct: ["Grace Park Road, Drumcondra"] },
    { question: "Where is Saint Patrick’s College?", options: ["Drumcondra Road Upper, Drumcondra", "Grace Park Road, Drumcondra", "Clonliffe Road, Drumcondra", "Richmond Road, Drumcondra"], correct: ["Drumcondra Road Upper, Drumcondra"] },
    { question: "Where is the Archbishop’s House?", options: ["Clonliffe Road, Drumcondra", "Drumcondra Road Lower, Drumcondra", "Grace Park Road, Drumcondra", "Richmond Road, Drumcondra"], correct: ["Clonliffe Road, Drumcondra"] },
    { question: "Where is Tolka Park?", options: ["Richmond Road, Drumcondra", "Clonliffe Road, Drumcondra", "Grace Park Road, Drumcondra", "Malahide Road, Marino"], correct: ["Richmond Road, Drumcondra"] },
    { question: "Where is Saint Vincent’s Psychiatric Hospital?", options: ["Convent Avenue, Richmond Road, Fairview", "Malahide Road, Marino", "Howth Road, Raheny", "Clonliffe Road, Drumcondra"], correct: ["Convent Avenue, Richmond Road, Fairview"] },
    { question: "In which area is Richmond Road?", options: ["Fairview", "Drumcondra", "Marino", "Clontarf"], correct: ["Fairview"] },
    { question: "Where is Dominican College?", options: ["Griffith Avenue, Drumcondra", "Grace Park Road, Drumcondra", "Clonliffe Road, Drumcondra", "Richmond Road, Drumcondra"], correct: ["Griffith Avenue, Drumcondra"] },
    { question: "Where is Croke Park?", options: ["Jones Road, Drumcondra", "Clonliffe Road, Drumcondra", "Grace Park Road, Drumcondra", "Richmond Road, Drumcondra"], correct: ["Jones Road, Drumcondra"] },
    { question: "Where is the GAA Museum?", options: ["Croke Park", "Jones Road", "Clonliffe Road", "Drumcondra Road Lower"], correct: ["Croke Park"] },
    { question: "Where is the west entrance to Croke Park?", options: ["Jones Road", "Clonliffe Road", "Russell Street", "Drumcondra Road Lower"], correct: ["Jones Road"] },
    { question: "Which three roads are closed on a match day in Croke Park?", options: ["Clonliffe Road", "Jones Road", "Russell Street", "Drumcondra Road Lower"], correct: ["Clonliffe Road", "Jones Road", "Russell Street"] },
    { question: "Which road connects Drumcondra Road Lower to Botanic Road?", options: ["Botanic Avenue", "Griffith Avenue", "Clonliffe Road", "Ballymun Road"], correct: ["Botanic Avenue"] },
    { question: "Which river flows along Botanic Avenue?", options: ["River Tolka", "River Liffey", "River Dodder", "River Santry"], correct: ["River Tolka"] },
    { question: "Where is Home Farm Football Stadium?", options: ["Swords Road, Whitehall", "Malahide Road, Marino", "Howth Road, Raheny", "Clontarf Road"], correct: ["Swords Road, Whitehall"] },
    { question: "Where is Highfield Hospital?", options: ["Swords Road, Whitehall", "Malahide Road, Marino", "Howth Road, Raheny", "Clontarf Road"], correct: ["Swords Road, Whitehall"] },
    { question: "Where is the Bonnington Hotel?", options: ["Swords Road, Whitehall", "Malahide Road, Marino", "Howth Road, Raheny", "Clontarf Road"], correct: ["Swords Road, Whitehall"] },
    { question: "Where is the Dublin Skylon Hotel?", options: ["Drumcondra Road Upper, Drumcondra", "Grace Park Road, Drumcondra", "Clonliffe Road, Drumcondra", "Richmond Road, Drumcondra"], correct: ["Drumcondra Road Upper, Drumcondra"] },
    { question: "Where is the Omniplex Shopping Centre?", options: ["Swords Road, Santry", "Malahide Road, Marino", "Howth Road, Raheny", "Clontarf Road"], correct: ["Swords Road, Santry"] },
    { question: "Where is Morton Stadium?", options: ["Swords Road, Santry", "Malahide Road, Marino", "Howth Road, Raheny", "Clontarf Road"], correct: ["Swords Road, Santry"] },
    { question: "Where is DCU (Dublin City University)?", options: ["Collins Avenue Extension, Glasnevin", "Griffith Avenue, Drumcondra", "Ballymun Road, Ballymun", "Swords Road, Whitehall"], correct: ["Collins Avenue Extension, Glasnevin"] },
    { question: "Where is the Helix Theatre?", options: ["DCU, Collins Avenue Extension", "Griffith Avenue, Drumcondra", "Swords Road, Whitehall", "Ballymun Road"], correct: ["DCU, Collins Avenue Extension"] },
    { question: "Where is Lorcan Residential Estate?", options: ["Santry", "Whitehall", "Ballymun", "Drumcondra"], correct: ["Santry"] },
    { question: "Where is Swords Castle?", options: ["Bridge Street, Swords", "Main Street, Swords", "Malahide Road, Swords", "Swords Road"], correct: ["Bridge Street, Swords"] },
    { question: "Where is the Pavilion Shopping Centre?", options: ["Malahide Road, Swords", "Swords Road, Whitehall", "Main Street, Swords", "Bridge Street, Swords"], correct: ["Malahide Road, Swords"] },
    { question: "Which area is not bordering Ballymun?", options: ["Drumcondra", "Santry", "Glasnevin", "Finglas"], correct: ["Drumcondra"] },
    { question: "Which road is adjoining to Russell Street?", options: ["North Circular Road", "Clonliffe Road", "Jones Road", "Drumcondra Road Lower"], correct: ["North Circular Road"] },
    { question: "Where is Mountjoy Prison?", options: ["North Circular Road", "Clonliffe Road", "Jones Road", "Drumcondra Road Lower"], correct: ["North Circular Road"] },
    { question: "Where is Beaumont Hospital?", options: ["Beaumont Road", "Malahide Road", "Howth Road", "Collins Avenue"], correct: ["Beaumont Road"] },
    { question: "In which area is Griffith Avenue?", options: ["Whitehall", "Drumcondra", "Marino", "Clontarf"], correct: ["Whitehall"] }
];

// ============================
// QUIZ STATE
// ============================

let currentIndex = 0;
let score = 0;

const userAnswers = {};
const markedQuestions = {};
const shuffledOptions = {};

// ============================
// DOM ELEMENTS
// ============================

const questionEl = document.getElementById("question");
const formEl = document.getElementById("answers-form");
const feedbackEl = document.getElementById("feedback");
const progressEl = document.getElementById("progress");

const prevBtn = document.getElementById("prev-btn");
const markBtn = document.getElementById("mark-btn");
const nextBtn = document.getElementById("next-btn");

// ============================
// PROPER SHUFFLE (Fisher-Yates)
// ============================

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle questions when quiz loads
shuffleArray(questions);

// ============================
// LOAD QUESTION
// ============================

function loadQuestion() {

    const q = questions[currentIndex];

    progressEl.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
    questionEl.textContent = q.question;

    formEl.innerHTML = "";
    feedbackEl.textContent = "";
    feedbackEl.className = "";

    // Shuffle options once per question
    if (!shuffledOptions[currentIndex]) {
        shuffledOptions[currentIndex] = [...q.options];
        shuffleArray(shuffledOptions[currentIndex]);
    }

    shuffledOptions[currentIndex].forEach(option => {

        const label = document.createElement("label");
        label.classList.add("option-label");

        const input = document.createElement("input");

        // Radio if single answer, Checkbox if multiple
        input.type = q.correct.length > 1 ? "checkbox" : "radio";
        input.name = "answer";
        input.value = option;

        // Restore previous selection
        if (userAnswers[currentIndex]?.includes(option)) {
            input.checked = true;
        }

        // If already marked → lock and show colors
        if (markedQuestions[currentIndex] !== undefined) {
            input.disabled = true;

            if (q.correct.includes(option)) {
                label.classList.add("correct-option");
            }

            if (
                userAnswers[currentIndex]?.includes(option) &&
                !q.correct.includes(option)
            ) {
                label.classList.add("wrong-option");
            }
        }

        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        formEl.appendChild(label);
    });

    // Show feedback if already marked
    if (markedQuestions[currentIndex] !== undefined) {

        const isCorrect = markedQuestions[currentIndex];

        if (isCorrect) {
            feedbackEl.textContent = "✅ Correct!";
            feedbackEl.className = "correct";
        } else {
            feedbackEl.innerHTML =
                "❌ Incorrect! <br> Correct Answer: <strong>" +
                q.correct.join(", ") +
                "</strong>";
            feedbackEl.className = "wrong";
        }
    }

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = markedQuestions[currentIndex] === undefined;
}

// ============================
// MARK QUESTION
// ============================

markBtn.onclick = () => {

    if (markedQuestions[currentIndex] !== undefined) return;

    const selected = [
        ...document.querySelectorAll("input[name='answer']:checked")
    ].map(i => i.value);

    if (selected.length === 0) {
        alert("Please select at least one answer.");
        return;
    }

    userAnswers[currentIndex] = selected;

    const correct = questions[currentIndex].correct;

    const isCorrect =
        selected.length === correct.length &&
        selected.every(a => correct.includes(a));

    if (isCorrect) score++;

    markedQuestions[currentIndex] = isCorrect;

    loadQuestion();
};

// ============================
// NEXT BUTTON
// ============================

nextBtn.onclick = () => {

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {

        let wrongHtml = "";

        questions.forEach((q, index) => {
            if (markedQuestions[index] === false) {
                wrongHtml += `
                    <div class="review-box">
                        <strong>Question:</strong> ${q.question}<br>
                        <strong>Your Answer:</strong> ${userAnswers[index].join(", ")}<br>
                        <strong>Correct Answer:</strong> ${q.correct.join(", ")}
                    </div>
                `;
            }
        });

        document.getElementById("quiz-container").innerHTML = `
            <h2>Quiz Finished</h2>
            <p><strong>Your score: ${score} / ${questions.length}</strong></p>
            ${wrongHtml || "<p>🎉 You got everything correct!</p>"}
            <button onclick="location.reload()">Restart Quiz</button>
        `;
    }
};

// ============================
// PREVIOUS BUTTON
// ============================

prevBtn.onclick = () => {

    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion();
    }
};

// ============================
// START QUIZ
// ============================

loadQuestion();