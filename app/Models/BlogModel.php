<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogModel extends Model
{
    use HasFactory;
    protected $table = 'blogs';
    public function blog_category(){
        return $this->belongsTo(CategoryModel::class, 'blog_category_id');//dau
    }
}
