<?php

namespace App;

use Webpatser\Uuid\Uuid;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{

    public function users ()
    {
        return $this->hasMany(\App\User::class);
    }

    public static function boot ()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->uuid = (string) Uuid::generate(4);
        });
    }

    public function getRouteKeyName ()
    {
        return 'uuid';
    }
}
