<?php

namespace App\Controller;

use App\UtilityTwigExtension\TwigExtension;
use Fullpipe\TwigWebpackExtension\WebpackExtension;

class AppController {

    public $output = [];
    public $manifest = 'public/manifest.json';
    public $projectsJson = 'assets/texts/projects.json';
    
    public function __construct()
    {

        $json = json_decode(file_get_contents($this->manifest), true);


        $env = $json['env'];
        $this->output['env'] = $env;
        $this->output['projects'] = json_decode(file_get_contents($this->projectsJson), true);

        $this->loader = new \Twig_Loader_Filesystem(__DIR__.'/../views');
        $this->twig = new \Twig_Environment($this->loader);


        $this->twig->addExtension(new TwigExtension());
        $this->twig->addExtension(new WebpackExtension($this->manifest, '/public/', '/public/'));

    }

    public function index($router)
    {
        $this->output['router'] = $router;

        echo $this->twig->render('index.html.twig', $this->output);
    }
    
    public function projet($router, $slug)
    {
        $this->output['router'] = $router;

        $this->output['slug'] = $slug;
        
        echo $this->twig->render('projet.html.twig', $this->output);
    }
}