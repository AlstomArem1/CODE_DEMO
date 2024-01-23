<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ApiRegisterRequest extends FormRequest
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
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string','min:8','max:255'],
        ];
    }

    public function messages():array
    {
        return [
            'name.required' => 'The name field is required!',
            'email.required' => 'The email field is required!',
            'password.required' => 'The password field is required!',
            'password.min' => 'The password must be at least 8 to 20 characters',
            'password.max' => 'The password must be at least 8 to 20 characters',

        ];
    }
}
