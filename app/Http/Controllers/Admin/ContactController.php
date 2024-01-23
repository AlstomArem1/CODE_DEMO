<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactModel;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    //
    public function indexcontact() {
        $contacts = ContactModel::orderBy('created_at','desc')->paginate(10);
        return view('admin.pages.contact.contact',['contacts' => $contacts]);
    }
}
