<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ArticleCategory extends Model
{
    use SoftDeletes;

    public $timestamps = false;
    protected $guarded = ['id'];
    protected $dates = ['deleted_at'];

    public function articles()
    {
        return $this->hasMany('App\Models\Article');
    }
}
