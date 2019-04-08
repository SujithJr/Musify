<?php

namespace App\Policies;

use App\User;
use App\Albums;
use Illuminate\Auth\Access\HandlesAuthorization;

class AlbumsPolicy
{
    use HandlesAuthorization;

    public function isAdmin(User $user, Albums $albums)
    {
        return $user->role_id == 2;
    }

    public function isMember(User $user, Albums $albums)
    {
        return $user->role_id == 3;
    }
}
