<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App{
/**
 * App\User
 *
 * @property int $id
 * @property string|null $openid
 * @property string $phone
 * @property string $username 姓名
 * @property string|null $nickname
 * @property string|null $avatar
 * @property int $is_new
 * @property string $password 打算首次登陆使用手机号发送验证码
 * @property string|null $remember_token
 * @property string|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Passport\Client[] $clients
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Passport\Token[] $tokens
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereAvatar($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereIsNew($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereNickname($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereOpenid($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereUsername($value)
 */
	class User extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\ArticleCategory
 *
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Article[] $articles
 * @method static bool|null forceDelete()
 * @method static \Illuminate\Database\Query\Builder|\App\Models\ArticleCategory onlyTrashed()
 * @method static bool|null restore()
 * @method static \Illuminate\Database\Query\Builder|\App\Models\ArticleCategory withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\App\Models\ArticleCategory withoutTrashed()
 */
	class ArticleCategory extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Video
 *
 * @property-read \App\Models\VideoCategory $category
 * @property-read \App\User $user
 */
	class Video extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\VideoCategory
 *
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Video[] $videos
 * @method static bool|null forceDelete()
 * @method static \Illuminate\Database\Query\Builder|\App\Models\VideoCategory onlyTrashed()
 * @method static bool|null restore()
 * @method static \Illuminate\Database\Query\Builder|\App\Models\VideoCategory withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\App\Models\VideoCategory withoutTrashed()
 */
	class VideoCategory extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\About
 *
 */
	class About extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Article
 *
 * @property-read \App\Models\ArticleCategory $category
 * @property-read \App\User $user
 */
	class Article extends \Eloquent {}
}

