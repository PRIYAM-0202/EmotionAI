// =============================
// Character Counter
// =============================

const textarea = document.getElementById("emotionText");
const counter = document.getElementById("count");

if (textarea) {
    textarea.addEventListener("input", () => {
        counter.textContent = textarea.value.length;
    });
}

// =============================
// Example Chips
// =============================

function fillText(element) {
    textarea.value = element.innerText;
    counter.textContent = textarea.value.length;
    textarea.focus();
}

// Make function available globally
window.fillText = fillText;


// =============================
// Loading Animation
// =============================

const form = document.querySelector("form");
const button = document.querySelector("button");

if (form) {

    form.addEventListener("submit", function () {

        button.disabled = true;

        button.innerHTML = `
        <span class="loader"></span>
        Analyzing Emotion...
        `;

    });

}

// =============================
// Mouse Glow Effect
// =============================

const glow = document.createElement("div");

glow.className = "cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

// =============================
// Animate Progress Bar
// =============================

const progress = document.querySelector(".progress-fill");

if (progress) {

    progress.style.width = "0";

    setTimeout(() => {

        progress.style.width = "85%";

    }, 400);

}

// =============================
// Typewriter Animation
// =============================

const emotion = document.querySelector(".result-card h1");

if (emotion) {

    const text = emotion.innerText;

    emotion.innerHTML = "";

    let i = 0;

    function type() {

        if (i < text.length) {

            emotion.innerHTML += text.charAt(i);

            i++;

            setTimeout(type, 120);

        }

    }

    type();

}

// =============================
// Scroll Animation
// =============================

const cards = document.querySelectorAll(".glass-card,.result-card,.step");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

cards.forEach(card=>observer.observe(card));
const emotionTitle = document.querySelector(".result-card h1");

if (emotionTitle) {

    const emotion = emotionTitle.innerText.toLowerCase();

    const body = document.body;

    switch(emotion){

        case "joy":
            body.style.background =
            "linear-gradient(135deg,#0f172a,#facc15)";
            break;

        case "sadness":
            body.style.background =
            "linear-gradient(135deg,#0f172a,#2563eb)";
            break;

        case "anger":
            body.style.background =
            "linear-gradient(135deg,#0f172a,#dc2626)";
            break;

        case "fear":
            body.style.background =
            "linear-gradient(135deg,#0f172a,#7c3aed)";
            break;

        case "love":
            body.style.background =
            "linear-gradient(135deg,#0f172a,#ec4899)";
            break;

        case "surprise":
            body.style.background =
            "linear-gradient(135deg,#0f172a,#06b6d4)";
            break;

    }

}
const result = document.getElementById("result");

function showResult(emotion){

    showResult(emotion);


    result.style.animation = "none";

    setTimeout(()=>{
        result.style.animation = "pop 0.5s";
    },10);

}
// Cursor Glow
const glow = document.createElement("div");
glow.classList.add("cursor-glow");
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

// Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".glass-card, .result-card, .examples, .hero").forEach((el) => {
    observer.observe(el);
});