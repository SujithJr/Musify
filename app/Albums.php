<?php

namespace App;

use Webpatser\Uuid\Uuid;
use Illuminate\Database\Eloquent\Model;

class Albums extends Model
{
    protected $fillable = ['name', 'user_id', 'image'];

    // protected $hidden = [
    //     'user_id',
    // ];

    public function user ()
    {
        return $this->belongsTo(\App\User::class, 'user_id');
    }

    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->uuid = (string) Uuid::generate(4);
        });
    }

    public function getRouteKeyName()
    {
        return 'uuid';
    }
}
