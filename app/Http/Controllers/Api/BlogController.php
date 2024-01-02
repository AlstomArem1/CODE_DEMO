<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BlogModel;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    //
    public function bloglist3bit(){
        return BlogModel::orderBy('updated_at','asc')->limit(3)->get();
    }

    public function blogNews(){
        return BlogModel::orderBy('updated_at','desc')->limit(180)->get();
    }

    public function bloglist1bit(){
        return BlogModel::orderBy('created_at','desc')->limit(1)->get();
    }

    public function bloglaptoplist(){
        return BlogModel::where('blog_category_id','2')->orderBy('created_at','desc')->limit(6)->get();
    }

    public function bloglaptoplist2(){
        return BlogModel::where('blog_category_id','2')->orderBy('created_at','desc')->limit(3)->get();
    }
    public function bloglaptoplist1bit(){
        return BlogModel::where('blog_category_id','2')->orderBy('created_at','desc')->limit(1)->get();
    }
}
