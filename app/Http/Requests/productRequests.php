<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class productRequests extends FormRequest
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
            'price' => 'required|string|min:3|max:255',
            'news' => 'required|string|max:255',
            'description' => 'required|string|min:10|max:255',
            'placeofbirth' => 'required',
            'image ' => 'required',
            'status' => 'required',
            'product_category_id' => 'required',
            'slug' => 'required|string|min:10|max:255',

        ];
    }
    public function message(): array
    {
        return [
            //
            'name.required' => 'The name field is required!',
            'price.required' => 'The price field is required!',
            'news.required' => 'The link field is required!',
            'description.required' => 'The description field is required!',
            'placeofbirth.required' => 'The placeofbirth field is required!',
            'image.required' => 'The image field is required!',
            'status.required' => 'The status field is required!',
            'product_category_id.required' => 'The product_category_id field is required!',
            'slug.required' => 'The slug field is required!',


        ];
    }
}
