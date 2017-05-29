<?php

namespace App\UtilityTwigExtension;

class TwigExtension extends \Twig_Extension
{
    public function getFunctions() {
        return [
            new \Twig_SimpleFunction('getPath', [$this,'getPath']),
        ];
    }

    public function getPath($router, $name, $params = [])
    {
        return $router->generateUrl($name, $params);
    }

}