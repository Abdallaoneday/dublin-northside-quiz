const questions = [
    { question: "Which road runs from Fairview to Dollymount?", options: ["Clontarf Road", "Howth Road", "Castle Avenue", "Vernon Avenue"], correct: ["Clontarf Road"] },
    { question: "Which road runs from Dollymount to Clontarf?", options: ["Clontarf Road", "Howth Road", "Seafield Road", "Causeway Road"], correct: ["Clontarf Road"] },
    { question: "Which roads are adjoining to Clontarf Road?", options: ["Castle Avenue", "Vernon Avenue", "James Larkin Road", "Seafield Road East", "Howth Road"], correct: ["Castle Avenue", "Vernon Avenue", "James Larkin Road", "Seafield Road East"] },
    { question: "Which road runs from Sutton to Kilbarrack?", options: ["Dublin Road", "Howth Road", "Coast Road", "Grange Road"], correct: ["Dublin Road"] },
    { question: "Which road is adjoining to Kilbarrack Road?", options: ["Howth Road", "Grange Road", "Springdale Road", "Coast Road"], correct: ["Howth Road"] },
    { question: "Which road runs from Clontarf to Killester?", options: ["Castle Avenue", "Vernon Avenue", "Howth Road", "Seafield Road"], correct: ["Castle Avenue"] },
    { question: "Where is Westwood Health and Leisure Centre?", options: ["Clontarf Road", "Castle Avenue", "Howth Road", "Blackheath Park"], correct: ["Clontarf Road"] },
    { question: "Where is Clontarf Cricket Club?", options: ["Castle Avenue", "Vernon Avenue", "Clontarf Road", "Seafield Road"], correct: ["Castle Avenue"] },
    { question: "Where is Clontarf Rugby Club?", options: ["Castle Avenue", "Howth Road", "Vernon Avenue", "Seafield Road"], correct: ["Castle Avenue"] },
    { question: "Which road runs from Clontarf to Killester?", options: ["Castle Avenue", "Vernon Avenue", "Howth Road", "Seafield Road"], correct: ["Castle Avenue"] },
    { question: "Where is Clontarf Hospital?", options: ["Blackheath Park", "Vernon Avenue", "Castle Avenue", "Clontarf Road"], correct: ["Blackheath Park"] },
    { question: "Where is the Central Remedial Clinic?", options: ["Vernon Avenue", "Clontarf Road", "Castle Avenue", "Seafield Road"], correct: ["Vernon Avenue"] },
    { question: "Which road leads to North Bull Island?", options: ["Causeway Road", "Clontarf Road", "Howth Road", "Coast Road"], correct: ["Causeway Road"] },
    { question: "Where is Saint Anne’s Golf Club?", options: ["North Bull Island, Dollymount", "Howth", "Raheny", "Clontarf"], correct: ["North Bull Island, Dollymount"] },
    { question: "Where is the Royal Dublin Club?", options: ["North Bull Island, Dollymount", "Sutton", "Howth", "Raheny"], correct: ["North Bull Island, Dollymount"] },
    { question: "Where is the Nature Reserve?", options: ["North Bull Island, Dollymount", "Howth", "Portmarnock", "Raheny"], correct: ["North Bull Island, Dollymount"] },
    { question: "Where is Saint Anne’s Park?", options: ["Mount Prospect Avenue, Dollymount", "Howth Road", "Vernon Avenue", "Clontarf Road"], correct: ["Mount Prospect Avenue, Dollymount"] },
    { question: "What areas will be on your route from North Bull Island to Portmarnock?", options: ["Kilbarrack", "Sutton", "Baldoyle", "Coolock"], correct: ["Kilbarrack", "Sutton", "Baldoyle"] },
    { question: "From North Bull Island to Portmarnock, which areas are not on your route?", options: ["Coolock", "Clarehall", "Kilbarrack", "Baldoyle"], correct: ["Coolock", "Clarehall"] },
    { question: "Where is Saint Francis Hospice?", options: ["Station Road, Raheny", "Howth Road", "Clontarf Road", "Vernon Avenue"], correct: ["Station Road, Raheny"] },
    { question: "What is the nearest DART station to the Casino in Marino?", options: ["Clontarf", "Howth", "Raheny", "Killester"], correct: ["Clontarf"] },
    { question: "Where is Howth DART Station?", options: ["Howth Road", "Station Road", "Carrickbrack Road", "Greenfield Road"], correct: ["Howth Road"] },
    { question: "Where is the Marine Hotel?", options: ["Sutton", "Howth", "Portmarnock", "Raheny"], correct: ["Sutton"] },
    { question: "Where is Howth Summit?", options: ["Thormanby Road", "Carrickbrack Road", "Greenfield Road", "Howth Road"], correct: ["Thormanby Road"] },
    { question: "Where is the National Transport Museum?", options: ["Deerpark, Howth", "Sutton", "Portmarnock", "Raheny"], correct: ["Deerpark, Howth"] },
    { question: "Where is Howth Golf Club?", options: ["Carrickbrack Road", "Greenfield Road", "Howth Road", "Station Road"], correct: ["Carrickbrack Road"] },
    { question: "Where is Portmarnock DART Station?", options: ["Station Road", "Coast Road", "Grange Road", "Springdale Road"], correct: ["Station Road"] },
    { question: "Where is the Whitesands Hotel?", options: ["Coast Road", "Station Road", "Howth Road", "Grange Road"], correct: ["Coast Road"] },
    { question: "Which road runs from Baldoyle to Portmarnock?", options: ["Coast Road", "Grange Road", "Howth Road", "Station Road"], correct: ["Coast Road"] },
    { question: "Which road runs from Baldoyle to Donaghmede?", options: ["Grange Road", "Springdale Road", "Howth Road", "Coast Road"], correct: ["Grange Road"] },
    { question: "Which road runs from Kilbarrack to Donaghmede?", options: ["Grange Road", "Springdale Road", "Howth Road", "Station Road"], correct: ["Grange Road"] },
    { question: "Which road runs from Raheny to Edenmore?", options: ["Springdale Road", "Howth Road", "Grange Road", "Coast Road"], correct: ["Springdale Road"] },
    { question: "Where is Saint Joseph’s Hospital?", options: ["Springdale Road", "Howth Road", "Station Road", "Grange Road"], correct: ["Springdale Road"] },
    { question: "From Howth Summit to Portmarnock, what is not on your route?", options: ["Warrenhouse Road", "Sutton", "Baldoyle", "Kilbarrack"], correct: ["Warrenhouse Road"] },
    { question: "From Parnell Street to North Bull Island, what is not on your route?", options: ["Howth Road", "Clontarf Road", "Causeway Road", "Amiens Street"], correct: ["Howth Road"] },
    { question: "Which roads are adjoining to Carrickbrack Road?", options: ["Greenfield Road", "Old Carrickbrack Road", "Saint Fintan’s Road", "Howth Road"], correct: ["Greenfield Road", "Old Carrickbrack Road", "Saint Fintan’s Road"] },
    { question: "From Sutton to Phoenix Park, which areas are on your route?", options: ["Kilbarrack", "Artane", "Glasnevin", "Howth"], correct: ["Kilbarrack", "Artane", "Glasnevin"] },
    { question: "From Marino to Howth, which area is not on your route?", options: ["Coolock", "Clontarf", "Raheny", "Sutton"], correct: ["Coolock"] },
    { question: "From Marino to Malahide, which area is not on your route?", options: ["Whitehall", "Coolock", "Artane", "Raheny"], correct: ["Whitehall"] },
    { question: "Carrickbrack Road becomes which road?", options: ["Greenfield Road", "Howth Road", "Station Road", "Thormanby Road"], correct: ["Greenfield Road"] },
        { question: "On the Coast Road from Portmarnock to Swords, which area is on your route?", options: ["Malahide", "Howth", "Sutton", "Raheny"], correct: ["Malahide"] },
    { question: "Which road does not cross the Santry River?", options: ["Oscar Traynor Road", "Swords Road", "Malahide Road", "Collins Avenue"], correct: ["Oscar Traynor Road"] },
    { question: "Which road runs from Fairview to Howth?", options: ["Howth Road", "Clontarf Road", "Malahide Road", "Collins Avenue"], correct: ["Howth Road"] },
    { question: "Which roads are adjoining to Sybil Hill Road?", options: ["Howth Road", "Vernon Avenue", "Clontarf Road", "Castle Avenue"], correct: ["Howth Road", "Vernon Avenue"] },
    { question: "Which roads are adjoining to Howth Road?", options: ["Collins Avenue East", "Sybil Hill Road", "Watermill Road", "Station Road", "Kilbarrack Road", "Clontarf Road"], correct: ["Collins Avenue East", "Sybil Hill Road", "Watermill Road", "Station Road", "Kilbarrack Road"] },
    { question: "Where is Parnell Park?", options: ["Donnycarney", "Fairview", "Drumcondra", "Marino"], correct: ["Donnycarney"] },
    { question: "Where is Saint Vincent’s GAA Club?", options: ["Marino", "Clontarf", "Fairview", "Drumcondra"], correct: ["Marino"] },
    { question: "Which road runs from Fairview to Malahide?", options: ["Malahide Road", "Howth Road", "Clontarf Road", "Collins Avenue"], correct: ["Malahide Road"] },
    { question: "Which road runs from Donnycarney to Killester?", options: ["Collins Avenue East", "Collins Avenue West", "Malahide Road", "Howth Road"], correct: ["Collins Avenue East"] },
    { question: "Which road runs from Coolock to Kilbarrack?", options: ["Oscar Traynor Road", "Malahide Road", "Howth Road", "Collins Avenue"], correct: ["Oscar Traynor Road"] },
    { question: "Which road runs from Baldoyle to Donaghmede?", options: ["Grange Road", "Springdale Road", "Coast Road", "Howth Road"], correct: ["Grange Road"] },
    { question: "Where is Northside Shopping Centre?", options: ["Oscar Traynor Road, Coolock", "Malahide Road, Marino", "Howth Road, Raheny", "Grange Road, Donaghmede"], correct: ["Oscar Traynor Road, Coolock"] },
    { question: "Where is Marino Casino?", options: ["Malahide Road, Marino", "Howth Road, Marino", "Clontarf Road, Marino", "Collins Avenue, Marino"], correct: ["Malahide Road, Marino"] },
    { question: "Where is Mount Temple School?", options: ["Malahide Road, Clontarf", "Howth Road, Raheny", "Collins Avenue, Marino", "Clontarf Road, Fairview"], correct: ["Malahide Road, Clontarf"] },
     { question: "Where is the Clontarf Golf Club entrance?", options: ["Malahide Road, Clontarf", "Clontarf Road", "Howth Road", "Castle Avenue"], correct: ["Malahide Road, Clontarf"] }
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