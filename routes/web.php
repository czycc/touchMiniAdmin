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


//视频分类管理
Route::apiResource('category/videos', 'Admin\VideoCategoryController');
//标签管理
Route::apiResource('tags', 'Admin\TagController');


Route::view('/admin/{path}', 'admin.index')
    ->where('path', '.*');