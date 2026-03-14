const questions = [
    { question: "What areas will be on your route from Santry to Sutton (Choose Multiple Answers)?", options: ["Donaghmede", "Baldoyle", "Coolock", "Raheny"], correct: ["Donaghmede", "Baldoyle"] },
    { question: "Between which two roads is the Archbishop’s House located?", options: ["Drumcondra Road Lower", "Clonliffe Road", "Grace Park Road", "Richmond Road"], correct: ["Drumcondra Road Lower", "Clonliffe Road"] },
    { question: "Which roads are adjoining to Griffith Avenue?", options: ["Saint Mobhi Road", "Ballymun Road", "Grace Park Road", "Malahide Road"], correct: ["Saint Mobhi Road", "Ballymun Road"] },
    { question: "Which road runs from Glasnevin to Ballymun?", options: ["Ballymun Road", "Griffith Avenue", "Botanic Road", "Swords Road"], correct: ["Ballymun Road"] },
    { question: "Which road connects Botanic Road and Drumcondra Road Lower?", options: ["Botanic Avenue", "Clonliffe Road", "Griffith Avenue", "Ballymun Road"], correct: ["Botanic Avenue"] },
    { question: "Where is the Met Éireann Office?", options: ["Glasnevin Hill, Glasnevin", "Griffith Avenue, Drumcondra", "Ballymun Road, Ballymun", "Swords Road, Whitehall"], correct: ["Glasnevin Hill, Glasnevin"] },
    { question: "Where are the Botanic Gardens?", options: ["Botanic Road, Glasnevin", "Glasnevin Hill, Glasnevin", "Ballymun Road, Ballymun", "Swords Road, Whitehall"], correct: ["Botanic Road, Glasnevin"] },
    { question: "Where is Bon Secours Hospital?", options: ["Glasnevin Hill, Glasnevin", "Botanic Road, Glasnevin", "Ballymun Road, Ballymun", "Swords Road, Whitehall"], correct: ["Glasnevin Hill, Glasnevin"] },
    { question: "Which road runs from the city to Donabate, Dundalk, Belfast, Balbriggan, Skerries, Lusk and Rush?", options: ["M1", "N1", "N2", "M50"], correct: ["M1"] },
    { question: "Where is the Accident and Emergency entrance for the Mater Hospital?", options: ["Eccles Street", "Dorset Street", "North Circular Road", "Gardiner Street"], correct: ["Eccles Street"] },
        { question: "Where is the Glasnevin Visitor Museum?", options: ["Finglas Road, Glasnevin", "Botanic Road, Glasnevin", "Glasnevin Hill, Glasnevin", "Ballymun Road"], correct: ["Finglas Road, Glasnevin"] },
    { question: "Where is Glasnevin Cemetery?", options: ["Finglas Road, Glasnevin", "Botanic Road, Glasnevin", "Glasnevin Hill, Glasnevin", "Ballymun Road"], correct: ["Finglas Road, Glasnevin"] },
    { question: "Which road runs from Glasnevin to Finglas?", options: ["Finglas Road", "Ballymun Road", "Botanic Road", "Swords Road"], correct: ["Finglas Road"] },
    { question: "Which road runs from Phibsborough to Finglas?", options: ["Finglas Road", "Cabra Road", "Ballymun Road", "North Circular Road"], correct: ["Finglas Road"] },
    { question: "Where is Mellows Park?", options: ["Finglas", "Ballymun", "Glasnevin", "Cabra"], correct: ["Finglas"] },
    { question: "Which road runs from the city to Ashbourne?", options: ["N2", "M1", "N3", "M50"], correct: ["N2"] },
    { question: "Which road runs from Finglas to Poppintree?", options: ["Jamestown Road", "Ballymun Road", "Finglas Road", "Cardiffbridge Road"], correct: ["Jamestown Road"] },
    { question: "Which roads are adjoining to Jamestown Road?", options: ["Seamus Ennis Road", "Sycamore Road", "Poppintree Park Lane West", "Ballymun Road"], correct: ["Seamus Ennis Road", "Sycamore Road", "Poppintree Park Lane West"] },
    { question: "Which road is adjoining to North Road?", options: ["M50", "Ballymun Road", "Finglas Road", "N2"], correct: ["M50"] },
    { question: "From Glasnevin to Dublin Airport, which third-level institute is on your route?", options: ["DCU", "Trinity College", "UCD", "TU Dublin"], correct: ["DCU"] },
    { question: "From Cappagh Hospital to Mountjoy Square, which areas are on your route?", options: ["Finglas", "Drumcondra", "Cabra", "Ashtown"], correct: ["Finglas", "Drumcondra"] },
    { question: "From Cappagh Hospital to Mountjoy Square, which areas are not on your route?", options: ["Ashtown", "Stoneybatter", "Drumcondra", "Finglas"], correct: ["Ashtown", "Stoneybatter"] },
    { question: "From Ballyfermot to Blanchardstown, which areas are on your route?", options: ["Palmerstown", "Castleknock", "Cabra", "Finglas"], correct: ["Palmerstown", "Castleknock"] },
    { question: "Which road is not along the Tolka River?", options: ["Cardiffbridge Road", "Finglas Road", "Ballymun Road", "Botanic Road"], correct: ["Cardiffbridge Road"] },
    { question: "Which two roads are not adjoining to Ratoath Road?", options: ["Cardiffbridge Road", "Ballycoolin Road", "Finglas Road", "Ballymun Road"], correct: ["Cardiffbridge Road", "Ballycoolin Road"] },
    { question: "Where is Dunsink Observatory?", options: ["Dunsink Lane, Castleknock", "Navan Road, Cabra", "Ratoath Road, Finglas", "Snugborough Road"], correct: ["Dunsink Lane, Castleknock"] },
    { question: "Where is Elm Green Golf Club?", options: ["Dunsink Lane, Castleknock", "Navan Road, Cabra", "Snugborough Road", "Blanchardstown"], correct: ["Dunsink Lane, Castleknock"] },
    { question: "Where is Elm Green Nursing Home?", options: ["Dunsink Lane, Castleknock", "Navan Road, Cabra", "Snugborough Road", "Blanchardstown"], correct: ["Dunsink Lane, Castleknock"] },
    { question: "Which road runs from Cabra to Finglas South?", options: ["Ratoath Road", "Navan Road", "Ballymun Road", "Cardiffbridge Road"], correct: ["Ratoath Road"] },
    { question: "Which road runs from Cabra to Finglas West?", options: ["Ratoath Road", "Navan Road", "Ballymun Road", "Cardiffbridge Road"], correct: ["Ratoath Road"] },
    { question: "Which road runs from Cabra to Ashtown?", options: ["Navan Road", "Ratoath Road", "Ballymun Road", "Snugborough Road"], correct: ["Navan Road"] },
    { question: "Which road runs from Cabra to Blanchardstown?", options: ["Navan Road", "Ratoath Road", "Snugborough Road", "Castleknock Road"], correct: ["Navan Road"] },
    { question: "Which road runs from Castleknock to Blanchardstown?", options: ["Castleknock Road", "Navan Road", "Snugborough Road", "Clonsilla Road"], correct: ["Castleknock Road"] },
    { question: "Which road runs from Ashtown to Finglas South?", options: ["River Road", "Navan Road", "Ratoath Road", "Snugborough Road"], correct: ["River Road"] },
    { question: "Which road runs from Blanchardstown to Finglas South?", options: ["River Road", "Snugborough Road", "Navan Road", "Castleknock Road"], correct: ["River Road"] },
    { question: "Which road runs from Castleknock to Finglas South?", options: ["River Road", "Navan Road", "Ratoath Road", "Snugborough Road"], correct: ["River Road"] },
    { question: "Which road runs from Clonsilla to Blanchardstown?", options: ["Clonsilla Road", "Snugborough Road", "Castleknock Road", "Navan Road"], correct: ["Clonsilla Road"] },
    { question: "Which road runs from the city to Blanchardstown, Cavan, Navan, Mulhuddart, Clonee and Dunboyne?", options: ["N3", "M1", "N2", "M50"], correct: ["N3"] },
    { question: "Where is Cabra Garda Station?", options: ["Nephin Road", "Navan Road", "Ratoath Road", "Fassaugh Avenue"], correct: ["Nephin Road"] },
    { question: "Which road is adjoining to Nephin Road?", options: ["Navan Road", "Ratoath Road", "Fassaugh Avenue", "Cardiffbridge Road"], correct: ["Navan Road"] },
    { question: "Where is Kinvara Residential Estate?", options: ["Navan Road", "Ratoath Road", "Snugborough Road", "Castleknock"], correct: ["Navan Road"] },
    { question: "Where is Connolly Hospital?", options: ["Blanchardstown", "Castleknock", "Ashtown", "Mulhuddart"], correct: ["Blanchardstown"] },
    { question: "Where is Cappagh Hospital (National Orthopaedic Hospital)?", options: ["Cappagh Road, Finglas", "Navan Road, Cabra", "Ratoath Road, Finglas", "Snugborough Road"], correct: ["Cappagh Road, Finglas"] },
    { question: "Where is the Hole in the Wall Pub?", options: ["Blackhorse Avenue", "Navan Road", "Snugborough Road", "Castleknock Road"], correct: ["Blackhorse Avenue"] },
    { question: "Where is the National Aquatic Centre?", options: ["Snugborough Road", "Navan Road", "Castleknock Road", "Clonsilla Road"], correct: ["Snugborough Road"] },
    { question: "Which road runs from Blanchardstown to Corduff?", options: ["Snugborough Road", "Navan Road", "Clonsilla Road", "Castleknock Road"], correct: ["Snugborough Road"] },
    { question: "Which road runs from Clonsilla to Mulhuddart?", options: ["Blakestown Road", "Snugborough Road", "Navan Road", "Clonsilla Road"], correct: ["Blakestown Road"] },
    { question: "Which road runs from Hartstown to Mulhuddart?", options: ["Blakestown Road", "Snugborough Road", "Navan Road", "Clonsilla Road"], correct: ["Blakestown Road"] },
    { question: "Which road runs from Huntstown to Mulhuddart?", options: ["Blakestown Road", "Snugborough Road", "Navan Road", "Clonsilla Road"], correct: ["Blakestown Road"] },
    { question: "Which road runs from Mulhuddart to the city?", options: ["R147", "N3", "M50", "Navan Road"], correct: ["R147"] },
    { question: "Where is Weaver’s Row?", options: ["Clonsilla", "Blanchardstown", "Mulhuddart", "Castleknock"], correct: ["Clonsilla"] },
    { question: "Which road runs from Clonsilla to Corduff?", options: ["Snugborough Road", "Clonsilla Road", "Blakestown Road", "Navan Road"], correct: ["Snugborough Road"] },
    { question: "Which road runs from Castleknock to Ashtown?", options: ["Castleknock Road", "Navan Road", "Snugborough Road", "River Road"], correct: ["Castleknock Road"] }
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