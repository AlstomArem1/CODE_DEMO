<?php

namespace App\Http\Controllers\Api;

use App\Events\PlaceOdersSuccess;
use App\Http\Controllers\Controller;
use App\Http\Requests\ApiPayRequests;
use App\Models\OrderItemsModel;
use App\Models\OrderModel;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

// use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    //
    public function Creactplaceorder(Request $request)
    {
        if(auth('sanctum')->check()) {
            $validator = Validator::make($request->all(), [
                'username' => 'required|min:3|max:255',
                'phone' => 'required|min:3|max:255',
                'email' => 'required|min:3|max:255',
                'address' => 'required|min:3|max:255',
                'city' => 'required|min:3|max:255',
                'note' => 'required|min:3|max:255',
                'country' => 'required|min:3|max:255',
            ]);
            if($validator->fails()) {
                return response()->json([
                    'status' => 422,
                    'errors' => $validator->messages(),
                ]);
            } else {

                $order = new OrderModel;
                $order->user_id = auth('sanctum')->user()->id;
                $order->username = $request->username;
                $order->phone = $request->phone;
                $order->email = $request->email;
                $order->address = $request->address;
                $order->city = $request->city;
                $order->country = $request->country;
                $order->note = $request->note;
                $order->save();

                $user = User::find(auth('sanctum')->user()->id);
                $user->phone = $request->phone;
                $user->save();



                return response()->json([
                    'status' => 200,
                    'message' => 'Order Placed Successfully',
                ]);
            }
        } else {
            return response()->json([
                'status' => 401,
                'message' => 'Login to Continue',
            ]);
        }
    }
}
