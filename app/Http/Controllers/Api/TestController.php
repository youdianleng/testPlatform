<?php

namespace App\Http\Controllers\Api;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
class TestController extends Controller
{
    public function index(){
        $users = User::all();

        return response()->json(['success' => true, 'data' => $users]); // Return JSON response to API
    }

}
