document.getElementById("ask-btn").addEventListener("click", function() {
    const question = document.getElementById("question").value;
    
    // Jeśli nie ma pytania, nie wysyłaj zapytania
    if (!question.trim()) {
        return;
    }

    // Dodaj pytanie do okna czatu
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<p><strong>Ty:</strong> ${question}</p>`;

    // Wysłanie pytania do serwera
    fetch('/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: question })
    })
    .then(response => response.json())
    .then(data => {
        // Dodaj odpowiedź od AI do okna czatu
        chatBox.innerHTML += `<p><strong>AI:</strong> ${data.answer}</p>`;
        document.getElementById("question").value = ''; // Wyczyść pole tekstowe
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
