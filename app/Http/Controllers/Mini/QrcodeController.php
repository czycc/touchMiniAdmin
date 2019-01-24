<?php

namespace App\Http\Controllers\Mini;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Intervention\Image\Image;

class QrcodeController extends Controller
{
    public function getWXACodeUnlimit(Request $request)
    {
        $scene = $request->input('scene');
        $mini = \EasyWeChat::miniProgram();
        $res = $mini->app_code->getUnlimit($scene, [
            'path' => 'pages/video'
        ]);
        if ($res instanceof \EasyWeChat\Kernel\Http\StreamResponse) {
            return Image::make($res)->response();
        }
        return $res;
    }
}
