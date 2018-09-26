<?php

namespace App\Http\Controllers\PingAn;

use App\Models\PinganUser;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function index()
    {
        $app = \EasyWeChat::officialAccount();
        return view('pingAnEn', compact('app'));
    }

    public function upload(Request $request)
    {
        $user = PinganUser::Where('email', $request->email)->first();
        if (is_null($user)) {
            $user = new PinganUser();
        }
        $image = $request->input('image');
        $image = str_replace('data:image/jpeg;base64,', '' , $image);
        $image = str_replace('data:image/png;base64,', '' , $image);
        $image = str_replace('data:image/jpg;base64,', '' , $image);
        $image = base64_decode($image);
        $user->company = $request->company;
        $user->phone = $request->phone;
        $user->username = $request->username;
        $user->email = $request->email;
        if (is_null($request->type)) {
            $user->type = '短信a';
        } else {
            $user->type = $request->type;
        }
        $user->save();
        $res = Storage::disk('h5-touch')->put('pingAn/en'. $user->id .'.png', $image);

        return (string)$res;
    }
}
