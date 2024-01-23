<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItemsModel extends Model
{
    use HasFactory;
    protected $table = 'orderitems';
    protected $filltable = [
        'order_id',
        'product_id',
        'qty',
        'price',
    ];
    public function order(){
        return $this->belongsTo(OrderModel::class, 'order_id');
    }
    public function product(){
        return $this->belongsTo(ProductModel::class, 'product_id');
    }
}
