<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $pytanie = strtolower($_POST["question"]);

    // Inicjalizacja cURL
    $ch = curl_init();

    // Ustawienia cURL do wysyłania zapytania do Flask
    curl_setopt($ch, CURLOPT_URL, "http://127.0.0.1:5000/ask");  // Flask działa na porcie 5000
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["question" => $pytanie]));
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

    // Wykonanie zapytania
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $output = curl_exec($ch);
    curl_close($ch);

    // Zwrócenie odpowiedzi
    echo $output;
}
?>
