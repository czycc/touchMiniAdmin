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
                'title' => $about->title,
                'phone' => $about->phone,
                'top_img' => json_decode($about->top_img)->top_img,
                'intro' => $about->content
            ] : null
        ]);
    }
}
