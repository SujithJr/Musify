<?php

namespace App\Http\Controllers\Api;

use App\Albums;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;

class AlbumController extends Controller
{

    public function create(Request $request, Albums $albums)
    {
        $this->authorize('isAdmin', $albums);

        $validator = Validator::make($request->all(), [
            'name'  => 'required',
            'image' => 'required'
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

        Albums::create([
            'name'      => request('name'),
            'image'     => $request->image->getClientOriginalName(),
            'user_id'   => auth()->id()
        ]);

        return response('Album created successfully!', 200);

    }

    public function fetchAll(Albums $albums) {
        $albums = Albums::all();
        return response($albums, 200);
    }

}

