<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('openid', 150)->unique();
            $table->string('phone', 11)->unique();
            $table->string('username', 10)->unique()->comment('姓名');
            $table->string('nickname');
            $table->text('avatar');
            $table->boolean('is_new')->default(1);
            $table->string('password')->default('12345678')
                ->comment('打算首次登陆使用手机号发送验证码');
            $table->rememberToken();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
