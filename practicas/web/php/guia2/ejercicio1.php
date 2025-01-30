<?php 
        if (isset($_GET['anho'])) {
            $anho = $_GET['anho'];
            $edad = '2024' - $anho;
        }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edad - Ejercicio 1</title>
</head>
<body>
    <h1>Edad</h1>

    <form action="ejercicio1.php" method="get">
    <div>
            <label for="anho">Ingrese su año de nacimiento</label>
            <input type="number" id="anho" name="anho" required>
    </div>
        <input type="submit">
    </form>

    <?php 
        if ($edad) {
            echo '<h2>Tu edad es: ' . $edad .'</h2>';
        }
    ?>
</body>
</html>