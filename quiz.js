
    const pytania = [{pytanie: "Co to jest efekt cieplarniany?",odpowiedzi: [{ text: "Zjawisko polegające na nagłym ochłodzeniu klimatu", correct: false },{ text: "Proces, w którym Ziemia odbija wszystkie promienie słoneczne", correct: false },{ text: "Zjawisko zmniejszania się poziomu tlenu w atmosferze", correct: false },{ text: "Proces zatrzymywania ciepła w atmosferze przez gazy cieplarniane", correct: true },]},{pytanie: "Jaki jest najbardziej popularny materiał z recyklingu?",odpowiedzi: [{ text: "Drewno", correct: false },{ text: "Plastik", correct: true },{ text: "Kamień", correct: false },{ text: "Szkło", correct: false },]},{pytanie: "Co to jest smog?",odpowiedzi: [{ text: "Woda spływająca z gór", correct: false },{ text: "Zanieczyszczenie powietrza spowodowane przez emisje przemysłowe i samochodowe", correct: true },{ text: "Rodzaj gęstej mgły występującej na obszarach leśnych", correct: false },{ text: "Naturalne zjawisko atmosferyczne", correct: false },]},{pytanie: "Które z poniższych działań pomaga zmniejszyć zużycie plastiku?",odpowiedzi: [{ text: "Kupowanie produktów w plastikowych opakowaniach", correct: false },{ text: "Używanie plastikowych toreb wielokrotnego użytku", correct: false },{ text: " Wyrzucanie plastikowych odpadów do zwykłych śmieci", correct: false },{ text: "Używanie materiałowych toreb na zakupy", correct: true },]},{pytanie: "Który gaz jest główną przyczyną efektu cieplarnianego?",odpowiedzi: [{ text: "Dwutlenek węgla (CO₂)", correct: true },{ text: "Tlen", correct: false },{ text: "Azot", correct: false },{ text: "Hel", correct: false },]},{pytanie: "Jaka jest najbardziej zrównoważona metoda transportu?",odpowiedzi: [{ text: "Jazda samochodem na długie dystanse", correct: false },{ text: "Transport lotniczy", correct: false },{ text: "Jazda na rowerze lub spacery", correct: true },{ text: "Używanie materiałowych toreb na zakupy", correct: false },]},{pytanie: "Co oznacza skrót „OZE”?",odpowiedzi: [{ text: "Odnawialne Źródła Energii", correct: true },{ text: "Organizacja Zasobów Ekologicznych", correct: false },{ text: "Oszczędność Zielonej Energii", correct: false },{ text: "Ogólne Zasoby Energetyczne", correct: false },]},{pytanie: "Które działanie jest korzystne dla ochrony środowiska?",odpowiedzi: [{ text: "Mycie samochodu co tydzień", correct: false },{ text: "Wyłączanie światła po wyjściu z pokoju", correct: true },{ text: "Kupowanie produktów jednorazowych", correct: false },{ text: "Używanie jednorazowych plastikowych sztućców", correct: false },]},{pytanie: "Co oznacza „bioróżnorodność”?",odpowiedzi: [{ text: "Liczba zwierząt hodowlanych w danym obszarze", correct: false },{ text: "Liczba roślin uprawnych na polach", correct: false },{ text: "Różnorodność gatunków żyjących w danym ekosystemie", correct: true },{ text: "Ilość roślin doniczkowych w danym domu", correct: false },]},{pytanie: "Jakie działania pomagają w walce z globalnym ociepleniem?",odpowiedzi: [{ text: "Wzrost emisji CO₂", correct: false },{ text: "Wylesianie lasów tropikalnych", correct: false },{ text: "Sadzenie drzew", correct: true },{ text: "Wydobywanie większej ilości paliw kopalnyc", correct: false },]}];

const pytanie = document.getElementById("question");
const odpowiedziPrzyciski = document.getElementById("answer-buttons");
const nastepny = document.getElementById("next-btn");
const wroc = document.getElementById("powrot");

wroc.addEventListener("click", powroc);

let numerPytania = 0;
let punkty = 0;

function powroc() {
    window.location.href = "index.html";
}

function startQuiz() {
    numerPytania = 0;
    punkty = 0;
    nastepny.innerHTML = "Nastepny";
    nastepny.style.display = "none";
    wroc.style.display = "none"; 
    pokazPytanie();
}

function pokazPytanie() {
    odpowiedziPrzyciski.innerHTML = ""; 

    let numeryPytania = pytania[numerPytania];
    let kolejnePytania = numerPytania + 1;
    pytanie.innerHTML = kolejnePytania + ". " + numeryPytania.pytanie;

   
    numeryPytania.odpowiedzi.forEach(odpowiedzi => {
        const przycisk = document.createElement("button");
        przycisk.innerHTML = odpowiedzi.text;
        przycisk.classList.add("btn");
        odpowiedziPrzyciski.appendChild(przycisk);

        
        przycisk.addEventListener("click", () => {
            if (odpowiedzi.correct) {
                przycisk.classList.add("correct");
                punkty++;
            } else {
                przycisk.classList.add("incorrect");
            }
           
            Array.from(odpowiedziPrzyciski.children).forEach(button => {
                button.disabled = true;
                
                if (numeryPytania.odpowiedzi.find(o => o.text === button.innerHTML && o.correct)) {
                    button.classList.add("correct");
                }
            });
            
            nastepny.style.display = "block";
            
            
            nastepny.removeEventListener("click", handleNextQuestion);
            
            
            nastepny.addEventListener("click", handleNextQuestion);
        });
    });
}

function handleNextQuestion() {
    if (numerPytania < pytania.length - 1) {
        numerPytania++;
        pokazPytanie();
    } else {
        pokazWynik();
    }
}


function pokazWynik() {
    pytanie.innerHTML = "Twój wynik: " + punkty + " / " + pytania.length;
    odpowiedziPrzyciski.innerHTML = ""; 
    
  
    nastepny.style.display = "none";
    
  
    wroc.style.display = "block";
}


startQuiz();
