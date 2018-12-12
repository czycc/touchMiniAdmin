<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    protected $guarded = ['id'];

    public function category()
    {
        return $this->belongsTo('App\Models\VideoCategory', 'video_category_id');
    }
//
//    public function setTopImgAttribute($value)
//    {
//        if (!url()->isValidUrl($value)) {
//            $this->attributes['top_img'] = config('filesystems.disks.oss.url').$value;
//        }
//    }

}
