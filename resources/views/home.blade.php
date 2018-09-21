@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                @if (session('status'))

                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div class="alert alert-success">
                                {{ session('status') }}
                            </div>

                        </div>
                    </div>
                @endif

                <passport-clients></passport-clients>
                <passport-authorized-clients></passport-authorized-clients>
                <passport-personal-access-tokens></passport-personal-access-tokens>
            </div>
        </div>
    </div>
@endsection
