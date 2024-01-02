<?php

use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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


Route::get('/', function() {
    return view('welcome');
});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::prefix('admin')->name('admin.')->group(function(){
    Route::get('user',[UserController::class, 'index'])->name('users.index');

    Route::get('category',[CategoryController::class, 'index'])->name('categories.index');
    //Add
    Route::get('category/add',[CategoryController::class, 'add'])->name('categories.add');
    //Store
    Route::post('category/store',[CategoryController::class, 'store'])->name('categories.store');
    //Detail
    Route::get('category/{product_category}', [CategoryController::class, 'detail'])->name('categories.detail');
    //Delete
    Route::get('category/destroy/{product_category}', [CategoryController::class, 'destroy'])->name('categories.destroy');
    //update
    Route::post('category/update/{product_category}', [CategoryController::class, 'update'])->name('categories.update');

     //Product
     Route::resource('product',ProductController::class);
     //Create//
     //uploadImage
     Route::post('product/Ckeditor-upload-image',[ProductController::class,'Uploadimage'])->name('product.ckedit.upload.image');
     //Slug
     Route::post('product/slug',[ProductController::class,'Slug'])->name('product.create.slug');
     //Edit//
     //update//
     //Restore
     Route::get('product/{product}/restore',[ProductController::class, 'restore'])->name('product.restore');


     //Blog
     Route::get('blog',[BlogController::class, 'index'])->name('blog.index');
     Route::get('blog/add',[BlogController::class, 'create'])->name('blog.add');
     Route::post('blog/store',[BlogController::class, 'storeblog'])->name('blog.store');
     Route::post('blog/slug',[BlogController::class,'SlugBlog'])->name('blog.create.slug');
     Route::get('blog/{blog}', [BlogController::class, 'editblog'])->name('blog.detail');
     Route::get('blog/delete/{blog}', [BlogController::class, 'deleteblog'])->name('blog.delete');
     Route::post('blog/update/{blog}', [BlogController::class, 'updateblog'])->name('blog.update');



});
