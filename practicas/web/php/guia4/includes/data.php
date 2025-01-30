<?php
$json_data = file_get_contents('data.json');
$productos = json_decode($json_data, true);