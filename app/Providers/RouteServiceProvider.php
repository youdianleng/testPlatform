<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    public const HOME = '/home';

    public function register()
    {
        //
    }

    public function boot()
    {
        parent::boot();
    }

    public function map()
    {
        $this->mapApiRoutes();
        $this->mapWebRoutes();
    }

    protected function mapApiRoutes()
    {
        Route::prefix('api')
             ->middleware('api')
             ->group(base_path('routes/api.php'));
    }

    protected function mapWebRoutes()
    {
        Route::middleware('web')
             ->group(base_path('routes/web.php'));
    }
}