<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Autenticación - Ejercicio 6</title>
</head>
<body>
    <h1>Autenticación</h1>
    <form action="ejercicio6.php" method="post">
        <div>
            <label for="usuario">Usuario</label>
            <input type="text" id="usuario" name="usuario" required>
        </div>
        <div>
            <label for="contrasenha">Contraseña</label>
            <input type="password" id="contrasenha" name="contrasenha" required>
        </div>
        <input type="submit">
    </form>
    

    <?php 
    if (isset($_POST['usuario']) && isset($_POST['contrasenha'])){

        $usuario = $_POST['usuario'];
        $contrasenha = $_POST['contrasenha'];

        $usuarioEsperado = "marivas";
        $contrasenhaEsperado = "123456";

        if ($usuarioEsperado === $usuario && $contrasenhaEsperado === $contrasenha) {
            echo "<p>Inicio de sesión exitoso</p>";
        }else{
            echo "<p>Usuario o Contraseña ingresada es incorrecto</p>";
        }
    }
    ?>

</body>
</html>