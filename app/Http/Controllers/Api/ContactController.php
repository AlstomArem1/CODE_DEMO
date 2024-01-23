<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContactModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    //
    public function CreateContact(Request $request){
        if(auth('sanctum')->check()) {
            $validator = Validator::make($request->all(), [
                'yourname' => 'required|min:3|max:255',
                'email' => 'required|min:3|max:255',
                'sub' => 'required|min:3|max:255',
                'message' => 'required|min:3|max:255',
            ]);
            if($validator->fails()) {
                return response()->json([
                    'status' => 422,
                    'errors' => $validator->messages(),
                ]);
            } else {
                $contacts = new ContactModel;
                $contacts->user_id = auth('sanctum')->user()->id;
                $contacts->yourname = $request->yourname;
                $contacts->email = $request->email;
                $contacts->sub = $request->sub;
                $contacts->message = $request->message;
                $contacts->save();

                return response()->json([
                    'status' => 200,
                    'message' => 'Contact Placed Successfully',
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
