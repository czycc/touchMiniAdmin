<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VideoCategory extends Model
{
    public $timestamps = false;
    protected $guarded = ['id'];
    public function videos()
    {
        return $this->hasMany('App\Models\Video');
    }
}
