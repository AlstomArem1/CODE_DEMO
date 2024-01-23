<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApiPayRequests extends FormRequest
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
            'username' => 'required|string|min:3|max:255|' ,
            'email' => 'required|email|min:10|max:255,unique:user,',
            'phone' => 'required|min:3|max:255|',
            'address' => 'required|min:3|max:255|',
            'city' => 'required|min:3|max:255|',
            'country' => 'required|min:3|max:255|',
            'note' => 'required|min:2|max:255|',
        ];

    }
    public function messages():array
    {
        return [
            'username.required' => 'The username field is required!',
            'email.required' => 'The email field is required!',
            'phone.required' => 'The email field is required!',
            'address.required' => 'The address field is required!',
            'city.required' => 'The city field is required!',
            'country.required' => 'The country field is required!',
            'note.required' => 'The note field is required!',
        ];
    }
}
