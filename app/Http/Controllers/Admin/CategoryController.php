<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdminCategoryRequests;
use App\Models\CategoryModel;
use App\Models\ProductModel;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    //
    public function index(Request $request){
        $keyword = $request->keyword ?? '';


        $status = $request->status ?? '';
        $placeofbirth = $request->placeofbirth ?? '';

        $sortBy = $request->sortBy ?? 'latest';
        $sort = ($sortBy === 'oldest') ? 'asc' : 'desc';



        $filter = [];//'select * from product_categories  where name like ? order by created_at (desc or asc) limit ?,?'
        if(!empty($keyword)){
            $filter[]=['name','like', '%'.$keyword.'%'];
        }

        if($status !== ''){
            $filter[] = ['status', $status];
        }

        if($status !== ''){
            $filter[] = ['placeofbirth', $placeofbirth];
        }

        $productCategories = CategoryModel::where($filter)
        ->orderBy('created_at',$sort)
        ->paginate(config('my-config.item-per-pages'));
        return view('admin.pages.categories.list',[
            'productCategories' => $productCategories,
            'keyword' => $keyword,
            'sortBy' => $sortBy
        ]);
    }

    public function add(){
        return view('admin.pages.categories.create');

    }

    public function store(AdminCategoryRequests $request){
         //Eloquent
         $productCategory = new CategoryModel;
         $productCategory->name = $request->name;
         $productCategory->status = $request->status;
         $productCategory->placeofbirth = $request->placeofbirth;

         $check = $productCategory->save();

        $message = $check ? 'Tao thanh cong' : 'Tao that bai';

        //Session flash
        return redirect()->route('admin.categories.index')->with('message', $message);

    }

    public function detail(CategoryModel $productCategory){
        return view('admin.pages.categories.detail',['productCategory' => $productCategory]);
    }

    public function update(AdminCategoryRequests $request, CategoryModel $productCategory){
        $productCategory->name = $request->name;
        $productCategory->status = $request->status;
        $productCategory->placeofbirth = $request->placeofbirth;

        $check = $productCategory->save();

        $message = $check > 0 ? 'Tao thanh cong' : 'Tao that bai';

        return redirect()->route('admin.categories.index')->with('message',$message);
    }

    public function destroy(CategoryModel $productCategory, ProductModel $product){

        $check = $productCategory->delete();
        $message = $check > 0 ? 'Xoa thanh cong' : 'Xoa that bai';

        return redirect()->route('admin.categories.index')->with('message', $message);

    }
}
