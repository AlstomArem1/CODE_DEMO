<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CategoryModel;
use App\Models\ProductModel;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //

        $keyword = $request->keyword ?? '';
        $status = $request->status ?? '';
        $filter = [];//'select * from product_categories  where name like ? order by created_at (desc or asc) limit ?,?'
        if(!empty($keyword)){
            $filter[]=['name','like', '%'.$keyword.'%'];
        }

        if($status !== ''){
            $filter[] = ['status', $status];
        }


        $products = ProductModel::where($filter)->with('product_category')->paginate(5);
        return view('admin.pages.products.list',[
            'products' => $products,
            'keyword' => $keyword,

        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $productCategories = DB::select('select * from categories where status = 1');
        return view('admin.pages.products.create',['productCategories' => $productCategories]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        if($request->hasFile('image')){
            $fileOriginalName = $request->file('image')->getClientOriginalName();
            $fileName = pathinfo($fileOriginalName, PATHINFO_FILENAME);
            $fileName .= '_'.time().'.'.$request->file('image')->getClientOriginalExtension();
            $request->file('image')->move(public_path('images'), $fileName);

        }

        $check = DB::table('products')->insert([
            "name" => $request->name,
            "slug" => $request->slug,
            "price" => $request->price,
            "description" => $request->description,
            "placeofbirth" => $request->placeofbirth,
            "status" => $request->status,
            "product_category_id" => $request->product_category_id,
            "image" => $fileName ?? null,
            "created_at" => Carbon::now(),
            "updated_at" => Carbon::now()

        ]);
        // dd($request->all());
        $message = $check ? 'tao san pham thanh cong' : 'tao san pham that bai';

        return redirect()->route('admin.product.index')->with('message',$message);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
        $product = DB::table('products')->find($id);
        $productCategories = DB::table('categories')->where('status','=',1)->get();
        return view('admin.pages.products.detail',['product' => $product, 'productCategories' => $productCategories]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $product = DB::table('products')->find($id);
        $oldImageFileName = $product->image;

        if($request->hasFile('image')){
            $fileOrginialName = $request->file('image')->getClientOriginalName();
            $fileName = pathinfo($fileOrginialName, PATHINFO_FILENAME);
            $fileName .= '_'.time().'.'.$request->file('image')->getClientOriginalExtension();
            $request->file('image')->move(public_path('images'),  $fileName);

            if(!is_null($oldImageFileName) && file_exists('images/'.$oldImageFileName)){
                unlink('images/'.$oldImageFileName);
            }
        }

        $check = DB::table('products')->where('id', '=', $id)->update([
            "name" => $request->name,
            "slug" => $request->slug,
            "price" => $request->price,
            "description" => $request->description,
            "placeofbirth" => $request->placeofbirth,
            "status" => $request->status,
            "product_category_id" => $request->product_category_id,
            "image" => $fileName ?? $oldImageFileName,
            "updated_at" => Carbon::now()

        ]);


        //session flash
        return redirect()->route('admin.product.index')->with('message','cap nhan san pham thanh cong');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $product = DB::table('products')->find($id);
        $image = $product->image;
        if(!is_null($image) && file_exists('images/'.$image)){
            unlink('images/'.$image);
        }

        // $request = DB::table('products')->where('id','=',$id)->delete();
        $result = DB::table('products')->delete($id);
        $message = $result ? 'xoa san phan thanh cong' : 'xoa san phan that bai';
        //session flash
        return redirect()->route('admin.product.index')->with('message', $message);

    }

    public function Uploadimage(Request $request){
        if($request->hasFile('upload')){
            $fileOriginalName = $request->file('image')->getClientOriginalName();
            $fileName = pathinfo($fileOriginalName, PATHINFO_FILENAME);
            $fileName .= '_'.time().'.'.$request->file('image')->getClientOriginalExtension();

            $request->file('image')->move(public_path('images'), $fileName);

            $url = asset('images/'.$fileName);
            return response()->json(['fileName'=>$fileName,'uploaded'=>1,'url'=>$url]);

        }
    }

    public function Slug(Request $request){
        return response()->json(['slug' => Str::slug($request->name,'-')]);
    }

    public function restore(string $id){

        //Eloquent
        $product = ProductModel::withTrashed()->find($id);
        $product->restore();

        return redirect()->route('admin.product.index')->with('message','khoi phuc san pham thanh cong');
    }
}
