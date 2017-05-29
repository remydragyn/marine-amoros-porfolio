<?php

namespace App\Controller;

use App\UtilityTwigExtension\TwigExtension;
use Fullpipe\TwigWebpackExtension\WebpackExtension;

class AppController {

    public $output = [];

    public function __construct()
    {
        $this->loader = new \Twig_Loader_Filesystem(__DIR__.'/../views');
        $this->twig = new \Twig_Environment($this->loader);


        $this->twig->addExtension(new TwigExtension());
        $this->twig->addExtension(new WebpackExtension('public/manifest.json', '/public/', '/public/'));
    }

    public function index($router)
    {
        $this->output['router'] = $router;
        $this->output['name'] = 'Remy';

        echo $this->twig->render('index.html.twig', $this->output);
    }

    public function projets($router)
    {
        $this->output['router'] = $router;

        echo $this->twig->render('projets.html.twig', $this->output);
    }
    
    public function projet($router, $id)
    {
        $this->output['router'] = $router;
        $this->output['id'] = $id;
        
        echo $this->twig->render('projet.html.twig', $this->output);
    }
}