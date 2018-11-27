<div class="form-group {!! !$errors->has($label) ?: 'has-error' !!}">

    <label for="{{$id}}" class="col-sm-2 control-label">{{$label}}</label>

    <div class="{{$viewClass['field']}}">

        @include('admin::form.error')

        <textarea id='{{ $id }}' name="{{$name}}"  placeholder="请输入相关文字">
        {!! old($column, $value) !!}
        </textarea>

    </div>
</div>