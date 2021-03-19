<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\QuranController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\ClassController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group([
    'middleware' => 'api'
], function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::get('/qurans', [QuranController::class, 'index']);
});

Route::group(['middleware' => ['jwt.verify']], function () {
    //get profile
    Route::get('/profile', [UserController::class, 'profile']);
    //teacher
    Route::get('/teacher', [TeacherController::class, 'index']);
    Route::post('/teacher', [TeacherController::class, 'create']);
    Route::put('/teacher/{id}', [TeacherController::class, 'update']);
    Route::delete('/teacher/{id}', [TeacherController::class, 'delete']);
    //class
    Route::get('/class', [ClassController::class, 'index']);
    Route::post('/class', [ClassController::class, 'create']);
    Route::put('/class/{id}', [ClassController::class, 'update']);
    Route::delete('/class/{id}', [ClassController::class, 'delete']);
});
