<?php 
    if ( isset($_GET['angulo1']) && 
        isset($_GET['angulo2']) && 
        isset($_GET['angulo3']) ) {

        $angulo1 = $_GET['angulo1'];
        $angulo2 = $_GET['angulo2'];
        $angulo3 = $_GET['angulo3'];
        
        $total = $angulo1 + $angulo2 + $angulo3;

        if ($total == 180) {
            if($angulo1 == 90 || $angulo2 == 90 || $angulo3 == 90){
                $triangulo = 'RECTÁNGULO';
            }elseif ($angulo1 < 90 && $angulo2 < 90 && $angulo3 < 90) {
                $triangulo = 'ACUTÁNGULO';
            }elseif ($angulo1 > 90 || $angulo2 > 90 || $angulo3 > 90) {
                $triangulo = 'OBTUSÁNGULO';
            }
        }else{
            echo '<script>alert("Las medidas porporcionadas no coinciden con las de un triangulo")</script>';
        }
        
        

        //echo 'el angulo es: ' . $angulo;
        //echo 'El perímetro es ' . $perimetro;
    }
?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Triángulo</title>
</head>
<body>
    
    <h1>Angulos - Ejercicio 4</h1>


    <form action="ejercicio4.php" method="get">

        <div>
            <label for="angulo1">Ingrese la medida del primer ángulo</label>
            <input type="number" id="angulo1" name="angulo1" required>
        </div>

        <div>
            <label for="angulo2">Ingrese la medida del segundo ángulo</label>
            <input type="number" id="angulo2" name="angulo2" required>
        </div>

        <div>
            <label for="angulo3">Ingrese la medida del tercer ángulo</label>
            <input type="number" id="angulo3" name="angulo3" required>
        </div>

        <input type="submit">

    </form>

    <?php 

        if ( $triangulo ) {
            echo '<h2>El triángulo es: ' . $triangulo . '</h2>';
        }
    
    ?>

</body>
</html>