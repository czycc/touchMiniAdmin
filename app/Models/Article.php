<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = ['title', 'desc', 'content', 'img_url', 'user_id', 'article_category_id'];

    public function category()
    {
        return $this->belongsTo('App\Models\ArticleCategory','article_category_id');
    }

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }
}
