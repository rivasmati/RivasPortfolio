<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Promedios - Ejercicio 10</title>
</head>
<body>
    <h1>Promedios</h1>

    <form action="ejercicio10.php" method="post">
    <div>
            <label for="cali1">Ingrese la primer calificación</label>
            <input type="number" id="cali1" name="cali1" required>
    </div>
    <div>
            <label for="cali2">Ingrese la segunda calificación</label>
            <input type="number" id="cali2" name="cali2" required>
    </div>
    <div>
            <label for="cali3">Ingrese la tercera calificación</label>
            <input type="number" id="cali3" name="cali3" required>
    </div>
        <input type="submit">
    </form>

    <?php 
        if (isset($_POST['cali1']) && isset($_POST['cali2']) && isset($_POST['cali3'])) {
            $calificacion1 = $_POST['cali1'];
            $calificacion2 = $_POST['cali2'];
            $calificacion3 = $_POST['cali3'];

            $promedio = ($calificacion1 + $calificacion2 + $calificacion3) / 3;

            if($promedio >= 6){
                echo '<h2>Tu promedio es de ' . $promedio . '.<br>APROBADO</h2>';
            }else{
                echo '<h2>Tu promedio es de ' . $promedio . '.<br>DESAPROBADO</h2>';
            }
        }
?>
</body>
</html>