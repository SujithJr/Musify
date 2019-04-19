<?php

use App\User;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your Application. Factories provide a convenient way to generate new
| model instances for testing / seeding your Application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        // 'name' => 'James Cameron',
        'email' => $faker->unique()->safeEmail,
        // 'email' => 'james@gmail.com',
        'email_verified_at' => now(),
        'password' => Hash::make('test123456'), // password
        'role_id' => 3,
        'image' => $faker->image('public/storage', 1024, 720, 'fashion', false, false),
        'remember_token' => Str::random(10),
    ];
});

// 'name' => $faker->name,
//         // 'email' => 'james@gmail.com',
//         'email' => $faker->unique()->safeEmail,
//         'email_verified_at' => now(),
//         'password' => Hash::make('test@music'), // password
//         'role_id' => 2,
//         'image' => $faker->imageUrl(),
//         'remember_token' => Str::random(10),
