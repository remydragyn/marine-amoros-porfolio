<?php

namespace App\Controller;

use App\UtilityTwigExtension\TwigExtension;

class AppController {

    public function __construct()
    {
        $this->loader = new \Twig_Loader_Filesystem(__DIR__.'/../views');
        $this->twig = new \Twig_Environment($this->loader);

        $this->twig->addExtension(new TwigExtension());
    }

    public function index($router)
    {
        echo $this->twig->render('index.html.twig', [
            'router' => $router,
            'name' => 'zhinyz'
        ]);
    }

    public function projets($router)
    {
        echo $this->twig->render('projets.html.twig', [
            'router' => $router,
            'name' => 'zhinyz'
        ]);
    }
    
    public function projet($router, $id)
    {
        echo $this->twig->render('projet.html.twig', [
            'router' => $router,
            'name' => 'zhinyz'
        ]);
    }
}