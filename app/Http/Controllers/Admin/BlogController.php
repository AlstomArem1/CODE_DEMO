<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdminBlogRequets;
use App\Models\BlogModel;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    //
    public function index(){
        $blogs =  BlogModel::Orderby('updated_at', 'desc')->paginate(5);
        return view('admin.pages.blog.list',['blogs'=>$blogs]);
    }

    public function create(){
        $blogCategories = DB::select('select * from categories where status = 1');
        return view('admin.pages.blog.create',['blogCategories'=>$blogCategories]);
    }
    public function storeblog(AdminBlogRequets $request){
        if($request->hasFile('image')){
            $fileOriginalName = $request->file('image')->getClientOriginalName();
            $fileName = pathinfo($fileOriginalName, PATHINFO_FILENAME);
            $fileName .= '_'.time().'.'.$request->file('image')->getClientOriginalExtension();
            $request->file('image')->move(public_path('images'), $fileName);

        }

        $check = DB::table('blogs')->insert([
            "name" => $request->name,
            "slug" => $request->slug,
            "news" => $request->news,
            "introduce" => $request->introduce,
            "blog_category_id" => $request->blog_category_id,
            "image" => $fileName ?? null ,
            "created_at" => Carbon::now(),
            "updated_at" => Carbon::now()

        ]);
        // dd($request->all());
        $message = $check ? 'tao san pham thanh cong' : 'tao san pham that bai';

        return redirect()->route('admin.blog.index')->with('message',$message);

    }
    public function SlugBlog(AdminBlogRequets $request){
        return response()->json(['slug' => Str::slug($request->name,'-')]);
    }

    public function editblog(string $id)
    {
        //
        $blog = DB::table('blogs')->find($id);
        $blogCategories = DB::table('categories')->where('status','=',1)->get();
        return view('admin.pages.blog.detail',['blog' => $blog ,'blogCategories' => $blogCategories]);


    }
    public function deleteblog(string $id)
    {
        //
        // $blog = DB::table('blogs')->find($id);
        // $image = $blog->image;
        // if(!is_null($image) && file_exists('images/'.$image)){
        //     unlink('images/'.$image);
        // }

        // $request = DB::table('products')->where('id','=',$id)->delete();
        $result = DB::table('blogs')->delete($id);
        $message = $result ? 'xoa san phan thanh cong' : 'xoa san phan that bai';
        //session flash
        return redirect()->route('admin.blog.index')->with('message', $message);

    }

    public function updateblog(AdminBlogRequets $request, string $id)
    {
        //
        $blog = DB::table('blogs')->find($id);
        $oldImageFileName = $blog->image;

        if($request->hasFile('image')){
            $fileOrginialName = $request->file('image')->getClientOriginalName();
            $fileName = pathinfo($fileOrginialName, PATHINFO_FILENAME);
            $fileName .= '_'.time().'.'.$request->file('image')->getClientOriginalExtension();
            $request->file('image')->move(public_path('images'),  $fileName);

            if(!is_null($oldImageFileName) && file_exists('images/'.$oldImageFileName)){
                unlink('images/'.$oldImageFileName);
            }
        }

        $check = DB::table('blogs')->where('id', '=', $id)->update([
            "name" => $request->name,
            "slug" => $request->slug,
            "news" => $request->news,
            "introduce" => $request->introduce,
            "image" => $fileName ?? $oldImageFileName,
            "blog_category_id" => $request->blog_category_id,
            "updated_at" => Carbon::now()

        ]);
            // dd($request->all());

        //session flash
        return redirect()->route('admin.blog.index')->with('message','cap nhan san pham thanh cong');

    }


}
