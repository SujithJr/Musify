<?php

use Illuminate\Database\Seeder;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = ['Director', 'Musician', 'Artist'];
        foreach($roles as $role) {
            $data = new \App\Role;
            $data->role = $role;
            $data->save();
        }
    }
}
