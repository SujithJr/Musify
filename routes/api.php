<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['json.response']], function () {

    // Route::middleware('auth:api')->get('/user', function (Request $request) {
    //     return $request->user();
    // });

    // public routes
    Route::post('/login', 'Api\AuthController@login')->name('login');
    Route::post('/register', 'Api\AuthController@register')->name('register');

    // private routes
    Route::namespace('Api')->middleware('auth:api')->group(function () {
        Route::get('users/me', 'UserController@index');
        Route::get('/users', 'UserController@fetchAll');
        Route::post('/logout', 'AuthController@logout')->name('logout');

        // Albums CRUD
        Route::post('/albums', 'AlbumController@create');
        Route::get('/albums', 'AlbumController@fetchAll');
        Route::get('/albums/{album}', 'AlbumController@fetchAll');
    });

});
