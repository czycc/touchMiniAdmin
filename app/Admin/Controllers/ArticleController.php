<?php

namespace App\Admin\Controllers;

use App\Models\Article;
use App\Http\Controllers\Controller;
use App\Models\ArticleCategory;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;
use Carbon\Carbon;

class ArticleController extends Controller
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
            ->header('文章管理')
            ->description('文章列表')
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
        $grid = new Grid(new Article);

        $grid->id('Id');
        $grid->title('标题');
        $grid->desc('描述')->limit(30);
        $grid->content('内容')->limit(30);
        $grid->img_url('头图')->image();
        $grid->username('上次修改人');
        $grid->column('category.category', '类别');
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
        $show = new Show(Article::findOrFail($id));

        $show->id('Id');
        $show->title('Title');
        $show->desc('Desc');
        $show->content('Content');
        $show->img_url('Img url');
        $show->username('Username');
        $show->article_category_id('Article category id');
        $show->created_at('Created at');
        $show->updated_at('Updated at');

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Article);

        $form->text('title', '标题');
        $form->text('desc', '描述');
        $form->select('article_category_id', '分类')->options(function () {
            $categories = ArticleCategory::all();
            $arr = [];
            foreach ($categories as $category) {
                $arr[$category->id] = $category->category;
            }
            return $arr;
        });
        $form->image('img_url', '头图')->fit(600, 400)
            ->fit(600, 400)
            ->uniqueName()
            ->move('mini/article/images/' . Carbon::today()->toDateString());

        $form->editor('content', '内容');

        $form->hidden('username', 'Username')->default('other');

        return $form;
    }
}
