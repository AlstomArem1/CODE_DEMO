<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AdminBlogRequets extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //
            'name' => 'required|string|min:3|max:255',
            'slug' => 'required|string|min:3|max:255',
            'news' => 'required|string|max:255',
            'introduce' => 'required|string|min:10|max:255',
            'image' => 'required',
            'blog_category_id ' => 'required',

        ];
    }
    public function message(): array
    {
        return [
            //
            'name.required' => 'The name field is required!',
            'slug.required' => 'The slug field is required!',
            'news.required' => 'The link field is required!',
            'introduce.required' => 'The introduce field is required!',
            'image.required' => 'The image field is required!',
            'blog_category_id.required' => 'The stutas field is required!',

        ];
    }
}
