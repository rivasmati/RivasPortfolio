<?php 
    if (isset($_GET['altura']) && isset($_GET['base'])) {
        $altura = $_GET['altura'];
        $base = $_GET['base'];
        $perimetro = ($altura * 2) + ($base * 2);
        $area = $altura * $base;
}?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Area y perímetro - Ejercicio 2</title>
</head>
<body>
    <h1>Area y Perímetro</h1>
    <form action="ejercicio2.php" method="get">
        <div>
            <label for="altura">Ingrese la altura del rectángulo</label>
            <input type="number" id="altura" name="altura" required>
        </div>
        <div>
            <label for="base">Ingrese la base del rectángulo</label>
            <input type="number" id="base" name="base" required>
        </div>
        <input type="submit">
    </form>
    <?php 
        if ($perimetro && $area) {
            echo '<h2>El perímetro de tu rectángulo es de: ' . $perimetro .'cm</h2>';
            echo '<h2>El area de tu rectángulo es de: ' . $area .'cm</h2>';
        }
    ?>
</body>
</html>