<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    protected $guarded = ['id'];

    public function category() {
        return $this->belongsTo('App\Models\VideoCategory', 'video_category_id');
    }

    public function user() {
        return $this->belongsTo('App\User', 'user_id');
    }
}
