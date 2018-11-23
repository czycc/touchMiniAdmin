<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVideosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title', 50);
            $table->string('desc')->nullable();
            $table->text('top_img');
            $table->text('video_url');
            $table->text('cloud_url')->nullable()->comment('视频的云盘链接');
            $table->integer('video_category_id')->unsigned();
            $table->string('username',50)->default('admin')->comment('上次修改人');
            $table->timestamps();

            $table->foreign('video_category_id')
                ->references('id')
                ->on('video_categories')
                ->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('videos');
    }
}
