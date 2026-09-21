const opening =
    document.getElementById("opening");

const birthday =
    document.getElementById("birthday");

const memory =
    document.getElementById("memory");

const letter =
    document.getElementById("letter");

const final =
    document.getElementById("final");


/* OPEN */

function openGift() {

    opening.classList.add("hidden");

    birthday.classList.remove("hidden");

    createHearts();
}


/* PHOTO */

function showMemory() {

    birthday.classList.add("hidden");

    memory.classList.remove("hidden");

    createHearts();
}


/* LETTER */

function showLetter() {

    memory.classList.add("hidden");

    letter.classList.remove("hidden");

    createHearts();
}


/* LAST SURPRISE */

function lastSurprise() {

    letter.classList.add("hidden");

    final.classList.remove("hidden");

    createHearts();
}


/* WISH */

function wish() {

    const message =
        document.getElementById("wishMessage");

    message.innerHTML =
        `
        ✨ Wish sent! ✨
        <br><br>
        Semoga satu per satu hal yang kamu
        harapkan tahun ini bisa jadi nyata.
        <br>
        Happy birthday once again, Azzam. 🤍
        `;

    createHearts();

    createHearts();

}


/* FLOATING HEARTS */

function createHearts() {

    for (let i = 0; i < 20; i++) {

        const heart =
            document.createElement("div");

        heart.className = "heart";

        const icons = [
            "♡",
            "♥",
            "✨",
            "🤍",
            "🌸"
        ];

        heart.innerHTML =
            icons[
                Math.floor(
                    Math.random() *
                    icons.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (15 + Math.random() * 20) + "px";

        heart.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 6000);
    }
}
