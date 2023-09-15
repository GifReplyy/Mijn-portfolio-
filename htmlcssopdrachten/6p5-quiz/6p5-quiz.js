var vragen = [
{
    vraag: "Wat is de hoofdstad van Spanje?",
    opties: ["0 Londen", "1 Parijs", "2 Madrid", "3 Berlijn"],
    juisteAntwoord: 2
},
{
    vraag: "Welke oceaan is de grootste ter wereld?",
    opties: ["0 Indische Oceaan", "1 Atlantische Oceaan", "2 Stille Oceaan", "3 Noordelijke IJszee"],
    juisteAntwoord: 2
},
{
    vraag: "Wie heeft de relativiteitstheorie ontwikkeld?",
    opties: ["0 Albert Einstein", "1 Isaac Newton", "2 Galileo Galilei", "3 Nikola Tesla"],
    juisteAntwoord: 0
},
{
    vraag: "Welke planeet staat het dichtst bij de zon?",
    opties: ["0 Venus", "1 Aarde", "2 Mars", "3 Mercurius"],
    juisteAntwoord: 3
},
{
    vraag: "Hoeveel continenten zijn er op aarde?",
    opties: ["0 5", "1 6", "2 7", "3 8"],
    juisteAntwoord: 2
},
{
    vraag: "Wie schreef de beroemde tragedie 'Romeo en Julia'?",
    opties: ["0 William Shakespeare", "1 Charles Dickens", "2 Mark Twain", "3 Jane Austen"],
    juisteAntwoord: 0
},
{
    vraag: "Welk element is het meest voorkomende in de aardkorst?",
    opties: ["0 Koolstof", "1 Zuurstof", "2 Silicium", "3 Waterstof"],
    juisteAntwoord: 1
},
{
    vraag: "In welk jaar vond de eerste maanlanding plaats?",
    opties: ["0 1964", "1 1969", "2 1972", "3 1981"],
    juisteAntwoord: 1
},
{
    vraag: "Hoeveel benen heeft een spin?",
    opties: ["0 4", "1 6", "2 8", "3 10"],
    juisteAntwoord: 2
},
{
    vraag: "Welke schilder sneed zijn eigen oor af?",
    opties: ["0 Vincent van Gogh", "1 Leonardo da Vinci", "2 Pablo Picasso", "3 Michelangelo"],
    juisteAntwoord: 0
},
{
    vraag: "Welke kleur krijg je als je blauw en geel mengt?",
    opties: ["0 Rood", "1 Paars", "2 Groen", "3 Oranje"],
    juisteAntwoord: 2
},
{
    vraag: "Hoeveel procent van het menselijk lichaam bestaat uit water?",
    opties: ["0 30%", "1 50%", "2 70%", "3 90%"],
    juisteAntwoord: 2
}
];

var currentQuestion = 0;
var score = 0;

var quizContainer = document.getElementById("quiz-container");
var resultContainer = document.getElementById("result-container");
var progressElement = document.getElementById("progress");
var questionElement = document.getElementById("question");
var optionsElement = document.getElementById("options");
var scoreElement = document.getElementById("score");
var nextButton = document.getElementById("next-btn");

function showQuestion() {
var question = vragen[currentQuestion];
questionElement.textContent = "Vraag " + (currentQuestion + 1) + ": " + question.vraag;

optionsElement.innerHTML = "";
for (var i = 0; i < question.opties.length; i++) {
    var option = document.createElement("div");
    option.className = "option";
    option.textContent = question.opties[i];
    option.setAttribute("data-index", i);
    optionsElement.appendChild(option);
}

progressElement.textContent = (currentQuestion + 1) + "/" + vragen.length;
}


function checkAnswer(selectedIndex) {
    var question = vragen[currentQuestion];
    var correctAnswer = question.juisteAntwoord;

    if (selectedIndex === correctAnswer) {
    score++;
    }
}

function showResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    scoreElement.textContent = "Je score is " + score + " van de " + vragen.length + " vragen.";
}

function nextQuestion() {
    var selectedOption = optionsElement.querySelector(".selected");
    if (selectedOption) {
    var selectedIndex = parseInt(selectedOption.getAttribute("data-index"));
    checkAnswer(selectedIndex);
    }

    currentQuestion++;

    if (currentQuestion === vragen.length) {
    showResult();
    } else {
    showQuestion();
    }
}

optionsElement.addEventListener("click", function(e) {
    var selectedOption = optionsElement.querySelector(".selected");
    if (selectedOption) {
    selectedOption.classList.remove("selected");
    }
    if (e.target && e.target.matches(".option")) {
    e.target.classList.add("selected");
    }
});

nextButton.addEventListener("click", nextQuestion);

showQuestion();