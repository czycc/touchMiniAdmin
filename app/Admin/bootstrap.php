<?php

/**
 * Laravel-admin - admin builder based on Laravel.
 * @author z-song <https://github.com/z-song>
 *
 * Bootstraper for Admin.
 *
 * Here you can remove builtin form field:
 * Encore\Admin\Form::forget(['map', 'editor']);
 *
 * Or extend custom form field:
 * Encore\Admin\Form::extend('php', PHPEditor::class);
 *
 * Or require js and css assets:
 * Admin::css('/packages/prettydocs/css/styles.css');
 * Admin::js('/packages/prettydocs/js/main.js');
 *
 */

use Encore\Admin\Grid\Column;
use App\Admin\Extensions\Froala;

Encore\Admin\Form::forget(['map', 'editor']);
\Encore\Admin\Form::extend('editor', Froala::class);

Column::extend('href', function ($value) {
    if (is_null($value)) {
        return 'NULL';
    }
    return "<span><a href='$value' target='_blank'>前往查看</a></span>";
});

Column::extend('video', function ($value) {
    if (is_null($value)) {
        return 'NULL';
    }
    $value = \Illuminate\Support\Facades\Storage::disk(config('admin.upload.disk'))->url($value);
    return "<span><a href='$value' target='_blank'>前往查看</a></span>";
});