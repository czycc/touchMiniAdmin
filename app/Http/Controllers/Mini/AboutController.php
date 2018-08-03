<?php

namespace App\Http\Controllers\Mini;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AboutController extends Controller
{
    public function index()
    {
        return response()->json([
            'phone' => config('about.phone'),
            'top_img' => config('about.top_img'),
            'intro' => config('about.intro')
        ]);

    }
}
