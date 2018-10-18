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
//视频管理
Route::apiResource('videos', 'Admin\VideoController');
//标签管理
Route::apiResource('tags', 'Admin\TagController');
//文件上传
Route::post('file/upload', 'Helper\FileController@upload');
//公司介绍
Route::get('about', 'Admin\AboutController@index');
Route::post('about', 'Admin\AboutController@store');
//文章分类管理
Route::apiResource('category/articles','Admin\ArticleCategoryController');
//文章管理
Route::apiResource('articles', 'Admin\ArticleController');

Route::view('/admin/{path}', 'admin.index')
    ->where('path', '.*');