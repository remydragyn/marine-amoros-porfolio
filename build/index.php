<?php

require_once 'vendor/autoload.php';

$router = new App\Router\Router($_GET['url']);

$router->get('/', "App#index");
$router->get('/projet/:slug', "App#projet");

$router->run();