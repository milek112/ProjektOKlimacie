document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form"); // Pobiera formularz z HTML
  const wrapper = document.querySelector(".wrapper"); // Pobiera wrapper, aby dodać animację

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Zapobiega przeładowaniu strony

    // Sprawdza, czy pole tekstowe jest wypełnione
    const usernameInput = form.querySelector("input[type='text']").value.trim();
    if (usernameInput) {
      // Dodaje efekt zanikania do wrappera
      wrapper.classList.add("fadeOut");

      // Po 800ms (czas trwania animacji) przenosi na główną stronę
      setTimeout(() => {
        window.location.href = "headpage.html";
      }, 800); // Dopasowanie do długości animacji
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  container.classList.add("fadeIn"); // Dodaj efekt pojawiania się
});

