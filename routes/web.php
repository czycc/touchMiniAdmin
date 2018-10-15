<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('res/pingAn/en/index', function () {
    return '很遗憾，报名已截止';
});
Route::post('api/pingAn/user', 'PingAn\IndexController@upload');

Route::apiResource('category/videos', 'Admin\VideoCategoryController');



Route::view('/admin/{path}', 'admin.index')
    ->where('path', '.*');