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

// Auth
Route::get('login', 'Auth\LoginController@showLoginForm')->name('login')->middleware('guest');
Route::post('login', 'Auth\LoginController@login')->name('login.attempt')->middleware('guest');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

Route::middleware('auth')
->group(function () {

    // Dashboard
    Route::get('/', 'DashboardController')->name('dashboard');

    // Organizations
    Route::prefix('organizations')->name('organizations.')->group(function () {

        Route::get('/', 'OrganizationsController@index')->name('index')->middleware('remember');

        Route::get('/create', 'OrganizationsController@create')->name('create');
        Route::post('/', 'OrganizationsController@store')->name('store');

        Route::get('/{organization}/edit', 'OrganizationsController@edit')->name('edit');
        Route::put('/{organization}', 'OrganizationsController@update')->name('update');

        Route::delete('/{organization}', 'OrganizationsController@destroy')->name('destroy');
        Route::put('/{organization}/restore', 'OrganizationsController@restore')->name('restore');
    });
});

// 500 error
Route::get('500', function () {
    echo $fail;
});
