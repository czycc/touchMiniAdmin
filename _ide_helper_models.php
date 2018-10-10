<?php
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * App\Models\Article
 *
 * @property int $id
 * @property string $title
 * @property string $desc 描述
 * @property string $content
 * @property string $img_url
 * @property string $users_name
 * @property int $category_id
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Article whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Article whereContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Article whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Article whereDesc($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Article whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Article whereImgUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Article whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Article whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Article whereUsersName($value)
 */
	class Article extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Category
 *
 * @property int $id
 * @property string $category
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Article[] $Articles
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\ArticleCategory whereCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\ArticleCategory whereId($value)
 */
	class Category extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Commentproj
 *
 * @property int $id
 * @property int $project_id
 * @property int $user_id
 * @property string $comment
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Commentproj whereComment($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Commentproj whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Commentproj whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Commentproj whereProjectId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Commentproj whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Commentproj whereUserId($value)
 */
	class Commentproj extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Inventory
 *
 * @property int $id
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Inventory whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Inventory whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Inventory whereUpdatedAt($value)
 */
	class Inventory extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Project
 *
 * @property int $id
 * @property string $title
 * @property string $desc
 * @property string $start 项目开始时间
 * @property string $end 项目结束时间
 * @property string $status
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Project whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Project whereDesc($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Project whereEnd($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Project whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Project whereStart($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Project whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Project whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Project whereUpdatedAt($value)
 */
	class Project extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\ProjectUser
 *
 * @property int $project_id
 * @property int $user_id
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\ProjectUser whereProjectId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\ProjectUser whereUserId($value)
 */
	class ProjectUser extends \Eloquent {}
}

namespace App{
/**
 * App\User
 *
 * @property int $id
 * @property string $openid
 * @property string $phone
 * @property string $name 姓名
 * @property string $nickname
 * @property string $avatar
 * @property int $is_new
 * @property string $password 打算首次登陆使用手机号发送验证码
 * @property string|null $remember_token
 * @property \Carbon\Carbon|null $deleted_at
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @method static bool|null forceDelete()
 * @method static \Illuminate\Database\Query\Builder|\App\User onlyTrashed()
 * @method static bool|null restore()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereAvatar($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereIsNew($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereNickname($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereOpenid($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\User withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\App\User withoutTrashed()
 */
	class User extends \Eloquent {}
}

