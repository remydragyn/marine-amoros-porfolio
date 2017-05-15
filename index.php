<?php

require_once("vendor/autoload.php");

$loader = new \Twig_Loader_Filesystem(__DIR__.'/src/views');
$twig = new \Twig_Environment($loader);

$uri = $_SERVER['REQUEST_URI'];

if ($uri == '/start-kit/projet') {
    echo $twig->render('projet.html.twig', ['name' => 'zhinyz']);
} else {
    echo $twig->render('index.html.twig', ['name' => 'zhinyz']);
}