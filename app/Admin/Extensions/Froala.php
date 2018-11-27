<?php

namespace App\Admin\Extensions;

use Encore\Admin\Form\Field;

class Froala extends Field
{
    protected $view = 'admin.froala';

    protected static $css = [
        '/vendor/laravel-admin-ext/froala_2.9.1/css/third_party/font_awesome.min.css',
        '/vendor/laravel-admin-ext/froala_2.9.1/css/froala_editor.min.css',
        '/vendor/laravel-admin-ext/froala_2.9.1/css/froala_style.min.css',
        '/vendor/laravel-admin-ext/froala_2.9.1/css/plugins/code_view.min.css',
        '/vendor/laravel-admin-ext/froala_2.9.1/css/plugins/image_manager.min.css',
        '/vendor/laravel-admin-ext/froala_2.9.1/css/plugins/image.min.css',
        '/vendor/laravel-admin-ext/froala_2.9.1/css/plugins/table.min.css',
        '/vendor/laravel-admin-ext/froala_2.9.1/css/plugins/video.min.css',
        '/vendor/laravel-admin-ext/froala_2.9.1/css/third_party/codemirror.min.css'
    ];

    protected static $js = [
        '/vendor/laravel-admin-ext/froala_2.9.1/js/codemirror.min.js',
        '/vendor/laravel-admin-ext/froala_2.9.1/js/xml.min.js',
        '/vendor/laravel-admin-ext/froala_2.9.1/js/froala_editor.min.js',
        '/vendor/laravel-admin-ext/froala_2.9.1/js/plugins/align.min.js',
        '/vendor/laravel-admin-ext/froala_2.9.1/js/plugins/code_beautifier.min.js',
        '/vendor/laravel-admin-ext/froala_2.9.1/js/plugins/code_view.min.js',
        '/vendor/laravel-admin-ext/froala_2.9.1/js/plugins/draggable.min.js',
        '/vendor/laravel-admin-ext/froala_2.9.1/js/plugins/image.min.js',
        '/vendor/laravel-admin-ext/froala_2.9.1/js/plugins/image_manager.min.js',
        '/vendor/laravel-admin-ext/froala_2.9.1/js/plugins/link.min.js',
        '/vendor/laravel-admin-ext/froala_2.9.1/js/plugins/lists.min.js',
        '/vendor/laravel-admin-ext/froala_2.9.1/js/plugins/paragraph_format.min.js',
        '/vendor/laravel-admin-ext/froala_2.9.1/js/plugins/paragraph_style.min.js',
        '/vendor/laravel-admin-ext/froala_2.9.1/js/plugins/table.min.js',
        '/vendor/laravel-admin-ext/froala_2.9.1/js/plugins/video.min.js',
        '/vendor/laravel-admin-ext/froala_2.9.1/js/plugins/url.min.js',
        '/vendor/laravel-admin-ext/froala_2.9.1/js/plugins/entities.min.js'
    ];

    public function render()
    {
        $name = $this->formatName($this->column);

        $this->script = <<<EOT
$('#$this->id').froalaEditor({
    key: '',
    language: 'zh_cn',
    height: 500,

    // disable quick insert
    quickInsertTags: [],

    // toolbar buttons
    toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', '|', 'paragraphFormat', 'fontSize', 'color', '|', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertFile', 'insertImage', 'insertVideo', 'embedly', 'insertTable', '|', 'insertHR', 'selectAll', 'clearFormatting', '|', 'spellChecker', 'help', 'html', '|', 'undo', 'redo'],

    // upload file
    fileUploadParam: 'file',
    fileUploadURL: '/media',
    fileUploadMethod: 'POST',
    fileMaxSize: 20 * 1024 * 1024,
    fileAllowedTypes: ['*'],

    // upload image
    imageUploadParam: 'file',
    imageUploadURL: '/media',
    imageUploadMethod: 'POST',
    imageMaxSize: 5 * 1024 * 1024,
    imageAllowedTypes: ['jpeg', 'jpg', 'png', 'gif', 'bmp', 'svg+xml'],

    // upload video
    videoUploadParam: 'file',
    videoUploadURL: '/media',
    videoUploadMethod: 'POST',
    videoMaxSize: 50 * 1024 * 1024,
    videoAllowedTypes: ['avi', 'mov', 'mp4', 'm4v', 'mpeg', 'mpg', 'wmv', 'ogv'],
})
EOT;

        return parent::render();

    }

}