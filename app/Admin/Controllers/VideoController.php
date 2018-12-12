<?php

namespace App\Admin\Controllers;

use App\Models\Video;
use App\Http\Controllers\Controller;
use App\Models\VideoCategory;
use Carbon\Carbon;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\MessageBag;

class VideoController extends Controller
{
    use HasResourceActions;

    /**
     * Index interface.
     *
     * @param Content $content
     * @return Content
     */
    public function index(Content $content)
    {
        return $content
            ->header('视频管理')
            ->description('视频列表')
            ->body($this->grid());
    }

    /**
     * Show interface.
     *
     * @param mixed $id
     * @param Content $content
     * @return Content
     */
    public function show($id, Content $content)
    {
        return $content
            ->header('Detail')
            ->description('description')
            ->body($this->detail($id));
    }

    /**
     * Edit interface.
     *
     * @param mixed $id
     * @param Content $content
     * @return Content
     */
    public function edit($id, Content $content)
    {
        return $content
            ->header('Edit')
            ->description('description')
            ->body($this->form()->edit($id));
    }

    /**
     * Create interface.
     *
     * @param Content $content
     * @return Content
     */
    public function create(Content $content)
    {
        return $content
            ->header('Create')
            ->description('description')
            ->body($this->form());
    }

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Video);

        $grid->id('Id');
        $grid->title('标题');
        $grid->desc('描述');
        $grid->top_img('头图')->image();
        $grid->video_url('视频')->video();
        $grid->column('category.category', '类别');
        $grid->username('上次修改人');
        $grid->cloud_url('云盘')->href();
        $grid->created_at('创建时间');
        $grid->updated_at('更新时间');

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Video::findOrFail($id));

        $show->id('Id');
        $show->title('标题');
        $show->desc('描述');
        $show->top_img('头图')->image();
        $show->video_url('视频')->video();
        $show->video_category_id('类别');
        $show->username('修改人');
        $show->cloud_url('云盘')->href();
        $show->created_at('创建时间');
        $show->updated_at('更新时间');

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Video);

        $form->text('title', '标题');
        $form->text('desc', '描述');
//        $form->cropper('top_img', '头图')->cRatio(600, 400)
//            ->uniqueName()
//            ->move('mini/video/images/' . Carbon::today()->toDateString());
        $form->image('top_img')
            ->fit(600, 400)
            ->uniqueName()
            ->move('mini/video/images/' . Carbon::today()->toDateString());
        $form->file('video_url', '视频')
            ->uniqueName()
            ->rules('mimetypes:video/avi,video/mp4')
            ->move('mini/video/videos/' . Carbon::today()->toDateString());
        $form->select('video_category_id', '分类')->options(function () {
            $categories = VideoCategory::all();
            $arr = [];
            foreach ($categories as $category) {
                $arr[$category->id] = $category->category;
            }
            return $arr;
        });
        $form->text('cloud_url', '云盘')->rules('nullable|url');
        $form->hidden('username')->default(\Admin::user()->name);

        return $form;
    }
}
