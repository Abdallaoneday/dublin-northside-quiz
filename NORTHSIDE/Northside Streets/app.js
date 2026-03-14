const questions = [
        { question: "Which road is adjoining to Blackhorse Avenue?", options: ["North Circular Road", "Navan Road", "Fassaugh Avenue", "Ballymun Road"], correct: ["North Circular Road"] },
    { question: "Which street is not adjoining to King Street North?", options: ["Henrietta Street", "Bolton Street", "Church Street", "St Michan’s Street"], correct: ["Henrietta Street"] },
    { question: "Which street is not adjoining to Brunswick Street North?", options: ["Arbour Hill", "Smithfield", "Church Street", "Queen Street"], correct: ["Arbour Hill"] },
    { question: "Which street is not adjoining to Marlborough Street?", options: ["Parnell Place", "Talbot Street", "Abbey Street Lower", "O’Connell Street"], correct: ["Parnell Place"] },
    { question: "Which streets are not adjoining to Marlborough Street  (Select Multiple Answers)?", options: ["Parnell Street", "Abbey Street Lower", "Talbot Street", "O’Connell Street"], correct: ["Parnell Street", "Abbey Street Lower", "Talbot Street"] },
    { question: "Which streets are not adjoining to Amiens Street (Select Multiple Answers)?", options: ["Ossory Road", "Killarney Street", "Talbot Street", "Mayor Street"], correct: ["Ossory Road", "Killarney Street"] },
    { question: "Where is the Belvedere Hotel?", options: ["Great Denmark Street", "O’Connell Street", "Parnell Street", "Talbot Street"], correct: ["Great Denmark Street"] },
    { question: "Where is the Barry Hotel?", options: ["Great Denmark Street", "O’Connell Street", "Parnell Street", "Talbot Street"], correct: ["Great Denmark Street"] },
    { question: "Where is the Boardwalk Pub?", options: ["Bachelors Walk", "Eden Quay", "Ormond Quay Lower", "Custom House Quay"], correct: ["Bachelors Walk"] },
    { question: "Which streets are not adjoining to North Wall Quay (Select Multiple Answers)?", options: ["Mayor Street Upper", "Sheriff Street Upper", "Guild Street", "Custom House Quay"], correct: ["Mayor Street Upper", "Sheriff Street Upper"] },
    { question: "Which road does not cross the Royal Canal?", options: ["East Wall Road", "Cross Guns Bridge", "Phibsborough Road", "North Circular Road"], correct: ["East Wall Road"] },
    { question: "Where is the Ripley Court Hotel?", options: ["Talbot Street", "O’Connell Street", "Parnell Street", "Amiens Street"], correct: ["Talbot Street"] },
    { question: "Where is the Morrison Hotel?", options: ["Ormond Quay Lower", "Bachelors Walk", "Eden Quay", "Custom House Quay"], correct: ["Ormond Quay Lower"] },
    { question: "Where is the Millennium Bridge?", options: ["Ormond Quay Lower", "Bachelors Walk", "Eden Quay", "Wood Quay"], correct: ["Ormond Quay Lower"] },
    { question: "Where is the Woollen Mills?", options: ["Ormond Quay Lower", "Eden Quay", "Bachelors Walk", "Custom House Quay"], correct: ["Ormond Quay Lower"] },
    { question: "Where is the Criminal Court of Justice?", options: ["Parkgate Street", "Inns Quay", "Wood Quay", "Phoenix Park"], correct: ["Parkgate Street"] },
    { question: "Where is Isaacs Hostel?", options: ["Frenchman’s Lane", "Talbot Street", "Gardiner Street", "Amiens Street"], correct: ["Frenchman’s Lane"] },
    { question: "Where is the North Star Hotel?", options: ["Amiens Street", "Talbot Street", "Gardiner Street", "Mayor Street"], correct: ["Amiens Street"] },
    { question: "Where is Connolly Station?", options: ["Amiens Street", "Talbot Street", "Gardiner Street", "O’Connell Street"], correct: ["Amiens Street"] },
    { question: "Where are the Four Courts?", options: ["Inns Quay", "Wood Quay", "Ormond Quay Lower", "Parkgate Street"], correct: ["Inns Quay"] },
    { question: "Between which streets is Sean McDermott Street Lower situated (Select Multiple Answers)?", options: ["Buckingham Street Upper", "Gardiner Street Lower", "Amiens Street", "Talbot Street"], correct: ["Buckingham Street Upper", "Gardiner Street Lower"] },
    { question: "Where is the A&E entrance to the Mater Hospital?", options: ["Eccles Street", "Dorset Street", "North Circular Road", "Gardiner Street"], correct: ["Eccles Street"] },
        { question: "Between which two streets is Parnell Street situated (Select Multiple Answers)?", options: ["Capel Street", "Gardiner Street", "O’Connell Street", "Marlborough Street"], correct: ["Capel Street", "Gardiner Street"] },
    { question: "Parnell Street runs one-way between which streets?", options: ["Jervis Street", "Wolfe Tone Street", "O’Connell Street", "Marlborough Street"], correct: ["Jervis Street", "Wolfe Tone Street"] },
    { question: "Which streets are not pedestrianised (Select Multiple Answers)?", options: ["Parnell Street", "Mary Street", "Henry Street", "Grafton Street"], correct: ["Parnell Street", "Mary Street"] },
    { question: "Where is the Gate Theatre?", options: ["Cavendish Row", "Parnell Square", "O’Connell Street", "Abbey Street"], correct: ["Cavendish Row"] },
    { question: "Where is the Rotunda Hospital?", options: ["Parnell Square West", "Parnell Street", "O’Connell Street", "Marlborough Street"], correct: ["Parnell Square West"] },
    { question: "Where is the National Leprechaun Museum?", options: ["Jervis Street", "Capel Street", "Abbey Street", "Henry Street"], correct: ["Jervis Street"] },
    { question: "Where is Liberty Hall?", options: ["Eden Quay", "Custom House Quay", "Bachelors Walk", "Ormond Quay"], correct: ["Eden Quay"] },
    { question: "Which streets are not adjoining to Gardiner Street Upper (Select Multiple Answers)?", options: ["Greenville Lane", "Hill Street", "Talbot Street", "Mountjoy Square"], correct: ["Greenville Lane", "Hill Street"] },
    { question: "Where is the GPO (General Post Office)?", options: ["O’Connell Street", "Abbey Street", "Henry Street", "Parnell Street"], correct: ["O’Connell Street"] },
    { question: "Which street runs one-way between Portland Row and Buckingham Street Upper?", options: ["Killarney Street", "Amiens Street", "Gardiner Street", "Talbot Street"], correct: ["Killarney Street"] },
    { question: "Which quay is not on the north side of the River Liffey?", options: ["Wood Quay", "Eden Quay", "Ormond Quay Lower", "Custom House Quay"], correct: ["Wood Quay"] },
    { question: "Where is the Convention Centre?", options: ["Spencer Dock, North Wall Quay", "Custom House Quay", "Guild Street", "Mayor Street"], correct: ["Spencer Dock, North Wall Quay"] },
    { question: "Where is the 3Arena?", options: ["North Wall Quay", "Custom House Quay", "Spencer Dock", "Mayor Street"], correct: ["North Wall Quay"] },
    { question: "Where is the Abbey Theatre?", options: ["Abbey Street Lower", "Middle Abbey Street", "O’Connell Street", "Henry Street"], correct: ["Abbey Street Lower"] },
    { question: "Where is the Academy Club?", options: ["Middle Abbey Street", "Abbey Street Lower", "Henry Street", "Capel Street"], correct: ["Middle Abbey Street"] },
    { question: "From Heuston Station to the 3Arena, what is not on your route?", options: ["Burgh Quay", "Parkgate Street", "North Wall Quay", "Custom House Quay"], correct: ["Burgh Quay"] },
    { question: "From Heuston Station to Phoenix Park, Dublin Zoo, or the U.S. Ambassador’s Residence, what is not on your route (Select Multiple Answers)?", options: ["Infirmary Road", "Conyngham Road", "Parkgate Street", "Chesterfield Avenue"], correct: ["Infirmary Road", "Conyngham Road"] },
    { question: "From Heuston Station to Phibsborough Shopping Centre, what is not on your route?", options: ["Capel Street", "North Circular Road", "Phibsborough Road", "Parkgate Street"], correct: ["Capel Street"] },
    { question: "From Heuston Station to Drumcondra, what is not on your route (Select Multiple Answers)?", options: ["Parkgate Street", "Capel Street", "Constitution Hill", "North Circular Road"], correct: ["Parkgate Street", "Capel Street", "Constitution Hill"] },
    { question: "From Bolton Street to Abbey Street Lower, what is not on your route?", options: ["Capel Street", "O’Connell Street", "Marlborough Street", "Henry Street"], correct: ["Capel Street"] },
    { question: "From the Mater Private Hospital to the Hermitage Private Clinic, what is on your route (Select Multiple Answers)?", options: ["Victoria Quay", "Kilmainham", "Palmerstown", "N4"], correct: ["Victoria Quay", "Palmerstown", "N4"] },
    { question: "From O’Connell Street to Drumcondra, what is not the best route (Select Multiple Answers)?", options: ["Donnycarney", "Antrim Road", "Drumcondra Road", "Clonliffe Road"], correct: ["Donnycarney", "Antrim Road"] }
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