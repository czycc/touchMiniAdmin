<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title', 100)->unique();
            $table->text('desc');
            $table->date('start')->comment('项目开始时间');
            $table->date('end')->comment('项目结束时间');
            $table->enum('status', ['待确定', '准备中', '执行中', '维护中', '失败', '完成'])
                ->default('待确定');
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
        Schema::dropIfExists('projects');
    }
}
