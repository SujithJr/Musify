<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ArtistController extends Controller
{
    // public function create (Request $request)
    // {
    //     $request->validate([
    //         'name'      => 'required',
    //         'email'     => 'required',
    //         'password'  => 'required',
    //         'image'     => 'required',
    //         'role_id'   => 'required'
    //     ]);

    //     if ($request->hasFile('image'))
    //     {
    //         $imageName = $request->image->getClientOriginalName();
    //         $request->image->storeAs('public', $imageName);
    //     }

    //     User::create([
    //         'name'      => $request->name,
    //         'email'     => $request->email,
    //         'password'  => Hash::make($request->password),
    //         'image'     => $request->image->getClientOriginalName(),
    //         'role_id'   => $request->role_id
    //     ]);

    //     return response('Artist created successfully!', 200);
    // }

    public function index (Request $request)
    {
        $artists = User::where('role_id', 3)->get();
        return response($artists, 200);
    }
}
