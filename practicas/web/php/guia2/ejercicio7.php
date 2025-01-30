<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Descuento - Ejercicio 6</title>
</head>
<body>
    <h1>Descuento</h1>
    <form action="ejercicio7.php" method="post">
        <div>
            <label for="precio">Precio del producto</label>
            <input type="number" id="precio" name="precio" required>
        </div>
        <div>
            <label for="descuento">Descuento</label>
            <input type="number" id="descuento" name="descuento" required>
        </div>
        <input type="submit">
    </form>
    

    <?php 
    if (isset($_POST['precio']) && isset($_POST['descuento'])){

        $precio = $_POST['precio'];
        $descuento = $_POST['descuento'];

        $total = $precio - ($precio * $descuento / 100);

        echo '<p>El producto con el precio de $' . $precio . ' con el descuento del ' . $descuento . '%, te queda en un total de $' . $total . '.</p>';
    }
    ?>

</body>
</html>