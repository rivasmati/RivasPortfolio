<?php
$diametro = 10;
$radio = $diametro / 2;
$perimetro = 2 * 3.14 * $radio;
$area = 3.14 * $radio * $radio;
$resultado = "El perímetro del círculo de diámetro $diametro es $perimetro y el área es $area.";
echo "<p>$resultado</p>";
?>