<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactModel extends Model
{
    use HasFactory;
    protected $table = 'contact';
    protected $filltable = [
        'yourname',
        'email',
        'sub',
        'message',
    ];
}
