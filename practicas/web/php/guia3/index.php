<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

  <title>Galeria de Imagenes - Guía 3</title>
</head>
<body>

  <section class="container">
    <h1 class="display-1">Galería de imagenes</h1>
    <div class="row row-cols-2">
      <?php
        $imagenes = array("./img/boca1.webp","./img/boca2.webp","./img/boca3.jpg","./img/boca4.jpg","./img/boca5.jpeg","./img/boca6.jpg");
        foreach ($imagenes as $x => $x_value) {
          echo '<div class="col shadow p-3 bg-dark"><img src="'. $x_value . '" alt="" class="img-fluid"></div>';
        }
      ?>
    </div>
  </section>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>