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

        // $validator = Validator::make($request->all(), [
        //     'name' => 'required|max:255',
        //     'email' => 'required|email|max:255',
        //     'password' => 'required|min:6',
        //     'role_id' => 'required',
        // ]);

        // if ($validator->fails())
        // {
        //     return response(['errors'=>$validator->errors()->all()], 422);
        // }

        // $request['password'] = Hash::make($request['password']);
        // // $request['remember_token'] = Str::random(10);
        // $user = User::create($request->toArray());

        // $token = $user->createToken('Laravel Password Grant Client')->accessToken;
        // $response = ['token' => $token];

        // return response($response, 200);
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255',
            'password' => 'required|min:6',
            'role_id' => 'required',
        ]);

        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 422);
        }
        // $request['password'] = Hash::make($request['password']);
        return User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role_id' => $request->role_id
        ]);

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
