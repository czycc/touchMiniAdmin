<?php

use Illuminate\Routing\Router;

Admin::registerAuthRoutes();

Route::group([
    'prefix'        => config('admin.route.prefix'),
    'namespace'     => config('admin.route.namespace'),
    'middleware'    => config('admin.route.middleware'),
], function (Router $router) {

    $router->get('/', 'HomeController@index');
    $router->resource('category/article', 'ArticleCategoryController');
    $router->resource('category/video', 'VideoCategoryController');
    $router->resource('video', 'VideoController');
    $router->resource('article', 'ArticleController');
    $router->resource('company', "CompanyController");

});
