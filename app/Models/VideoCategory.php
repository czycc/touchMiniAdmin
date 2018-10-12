<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class VideoCategory extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];
    public $timestamps = false;
    protected $guarded = ['id'];

    public function videos()
    {
        return $this->hasMany('App\Models\Video');
    }
}
