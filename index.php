<?php

require_once 'vendor/autoload.php';

// $loader = new \Twig_Loader_Filesystem(__DIR__.'/src/views');
// $twig = new \Twig_Environment($loader);

// echo $twig->render('projet.html.twig', ['name' => 'zhinyz']);

// use router\Router;

$router = new App\Router\Router($_GET['url']);

$router->get('/', "App#index");
$router->get('/projets', "App#projets");
$router->get('/projet/:id', "App#projet");

$router->run();