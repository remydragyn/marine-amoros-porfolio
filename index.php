<?php

require_once 'vendor/autoload.php';

$router = new App\Router\Router($_GET['url']);

$router->get('/', "App#index");
$router->get('/projets', "App#projets");
$router->get('/projet/:id', "App#projet");

$router->run();