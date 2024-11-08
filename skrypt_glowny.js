document.getElementById('startBtn').addEventListener('click', function() {
    // Ukrycie strony 1 i pokazanie strony 2 z animacją
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    
    page1.classList.remove('active'); // Ukrycie strony 1
    setTimeout(() => {
      page2.classList.add('active'); // Pokaż stronę 2 po 1 sekundzie (na czas animacji)
    }, 1000); // Zmieniamy czas, jeśli chcesz dłuższe przejście
  });
  