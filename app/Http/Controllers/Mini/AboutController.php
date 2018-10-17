<?php

namespace App\Http\Controllers\Mini;

use App\Models\About;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AboutController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse
     *
     * 获取公司简介
     */
    public function show()
    {
        $about = About::first();

        return response()->json([
            'data' => $about ? [
                'intro' => $about->content
            ] : null
        ]);
    }
}
