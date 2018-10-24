<?php

namespace App\Http\Controllers\Helper;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class FileController extends Controller
{
    /**
     * @param Request $request
     * @return string
     *
     * 表单上传文件存储到oss
     */
    public function upload(Request $request)
    {
        $this->validate($request, [
            'type' => [
                'required',
                Rule::in(['file', 'video', 'image'])
            ],
            'file' => 'required|max:200000'
        ]);

        $path = Storage::disk('oss')
            ->putFile(
                config('filesystems.disks.oss.baseDir') . '/' . $request->input('type'),
                $request->file('file')
            );

        return config('filesystems.disks.oss.oss_out_url') . $path;
    }
}
