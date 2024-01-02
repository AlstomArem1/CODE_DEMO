<?php

use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('register',[UsersController::class, 'addRegister'])->name('register.add');
Route::post('login',[UsersController::class, 'addLogin'])->name('login.add');

Route::get('shop',[ProductController::class, 'productlist'])->name('shop.list');
Route::get('blog3bit',[BlogController::class, 'bloglist3bit'])->name('blog3bit.list');
Route::get('blogboxnews',[BlogController::class, 'blogNews'])->name('blogboxnews');
Route::get('blog1bit',[BlogController::class, 'bloglist1bit'])->name('blog1bit.list');
Route::get('bloglaptop',[BlogController::class, 'bloglaptoplist'])->name('bloglaptop.list');
Route::get('bloglaptop2',[BlogController::class, 'bloglaptoplist2'])->name('bloglaptop2.list');
Route::get('bloglaptop1bit',[BlogController::class, 'bloglaptoplist1bit'])->name('bloglaptop1bit.list');



