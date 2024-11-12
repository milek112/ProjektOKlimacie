function toggleAnswer(id) {
  // Znajdź wszystkie odpowiedzi
  var allAnswers = document.querySelectorAll('.answer');
  
  // Zamknij wszystkie odpowiedzi
  allAnswers.forEach(function(answer) {
      // Usuwamy klasę "open", co spowoduje ich zamknięcie
      answer.classList.remove("open");
  });

  // Teraz otwórz tylko tę, na którą kliknęliśmy
  var selectedAnswer = document.getElementById('answer-' + id);
  selectedAnswer.classList.add("open");
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form"); 
    const wrapper = document.querySelector(".wrapper"); 
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const usernameInput = form.querySelector("input[type='text']").value.trim();
      if (usernameInput) {
        
        wrapper.classList.add("fadeOut");
  
        setTimeout(() => {
          window.location.href = "headpage.html"; 
        }, 1400); 
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    container.classList.add("fadeIn"); 
  });
  