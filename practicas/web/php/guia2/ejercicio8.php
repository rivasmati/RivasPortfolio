<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Números - Ejercicio 8</title>
</head>
<body>
    <h1>Números</h1>

    <form action="ejercicio8.php" method="post">
    <div>
            <label for="numero">Ingrese un número</label>
            <input type="number" id="numero" name="numero" required>
    </div>
        <input type="submit">
    </form>

    <?php 
        if (isset($_POST['numero'])) {
            $numero = $_POST['numero'];
            
            if($numero < 0){
                echo '<h2>Tu número ingrsado '. $numero . ' es negativo</h2>';
            }elseif ($numero > 0) {
                echo '<h2>Tu número ingrsado '. $numero . ' es positivo</h2>';
            }else {
                echo '<h2>Tu número ingrsado '. $numero . ' es cero</h2>';
            }
        }
?>
</body>
</html>