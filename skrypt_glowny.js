document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form"); 
  const wrapper = document.querySelector(".wrapper"); 
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Zapobiega przeładowaniu strony

    
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

