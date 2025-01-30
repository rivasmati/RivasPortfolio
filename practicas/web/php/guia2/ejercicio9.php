<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edad - Ejercicio 9</title>
</head>
<body>
    <h1>Edad</h1>

    <form action="ejercicio9.php" method="post">
    <div>
            <label for="numero">Ingresa tu edad</label>
            <input type="number" id="numero" name="numero" required>
    </div>
        <input type="submit">
    </form>

    <?php 
        if (isset($_POST['numero'])) {
            $numero = $_POST['numero'];
            
            if ($numero >= 0) {
                if($numero >= 0 && $numero < 13){
                    echo '<h2>Sos un/a niño/a</h2>';
                }elseif ($numero >= 13 && $numero < 18) {
                    echo '<h2>Sus un adolescente</h2>';
                }elseif ($numero >= 18 && $numero < 65) {
                    echo '<h2>Sos un adulto</h2>';
                }elseif ($numero >= 65) {
                    echo '<h2>Sos un adulto mayor</h2>';
                }
            }else {
                echo '<h2>No podes tener edad negativa';            
            }
            
        }
?>
</body>
</html>