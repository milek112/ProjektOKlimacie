<?php

$host = "localhost";
$dbname = "uzytkownicy";
$username = "root";
$password = "";

try {
  
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   
} catch (PDOException $e) {
    die("Błąd połączenia: " . $e->getMessage());
}


if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['nazwa'])) {
    
    $nazwa = $_POST['nazwa'];

    try {
       
        $sql = "INSERT INTO uzyt (uzytkownik) VALUES (:uzyt)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':uzyt', $nazwa, PDO::PARAM_STR);

      
        if ($stmt->execute()) {
            echo "Użytkownik został pomyślnie dodany.<br>";

            
            header("Location: " . $_SERVER['PHP_SELF']);
            exit();
        } else {
            echo "Wystąpił błąd podczas dodawania użytkownika.<br>";
            print_r($stmt->errorInfo()); 
        }
    } catch (PDOException $e) {
        echo "Błąd połączenia: " . $e->getMessage();
    }
}
?>

<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>WEB DESIGN</title>
  <link rel="stylesheet" href="style_login.css">
</head>
<body class="game-page">
  <div class="container">
    <div class="parent">
      <nav>
        <div class="logox">
          <a href="headpage.html">
            <img src="logo.png" alt="Logo" class="logo">
            <h1>EcoHeroes</h1>
          </a>
        </div>
      </nav>
      <div class="wrapper">
        <form method="POST" action="">
          <h2>Witaj!</h2>
          <div class="input-field">
            <input type="text" name="nazwa" required>
            <label>Podaj nazwę użytkownika</label>
          </div>
          <div class="forget">  
          </div>
          <button type="submit">Zaloguj!</button>
          <a class="button" href="headpage.html" style="text-align: center;">Wróć!</a>
        </form>
      </div>
    </div>
  </div>
 
</body>
</html> 

