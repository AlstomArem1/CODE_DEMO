<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ProductModel;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    //
    public function productlist(){
        return ProductModel::orderBy('updated_at','desc')->limit(180)->get();
    }
}
