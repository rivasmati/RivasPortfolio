<?php 

$titulo = 'Inicio';
require 'templates/header.php';
require 'includes/data.php';


echo "<section class='container'>";
echo "<a href='crear.php' class='btn btn-success'>Agregar Nuevo Producto</a><br>";
echo "<table class='table'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Producto</th>
                    <th scope='col'>Precio</th>
                    <th scope='col'>En stock</th>
                </tr>
            </thead>
        <tbody>";
foreach ($productos as $id => $producto) {
    echo "<tr>";
    $numero = $id + 1;
    echo "<th scope='row'>$numero</th>";
    echo "<td>{$producto['nombre']}</td>";
    echo "<td>{$producto['precio']}</td>";
    $en_stock = $producto['en_stock'] ? 'Sí' : 'No';
    echo "<td>{$en_stock}</td>";
    echo "<td>
            <a href='editar.php?id=$id' class='btn btn-primary'>Editar</a>
            <form method='POST' action='borrar.php' class='d-inline'>
                <input type='hidden' name='id' value='$id'>
                <button type='submit' class='btn btn-danger'>Eliminar</button>
            </form>
          </td>";
    echo "</tr>";
}
echo "</tbody>";
echo "</table>";
echo "</section>";

require 'templates/footer.php';

?>
