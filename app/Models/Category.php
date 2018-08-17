<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public $timestamps = false;
    protected $guarded = ['id'];
    public function Articles()
    {
        return $this->hasMany('App\Models\Article');
    }
}
