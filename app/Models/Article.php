<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $guarded = ['id'];

    public function category()
    {
        return $this->belongsTo('App\Models\ArticleCategory','article_category_id');
    }

}
