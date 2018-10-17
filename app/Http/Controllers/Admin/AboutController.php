<?php

namespace App\Http\Controllers\Admin;

use App\Models\About;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AboutController extends Controller
{
    public function index()
    {
        $about = About::first();

        return response()->json([
            'data' => is_null($about) ? '' : $about->content
        ]);
    }

    public function store(Request $request)
    {
        $about = About::first()->update($request->all());

        return response()->json($about, 201);
    }
}
