<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function index()
    {
        $projects = Company::where('finish','未完成')->orderBy('weight','desc')->get();
        return view('company', compact('projects'));
    }
}
