<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth:api');
    // }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }
}

// Client ID: 5
// Client secret: KmyO3qtMEblOXTYQGogp3k55uASXw24ojXU1N1Fh
// Password grant client created successfully.
// Client ID: 6
// Client secret: DhVKRvrwDfm0mAIHwBHGkvuk1uMaqfP2r8ue8ff7

// 276528967313
