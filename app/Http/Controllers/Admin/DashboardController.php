<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\OrderModel;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    //
    public function dashboardlist(Request $request){
        $dashboards = OrderModel::orderBy('created_at','desc')->paginate(5);
        return view('admin.pages.Dashboard.dashboard',["dashboards" => $dashboards]);
    }
}
