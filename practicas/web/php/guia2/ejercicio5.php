<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabla multiplicación - Ejercicio 5</title>
</head>
<body>
    <h1>Tabla multiplicación</h1>
    <form action="ejercicio5.php" method="get">
        <div>
            <label for="numero">Ingrese un número para ver su tabla de multiplicación hasta el 10</label>
            <input type="number" id="numero" name="numero" required>
        </div>
        <input type="submit">
    </form>
    <?php 
    if (isset($_GET['numero'])) {
        $numero = $_GET['numero'];
        for ($i=1; $i < 11; $i++) { 
            echo '<p>' . $numero . ' x ' . $i . ' = ' . $numero * $i . '</p>';
        }
}?>
</body>
</html>