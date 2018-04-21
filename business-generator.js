const techPrefixes = [
    "network",
    "systems",
    "global",
    "visual",
    "financial",
    "collaborative",
    "wireless",
    "analytics",
    "cross-platform",
    "market",
    "server",
    "regional",
    "DVD-ROM",
    "CD-ROM",
    "experimental",
    "memory",
    "developmental",
    "tech-friendly",
    "wifi",
    "corporate",
    "software",
    "hardware",
    "profit & loss",
    "enterprise",
    "strategic",
    "high-level",
    "lower-level",
    "computer",
    "analytical",
    "hard drive",
    "multi-user"
];

const techActions = [
    "integrations",
    "reporting",
    "reliability",
    "data centers",
    "forecasting",
    "operations",
    "analysis",
    "focus groups",
    "identification",
    "distribution centers",
    "practices",
    "management",
    "planning and research",
    "standards and policies",
];

function getRandomArrayItem(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

function saySomething(msg) {
    /* Now say something */
    const speechMsg = new SpeechSynthesisUtterance(msg);
    const voices = window.speechSynthesis.getVoices();
    speechMsg.voice = getRandomArrayItem(voices);
    speechMsg.volume = 0.9;
    window.speechSynthesis.speak(speechMsg);
}

function updateTechPhrase() {
    let phrase = document.getElementById("TechPhrase").innerText;
    let newPhrase = getRandomArrayItem(techPrefixes) + " " + getRandomArrayItem(techActions);
    // get a UNIQUE new phrase
    while(phrase === newPhrase) {
        newPhrase = getRandomArrayItem(techPrefixes) + " " + getRandomArrayItem(techActions);
    }
    document.getElementById("TechPhrase").innerText = newPhrase;
    saySomething(newPhrase);
}

function setUpAudio() {
    // take care of playing audio
    const audioElement = document.getElementById("AudioPlayer")
    audioElement.volume = 0.5;
}

function setUpNewPhraseButton() {
    document.getElementById("NewPhrase").addEventListener("click", function(e) {
        e.preventDefault();
        updateTechPhrase();
    });
    // say the first things first
    saySomething(document.getElementById("Introduction").innerText);
}

document.addEventListener("DOMContentLoaded", function() {
    setUpAudio();
    setUpNewPhraseButton();
    updateTechPhrase(); // generate the first phrase
});