<?php

namespace App\Router;

class Router {

    private $url;
    private $routes = [];
    private $namedRoutes = [];

    public function __construct($url){
        $this->url = $url;
    }

    public function get($path, $callable, $name = null)
    {
        return $this->add($path, $callable, $name, 'GET');
    }

    private function add($path, $callable, $name, $methode)
    {
        $route = new Route($path, $callable);

        $this->routes[$methode][] = $route;

        if(is_string($callable)  && $name === null){
            $name = explode("#", $callable);
            $name = $name[1];
        }

        if($name) {
            $this->namedRoutes[$name] = $route;
        }

        return $route;
    }

    public function run()
    {
       if(!isset($this->routes[$_SERVER['REQUEST_METHOD']])) {
           throw new RouterException('REQUEST_METHODE does not exist');
       }

       foreach($this->routes[$_SERVER['REQUEST_METHOD']] as $route){
           if($route->match($this->url)){
               return $route->call($this);
           }
       }

       throw new RouterException('No routes matches');
    }

    public function url($name, $params = [])
    {
        if(!isset($this->namedRoutes[$name])) {
            throw new RouterException('No route matches this name');
        }

        return $this->namedRoutes[$name]->getUrl($params);
    }

}