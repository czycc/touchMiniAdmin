<?php

namespace App\Admin\Controllers;

use App\Models\Company;
use App\Http\Controllers\Controller;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;

class CompanyController extends Controller
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
            ->header('Index')
            ->description('description')
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
        $grid = new Grid(new Company);
        $grid->model()->orderBy('id', 'desc');
        $grid->id('Id')->sortable();
        $grid->column('name', '项目');
        $grid->location('地点');
        $grid->principal('负责人');
        $grid->supervision('监督人');
        $grid->dateStart('开始时间')->sortable();
        $grid->dateOver('结束时间')->sortable();
        $grid->weight('权重')->sortable();
        $grid->info('项目明细');
        $grid->column('pushed', '网站和公众号推送')->using(['0' => '否', '1' => '是']);
        $grid->column('finish', '是否完成')->using(['0' => '否', '1' => '是']);
        $grid->remark('备注');
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
        $show = new Show(Company::findOrFail($id));

        $show->id('Id');
        $show->column('name', 'Name');
        $show->location('Location');
        $show->principal('Principal');
        $show->supervision('Supervision');
        $show->dateStart('DateStart');
        $show->dateOver('DateOver');
        $show->weight('Weight');
        $show->info('Info');
        $show->column('pushed', 'Push');
        $show->remark('Remark');
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
        $form = new Form(new Company);

        $form->text('name', '项目');
        $form->text('location', '地点');
        $form->text('principal', '负责人');
        $form->text('supervision', '监督人');
        $form->date('dateStart', '开始时间')->default(date('Y-m-d'));
        $form->date('dateOver', '结束时间')->default(date('Y-m-d'));
        $form->number('weight', '权重')->default(99);
        $form->textarea('info', '项目明细');
        $form->switch('finish', '是否完成')->states([
            'on' => ['value' => 1, 'text' => '是', 'color' => 'success'],
            'off' => ['value' => 0, 'text' => '否', 'color' => 'danger'],
        ]);
        $form->switch('pushed', '网站和公众号推送')->states([
            'on' => ['value' => 1, 'text' => '是', 'color' => 'success'],
            'off' => ['value' => 0, 'text' => '否', 'color' => 'danger'],
        ]);
        $form->textarea('remark', '备注');

        return $form;
    }
}
