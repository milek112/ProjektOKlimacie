const pytania = [
    {
        pytanie: "Pytanie pierwsze",
        odpowiedzi: [
            { text: "Odp1", correct: false },
            { text: "Odp2", correct: false },
            { text: "Odp3 Prawidlowa", correct: true },
            { text: "Odp4", correct: false },
        ]
    },
    {
        pytanie: "Pytanie drugie",
        odpowiedzi: [
            { text: "Odpowiedz", correct: false },
            { text: "Odpowiedz", correct: false },
            { text: "Odpowiedz", correct: false },
            { text: "OdpowiedzP", correct: true },
        ]
    }
];

const pytanie = document.getElementById("question");
const odpowiedziPrzyciski = document.getElementById("answer-buttons");
const nastepny = document.getElementById("next-btn");

let numerPytania = 0;
let punkty = 0;

function startQuiz() {
    numerPytania = 0;
    punkty = 0;
    nastepny.innerHTML = "Nastepny";
    nastepny.style.display = "none";
    pokazPytanie();
}

function pokazPytanie() {
    odpowiedziPrzyciski.innerHTML = ""; // Czyszczenie poprzednich przycisków

    let numeryPytania = pytania[numerPytania];
    let kolejnePytania = numerPytania + 1;
    pytanie.innerHTML = kolejnePytania + ". " + numeryPytania.pytanie;

    // Tworzenie przycisków odpowiedzi
    numeryPytania.odpowiedzi.forEach(odpowiedzi => {
        const przycisk = document.createElement("button");
        przycisk.innerHTML = odpowiedzi.text;
        przycisk.classList.add("btn");
        odpowiedziPrzyciski.appendChild(przycisk);

        // Dodanie funkcji kliknięcia
        przycisk.addEventListener("click", () => {
            if (odpowiedzi.correct) {
                przycisk.classList.add("correct");
                punkty++;
            } else {
                przycisk.classList.add("incorrect");
            }
            // Wyłączenie wszystkich przycisków po zaznaczeniu odpowiedzi
            Array.from(odpowiedziPrzyciski.children).forEach(button => {
                button.disabled = true;
                // Oznaczenie poprawnej odpowiedzi na zielono
                if (numeryPytania.odpowiedzi.find(o => o.text === button.innerHTML && o.correct)) {
                    button.classList.add("correct");
                }
            });
            // Przechodzimy do następnego pytania lub kończymy quiz
            nastepny.style.display = "block";
            nastepny.addEventListener("click", () => {
                if (numerPytania < pytania.length - 1) {
                    numerPytania++;
                    pokazPytanie();
                } else {
                    pokazWynik();
                }
            });
        });
    });
}

function pokazWynik() {
    pytanie.innerHTML = "Twój wynik: " + punkty + " / " + pytania.length;
    odpowiedziPrzyciski.innerHTML = ""; // Usunięcie przycisków odpowiedzi
    nastepny.innerHTML = "Restart";
    nastepny.style.display = "block";
    nastepny.addEventListener("click", startQuiz);
}

startQuiz();
