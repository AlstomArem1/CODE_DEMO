<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CartModel;
use Illuminate\Http\Request;

class CartController extends Controller
{
    //
    public function addsavecart(Request $request){
        if(auth('sanctum')->check()){

            $cart = new CartModel;
            $cart->user_id = auth('sanctum')->user()->id;
            $cart->product_id = $request->product_id;
            $cart->product_name = $request->product_name;
            $cart->product_qty = $request->product_qty;
            $cart->product_price = $request->product_price;
            $cart->save();
            return response()->json([
                'status' => 201,
                'message' => 'I am in Cart',

            ]);

        } else {
            return response()->json([
                'status' => 401,
                'message' => 'Login to Add to Cart',
            ]);
        }
    }
}
