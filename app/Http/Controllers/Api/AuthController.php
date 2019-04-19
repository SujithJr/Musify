<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{

    public function register (Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'email'     => 'required',
            'password'  => 'required',
            'image'     => 'required',
            'role_id'   => 'required'
        ]);

        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 422);
        }

        if ($request->hasFile('image'))
        {
            $imageName = $request->image->getClientOriginalName();
            $request->image->storeAs('public', $imageName);
        }

        User::create([
            'name'      => $request->name,
            'email'     => $request->email,
            'password'  => Hash::make($request->password),
            'image'     => $request->image->getClientOriginalName(),
            'role_id'   => $request->role_id
        ]);

        return response("". $request->name ." profile created successfully!", 200);

    }

    public function login (Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|max:255',
            'password' => 'required|min:6',
        ]);

        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 422);
        }

        $request->request->add([
            'grant_type' => 'password',
            'client_id' => config('services.passport.client_id'),
            'client_secret' => config('services.passport.client_secret'),
            'username' => $request->username,
            'password' => $request->password
        ]);
        $tokenRequest = Request::create(config('services.passport.login_endpoint'), 'post');
        $response = Route::dispatch($tokenRequest);
        // return response($tokenRequest);
        if ($response->getStatusCode() == 200) {
            return response($response->getContent(), 200);
            // $this->storeAccessToken($response->getContent());
        }
    }

    public function logout ()
    {
        auth()->user()->tokens->each(function ($token, $key) {
            $token->delete();
        });
        // $token = $request->user()->token();
        // $token->revoke();
        return response('You have been succesfully logged out!', 200);
    }
}
