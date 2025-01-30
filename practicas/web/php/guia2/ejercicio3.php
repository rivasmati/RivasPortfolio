<?php 
        if (isset($_GET['numero'])) {
            $numero = $_GET['numero'];
            
            if ($numero % 1 == 0) {
                if($numero % 2 == 0){
                    $resultado = 'PAR';
                }else{
                    $resultado = 'IMPAR';
                }
            }else{
                $resultado = 'DECIMAL';
            }
        }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Par o Impar - Ejercicio 3</title>
</head>
<body>
    <h1>Edad</h1>

    <form action="ejercicio3.php" method="get">
    <div>
            <label for="numero">Ingrese un número entero</label>
            <input type="number" id="numero" name="numero" required>
    </div>
        <input type="submit">
    </form>

    <?php 
        if ($resultado) {
            echo '<h2>Tu número entero ingrsado '. $numero . ' es '. $resultado .'</h2>';
        }
    ?>
</body>
</html>